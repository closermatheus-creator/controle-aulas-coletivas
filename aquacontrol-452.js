// ============================================================
// AQUACONTROL — ATUALIZAÇÃO #452 (carregar DEPOIS do script.js)
// Troca só as funções que perdiam dado ou contavam errado e acrescenta:
// saída com motivo, registro de pagamento, valor/plano/aniversário do aluno
// e o "Movimento do mês". Para desfazer: tirar a linha deste arquivo do index.html.
// Precisa do SQL 452-supabase-aquacontrol.sql já rodado no Supabase.
// ============================================================
const VERSAO_452 = "7.3.20261029";

// ---------- 1. Nada de regravar todos os alunos com a cópia velha da tela ----------
// Antes: cada gravação marcava "alterações pendentes" e, de 1 em 1 hora (ou no "Salvar Tudo"), a tela regravava
// os 600+ alunos com o que estava na memória dela — desfazendo o que outro computador tinha mudado (ex.: vencimento
// renovado). Cada gravação já vai direto para o banco na hora; então nada fica pendente.
const salvarAluno_original = salvarAluno;
salvarAluno = async function (aluno) {
    if (!aluno.id) {
        // Campos novos do formulário de matrícula (o formulário antigo não sabe deles).
        const v = document.getElementById('fab452Valor');
        if (v) {
            aluno.valor_mensal = lerValor(v.value);
            aluno.plano = document.getElementById('fab452Plano')?.value || null;
            aluno.aniversario = document.getElementById('fab452Aniv')?.value.trim() || null;
        }
    }
    const r = await salvarAluno_original(aluno);
    clearDirty('alunos');
    return r;
};

const salvarExperimental_original = salvarExperimental;
salvarExperimental = async function (exp) {
    const r = await salvarExperimental_original(exp);
    clearDirty('experimentais');
    return r;
};

salvarTudo = async function () {
    if (dirtyFlags.turmas) await salvarTurmas();
    clearDirty('alunos');
    clearDirty('experimentais');
    mostrarToast('<i data-lucide="check" class="ic-sm"></i> Tudo já está salvo — cada alteração é gravada na hora.', 'sucesso');
};

// Excluir turma: só mexe nos alunos daquela turma (antes regravava todos).
excluirTurmaPermanente = function (hId) {
    const turma = horariosConfig.find(h => h.id === hId);
    if (!turma) return;
    const afetados = alunos.filter(a => turma.dias.some(dia => Number(a[diasMap[dia]]) === Number(hId)));
    let msg = `EXCLUIR TURMA PERMANENTEMENTE?\n\n${turma.modalidade}\n${turma.horario}\nDias: ${turma.dias.join(', ')}\n\n`;
    if (afetados.length > 0) msg += `ATENÇÃO: ${afetados.length} aluno(s) estão matriculados!\n\n`;
    msg += `Digite "SIM" para confirmar.`;
    if (prompt(msg) !== "SIM") { alert("Cancelado!"); return; }
    afetados.forEach(a => {
        turma.dias.forEach(dia => { if (Number(a[diasMap[dia]]) === Number(hId)) a[diasMap[dia]] = ''; });
        salvarAluno(a);
    });
    const index = horariosConfig.findIndex(h => h.id === hId);
    if (index !== -1) horariosConfig.splice(index, 1);
    salvarTurmas();
    renderizarTudo();
    fecharSuperModal();
    mostrarToast(`<i data-lucide="check" class="ic-sm"></i> Turma "${turma.modalidade}" excluída!`);
};

// ---------- 2. Sem limite de 1000 alunos nem de 100 aulas no histórico ----------
async function lerTudo(tabela, ordem, asc) {
    const todos = [];
    for (let de = 0; ; de += 1000) {
        const { data, error } = await supabaseClient.from(tabela).select('*').order(ordem, { ascending: asc }).range(de, de + 999);
        if (error) throw error;
        todos.push(...(data || []));
        if (!data || data.length < 1000) break;
    }
    return todos;
}

carregarAlunos = async function (forceRefresh = false) {
    if (!forceRefresh) {
        const cached = getCache('cache_alunos');
        if (cached) { alunos = cached; atualizarContador452(); return alunos; }
    }
    try {
        alunos = (await lerTudo('alunos', 'codigo', true)).filter(a => a.id != null);
        atualizarContador452();
        setCache('cache_alunos', alunos);
        return alunos;
    } catch (erro) {
        console.error("❌ Erro ao carregar alunos:", erro);
        const cached = getCache('cache_alunos');
        alunos = cached || [];
        return alunos;
    }
};

function atualizarContador452() {
    if (alunos.length > 0) {
        const maxCodigo = Math.max(...alunos.map(a => Number(a.codigo) || 0).filter(n => n < 100000));
        studentIdCounter = Math.max(maxCodigo + 1, 1000);
    }
}

carregarHistoricoExperimental = async function (forceRefresh = false) {
    if (!forceRefresh) {
        const cached = getCache('cache_historico');
        if (cached) return cached;
    }
    try {
        const result = await lerTudo('historico_experimentais', 'timestamp', false);
        setCache('cache_historico', result, CACHE_CONFIG.TTL_HISTORICO);
        return result;
    } catch (erro) {
        console.error("❌ Erro ao carregar histórico:", erro);
        return getCache('cache_historico') || [];
    }
};

// ---------- 3. Vencimento com ano e virada do ano ----------
// "16/02/2026" nunca aparecia como vencido; "05/01" sem ano aparecia vencido em dezembro.
function dataVencimento452(dataVenc) {
    if (!dataVenc) return null;
    let s = String(dataVenc).trim();
    if (s.includes('T') || /^\d{4}-\d{2}-\d{2}$/.test(s)) {
        const p = s.split('T')[0].split('-');
        return new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
    }
    const m = s.match(/^(\d{1,2})\/(\d{1,2})(?:\/(\d{2,4}))?$/);
    if (!m) return null;
    const hoje = new Date(); hoje.setHours(0, 0, 0, 0);
    let ano = m[3] ? Number(m[3]) : hoje.getFullYear();
    if (ano < 100) ano += 2000;
    const mes = Number(m[2]) - 1;
    const dia = Math.min(Number(m[1]), new Date(ano, mes + 1, 0).getDate());
    const d = new Date(ano, mes, dia);
    if (!m[3] && (hoje - d) / 86400000 > 60) d.setFullYear(ano + 1); // "15/01" visto em novembro = janeiro que vem
    return d;
}

function formatarVenc452(d) {
    return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
}

verificarVencimento = function (dataVenc) {
    if (!dataVenc) return { vencido: false, texto: "Sem data" };
    const d = dataVencimento452(dataVenc);
    if (!d) return { vencido: false, texto: String(dataVenc) };
    const hoje = new Date(); hoje.setHours(0, 0, 0, 0);
    const diff = Math.round((d - hoje) / 86400000);
    if (diff < 0) return { vencido: true, texto: `<i data-lucide="triangle-alert" class="ic-sm"></i> Vencido há ${-diff} dia${diff === -1 ? '' : 's'}` };
    if (diff === 0) return { vencido: true, texto: `<i data-lucide="triangle-alert" class="ic-sm"></i> Vence hoje` };
    return { vencido: false, texto: `<i data-lucide="circle" class="ic-sm"></i> ${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}` };
};

// ---------- 4. Tela atualiza sozinha quando outro computador muda um aluno ----------
const configurarRealtime_original = configurarRealtime;
configurarRealtime = function () {
    configurarRealtime_original();
    let timer = null;
    supabaseClient
        .channel('aquacontrol-alunos')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'alunos' }, () => {
            clearTimeout(timer);
            timer = setTimeout(async () => {
                await carregarAlunos(true);
                renderizarTudo();
                if (document.getElementById('superStudentTableBody')) renderStudentTableSuper();
                if (document.getElementById('superVencidosBody')) renderVencidosSuper();
            }, 800);
        })
        .subscribe();
};

// ---------- 5. Faltas na aula experimental vêm do histórico (antes zeravam ao recarregar a página) ----------
async function carregarFaltas452() {
    try {
        const hist = await carregarHistoricoExperimental(false);
        const faltas = {};
        hist.forEach(h => { if (h.resultado === 'nao_compareceu' && h.telefone) faltas[h.telefone] = (faltas[h.telefone] || 0) + 1; });
        historicoFaltasExperimentais = faltas;
    } catch (e) { /* sem histórico, sem aviso */ }
}
const carregarDados_original = carregarDados;
carregarDados = async function () {
    await carregarDados_original();
    await carregarFaltas452();
    renderizarTudo();
    renderPainelExperimentaisHoje();
};

// ---------- 6. "Excluir" vira "Dar saída" (com motivo) ----------
const MOTIVOS_SAIDA = ['Preço / financeiro', 'Horário não serve mais', 'Mudou de cidade / bairro', 'Saúde', 'Falta de tempo', 'Criança desistiu', 'Insatisfeito com as aulas', 'Foi para outra academia', 'Sem resposta / sumiu', 'Outro', 'Cadastro errado / duplicado'];

excluirAlunoPermanente = function (id, hId) {
    const aluno = alunos.find(a => Number(a.id) === Number(id));
    if (!aluno) { mostrarToast('<i data-lucide="x" class="ic-sm"></i> Aluno não encontrado!', 'erro'); return; }
    abrirModal452(`<i data-lucide="log-out" class="ic-sm"></i> Dar saída — #${aluno.codigo} ${esc452(aluno.nome)}`, `
        <div style="max-width:480px;margin:0 auto;">
            <p style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:14px;">O aluno sai das turmas e da lista, mas fica guardado no histórico com a data e o motivo. É isso que mostra quantos saíram no mês e por quê.</p>
            <label style="font-weight:600;display:block;margin-bottom:5px;">Motivo da saída:</label>
            <select id="saida452Motivo" class="form-select-field" style="width:100%;margin-bottom:12px;">
                <option value="">— Escolha —</option>
                ${MOTIVOS_SAIDA.map(m => `<option value="${esc452(m)}">${esc452(m)}</option>`).join('')}
            </select>
            <label style="font-weight:600;display:block;margin-bottom:5px;">Detalhe (opcional):</label>
            <input type="text" id="saida452Detalhe" class="search-input-field" style="width:100%;" placeholder="Ex.: vai voltar em março">
            <div class="form-actions-row">
                <button class="btn-save-modal" onclick="confirmarSaida452(${aluno.id}, ${hId || 'null'})"><i data-lucide="check" class="ic-sm"></i> Confirmar saída</button>
                <button class="btn-discard-modal" onclick="${hId ? `abrirModalHorario(${hId})` : 'fecharSuperModal()'}">Cancelar</button>
            </div>
        </div>`);
};

async function confirmarSaida452(id, hId) {
    const aluno = alunos.find(a => Number(a.id) === Number(id));
    const motivo = document.getElementById('saida452Motivo').value;
    const detalhe = document.getElementById('saida452Detalhe').value.trim();
    if (!aluno) return;
    if (!motivo) { alert('Escolha o motivo da saída.'); return; }
    if (!confirm(`Confirmar a saída de ${aluno.nome}?\nMotivo: ${motivo}${detalhe ? ' — ' + detalhe : ''}`)) return;
    try {
        const { error } = await supabaseClient.from('alunos').update({ motivo_saida: detalhe ? `${motivo} — ${detalhe}` : motivo }).eq('id', aluno.id);
        if (error) throw error;
        if (!(await excluirAluno(aluno.id))) throw new Error('não consegui tirar o aluno da lista');
        alunos = alunos.filter(a => Number(a.id) !== Number(id));
        renderizarTudo();
        renderPainelExperimentaisHoje();
        fecharSuperModal();
        mostrarToast(`<i data-lucide="check" class="ic-sm"></i> Saída de ${esc452(aluno.nome)} registrada.`);
    } catch (erro) {
        mostrarToast(`<i data-lucide="x" class="ic-sm"></i> Erro: ${erro.message}`, 'erro');
    }
}

// ---------- 7. Registrar pagamento (renova o vencimento e guarda o histórico) ----------
const PLANOS_452 = { 'Mensal': 1, 'Trimestral': 3, 'Semestral': 6, 'Anual': 12 };
const FORMAS_452 = ['Pix', 'Cartão de crédito', 'Cartão de débito', 'Dinheiro', 'Boleto', 'Wellhub / Gympass', 'TotalPass', 'Outro'];

function lerValor(txt) {
    const n = Number(String(txt || '').replace(/[^\d,.-]/g, '').replace(/\.(?=\d{3}(\D|$))/g, '').replace(',', '.'));
    return Number.isFinite(n) && n > 0 ? Math.round(n * 100) / 100 : null;
}
const reais = (n) => Number(n || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

function proximoVencimento452(aluno, meses) {
    const hoje = new Date(); hoje.setHours(0, 0, 0, 0);
    let base = dataVencimento452(aluno.vencimento);
    // Vencimento muito antigo ou sem data: conta a partir de hoje.
    if (!base || (hoje - base) / 86400000 > 60) base = hoje;
    const d = new Date(base.getFullYear(), base.getMonth() + meses, 1);
    d.setDate(Math.min(base.getDate(), new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate()));
    return d;
}

function abrirPagamento452(id) {
    const aluno = alunos.find(a => Number(a.id) === Number(id));
    if (!aluno) return;
    const plano = PLANOS_452[aluno.plano] ? aluno.plano : 'Mensal';
    const prox = proximoVencimento452(aluno, PLANOS_452[plano]);
    const hojeISO = formatarDataISO();
    abrirModal452(`<i data-lucide="wallet" class="ic-sm"></i> Registrar pagamento — #${aluno.codigo} ${esc452(aluno.nome)}`, `
        <div style="max-width:520px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:12px;">
            <div style="grid-column:1/-1;font-size:0.82rem;color:var(--text-secondary);">Vencimento atual: <strong>${esc452(aluno.vencimento || '—')}</strong> ${verificarVencimento(aluno.vencimento).texto}</div>
            <div><label>Valor pago (R$):</label><input id="pag452Valor" class="search-input-field" value="${aluno.valor_mensal ? String(aluno.valor_mensal).replace('.', ',') : ''}" placeholder="0,00"></div>
            <div><label>Data do pagamento:</label><input type="date" id="pag452Data" class="search-input-field" value="${hojeISO}"></div>
            <div><label>Forma:</label><select id="pag452Forma" class="form-select-field" style="width:100%;">${FORMAS_452.map(f => `<option>${f}</option>`).join('')}</select></div>
            <div><label>Plano:</label><select id="pag452Plano" class="form-select-field" style="width:100%;" onchange="atualizarProxVenc452(${aluno.id})">${Object.keys(PLANOS_452).map(p => `<option ${p === plano ? 'selected' : ''}>${p}</option>`).join('')}</select></div>
            <div><label>Novo vencimento:</label><input id="pag452Venc" class="search-input-field" value="${formatarVenc452(prox)}" placeholder="DD/MM/AAAA"></div>
            <div><label>Referente a:</label><input id="pag452Ref" class="search-input-field" value="${String(prox.getMonth() === 0 ? 12 : prox.getMonth()).padStart(2, '0')}/${prox.getMonth() === 0 ? prox.getFullYear() - 1 : prox.getFullYear()}" placeholder="MM/AAAA"></div>
            <label style="grid-column:1/-1;font-size:0.82rem;display:flex;gap:6px;align-items:center;"><input type="checkbox" id="pag452Fixar" ${aluno.valor_mensal ? '' : 'checked'}> Guardar este valor e plano no cadastro do aluno</label>
            <div class="form-actions-row" style="grid-column:1/-1;">
                <button class="btn-save-modal" onclick="salvarPagamento452(${aluno.id})"><i data-lucide="check" class="ic-sm"></i> Registrar pagamento</button>
                <button class="btn-discard-modal" onclick="fecharSuperModal()">Cancelar</button>
            </div>
        </div>`);
}

function atualizarProxVenc452(id) {
    const aluno = alunos.find(a => Number(a.id) === Number(id));
    const meses = PLANOS_452[document.getElementById('pag452Plano').value] || 1;
    document.getElementById('pag452Venc').value = formatarVenc452(proximoVencimento452(aluno, meses));
}

async function salvarPagamento452(id) {
    const aluno = alunos.find(a => Number(a.id) === Number(id));
    if (!aluno) return;
    const valor = lerValor(document.getElementById('pag452Valor').value);
    const novoVenc = document.getElementById('pag452Venc').value.trim();
    const plano = document.getElementById('pag452Plano').value;
    if (!valor) { alert('Digite o valor pago.'); return; }
    if (!dataVencimento452(novoVenc)) { alert('Novo vencimento inválido. Use DD/MM/AAAA.'); return; }
    try {
        const { error } = await supabaseClient.from('pagamentos').insert([{
            aluno_id: aluno.id, aluno_codigo: aluno.codigo, aluno_nome: aluno.nome, aluno_telefone: aluno.telefone,
            valor, data_pagamento: document.getElementById('pag452Data').value || formatarDataISO(),
            forma: document.getElementById('pag452Forma').value, referencia: document.getElementById('pag452Ref').value.trim(),
            vencimento_antes: aluno.vencimento, vencimento_novo: novoVenc,
        }]);
        if (error) throw error;
        const mudancas = { vencimento: novoVenc };
        if (document.getElementById('pag452Fixar').checked) { mudancas.valor_mensal = valor; mudancas.plano = plano; }
        // Só os campos que mudaram — nunca o aluno inteiro.
        const { error: e2 } = await supabaseClient.from('alunos').update(mudancas).eq('id', aluno.id);
        if (e2) throw e2;
        Object.assign(aluno, mudancas);
        setCache('cache_alunos', alunos);
        fecharSuperModal();
        renderizarTudo();
        mostrarToast(`<i data-lucide="check" class="ic-sm"></i> Pagamento de ${reais(valor)} registrado — vence em ${novoVenc}.`);
    } catch (erro) {
        mostrarToast(`<i data-lucide="x" class="ic-sm"></i> Erro ao registrar: ${erro.message}`, 'erro');
    }
}

// ---------- 8. Valor, plano e aniversário no cadastro e na edição ----------
function camposExtras452(prefixo, aluno) {
    return `
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin:12px 0;">
            <div><label style="font-size:0.8rem;font-weight:bold;">Valor mensal (R$):</label><input id="${prefixo}Valor" class="search-input-field" value="${aluno?.valor_mensal ? String(aluno.valor_mensal).replace('.', ',') : ''}" placeholder="0,00"></div>
            <div><label style="font-size:0.8rem;font-weight:bold;">Plano:</label><select id="${prefixo}Plano" class="form-select-field" style="width:100%;"><option value="">—</option>${Object.keys(PLANOS_452).map(p => `<option ${aluno?.plano === p ? 'selected' : ''}>${p}</option>`).join('')}</select></div>
            <div><label style="font-size:0.8rem;font-weight:bold;">Aniversário:</label><input id="${prefixo}Aniv" class="search-input-field" value="${esc452(aluno?.aniversario || '')}" placeholder="DD/MM"></div>
        </div>`;
}

const abrirEdicaoCompletaInline_original = abrirEdicaoCompletaInline;
abrirEdicaoCompletaInline = function (id, hId) {
    abrirEdicaoCompletaInline_original(id, hId);
    const aluno = alunos.find(a => a.id == id);
    const div = document.getElementById(hId ? 'centralFormEdicaoContainer' : 'superFormEdicaoContainer');
    const grade = div?.querySelector('div[style*="EDF2F7"]');
    if (aluno && grade && !document.getElementById('edit452Valor')) grade.insertAdjacentHTML('beforebegin', camposExtras452('edit452', aluno));
};

const salvarEdicaoCompleta_original = salvarEdicaoCompleta;
salvarEdicaoCompleta = async function (id, hId) {
    const aluno = alunos.find(a => Number(a.id) === Number(id));
    if (aluno && document.getElementById('edit452Valor')) {
        aluno.valor_mensal = lerValor(document.getElementById('edit452Valor').value);
        aluno.plano = document.getElementById('edit452Plano').value || null;
        aluno.aniversario = document.getElementById('edit452Aniv').value.trim() || null;
    }
    return salvarEdicaoCompleta_original(id, hId);
};

const abrirFormularioSobreposto_original = abrirFormularioSobreposto;
abrirFormularioSobreposto = function (tipo) {
    abrirFormularioSobreposto_original(tipo);
    if (tipo !== 'cadastro') return;
    const grade = document.querySelector('#superModalCorpo div[style*="EDF2F7"]');
    if (grade) grade.insertAdjacentHTML('beforebegin', camposExtras452('fab452', null));
};

// Ao fechar o modal, os campos do cadastro somem (para não entrarem num salvamento de outro aluno).
const fecharSuperModal_original = fecharSuperModal;
fecharSuperModal = function (e) {
    fecharSuperModal_original(e);
    if (!document.getElementById('globalSuperModal').classList.contains('active')) {
        document.getElementById('superModalCorpo').innerHTML = '';
    }
};

// ---------- 9. Movimento do mês ----------
async function abrirMovimento452() {
    abrirModal452('<i data-lucide="bar-chart-3" class="ic-sm"></i> Movimento do mês', `
        <div style="display:flex;gap:10px;align-items:center;margin-bottom:16px;">
            <label>Mês:</label><input type="month" id="mov452Mes" class="search-input-field" style="max-width:180px;" value="${formatarDataISO().slice(0, 7)}" onchange="renderMovimento452()">
        </div>
        <div id="mov452Corpo">Carregando...</div>`);
    renderMovimento452();
}

async function renderMovimento452() {
    const corpo = document.getElementById('mov452Corpo');
    const mes = document.getElementById('mov452Mes').value;
    if (!corpo || !mes) return;
    const [y, m] = mes.split('-').map(Number);
    const ini = `${mes}-01`;
    const fim = `${mes}-${String(new Date(y, m, 0).getDate()).padStart(2, '0')}`;
    try {
        const [movs, pags, hist] = await Promise.all([
            supabaseClient.from('movimentacoes').select('tipo,motivo,aluno_cadastro,data').gte('data', ini).lte('data', fim).limit(5000),
            supabaseClient.from('pagamentos').select('valor,forma').gte('data_pagamento', ini).lte('data_pagamento', fim).limit(5000),
            supabaseClient.from('historico_experimentais').select('resultado,matriculado').gte('data', ini).lte('data', fim).limit(5000),
        ]);
        for (const r of [movs, pags, hist]) if (r.error) throw r.error;
        const mv = movs.data || [];
        const conta = (t) => mv.filter(x => x.tipo === t).length;
        const entradas = alunos.filter(a => String(a.data_cadastro || '').slice(0, 7) === mes).length
            + mv.filter(x => x.tipo === 'saida' && String(x.aluno_cadastro || '').slice(0, 7) === mes).length;
        const saidas = mv.filter(x => x.tipo === 'saida');
        const motivos = {};
        saidas.forEach(s => { const k = (s.motivo || 'não informado').split(' — ')[0]; motivos[k] = (motivos[k] || 0) + 1; });
        const total = (pags.data || []).reduce((s, p) => s + Number(p.valor || 0), 0);
        const veio = (hist.data || []).filter(h => h.resultado === 'compareceu');
        const ativos = alunos.filter(a => (a.status || 'ATIVO') === 'ATIVO');
        const vencidos = ativos.filter(a => verificarVencimento(a.vencimento).vencido);
        const emAberto = vencidos.reduce((s, a) => s + Number(a.valor_mensal || 0), 0);
        const card = (v, l) => `<div class="widget"><div class="val">${v}</div><div class="lbl">${l}</div></div>`;
        corpo.innerHTML = `
            <div class="summary-widgets">
                ${card(entradas, 'Entradas')}${card(saidas.length, 'Saídas')}${card((entradas - saidas.length >= 0 ? '+' : '') + (entradas - saidas.length), 'Saldo')}
                ${card((pags.data || []).length, 'Pagamentos')}${card(reais(total), 'Recebido')}
                ${card(vencidos.length, 'Vencidos hoje')}${card(emAberto ? reais(emAberto) : '—', 'Em aberto (valor cadastrado)')}
            </div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px;font-size:0.85rem;">
                <div><strong>Saídas por motivo</strong><br>${Object.entries(motivos).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${esc452(k)}: ${v}`).join('<br>') || 'Nenhuma'}</div>
                <div><strong>Pausas e trancamentos</strong><br>Pausaram: ${conta('pausa')}<br>Trancaram: ${conta('trancamento')}<br>Voltaram: ${conta('retorno')}</div>
                <div><strong>Aulas experimentais</strong><br>Vieram: ${veio.length} de ${(hist.data || []).length}<br>Matricularam: ${veio.filter(h => h.matriculado).length}${veio.length ? ` (${Math.round(veio.filter(h => h.matriculado).length / veio.length * 100)}%)` : ''}</div>
            </div>
            <p style="font-size:0.75rem;color:var(--text-muted);margin-top:14px;">Saídas, pausas e pagamentos contam a partir do dia em que esta atualização entrou no ar. Recebido = só pagamentos registrados pelo botão "Pagamento".</p>`;
    } catch (erro) {
        corpo.innerHTML = `<div style="color:var(--brick);">Não consegui ler o movimento: ${esc452(erro.message)}. O SQL do pedido #452 já foi rodado no Supabase?</div>`;
    }
}

// ---------- utilitários de tela ----------
function abrirModal452(titulo, html) {
    document.getElementById('superModalTitulo').innerHTML = titulo;
    document.getElementById('superModalCorpo').innerHTML = html;
    document.getElementById('globalSuperModal').classList.add('active');
}

// Botões novos ao lado dos que já existem (sem reescrever as telas antigas):
// "Pagamento" antes de cada "Editar" de aluno; "Excluir" de aluno passa a se chamar "Dar saída".
function decorarBotoes452() {
    document.querySelectorAll('button[onclick^="abrirEdicaoCompletaInline("]:not([data-b452])').forEach(btn => {
        btn.dataset.b452 = '1';
        const id = (btn.getAttribute('onclick').match(/\((\d+)/) || [])[1];
        if (!id) return;
        const pag = document.createElement('button');
        pag.dataset.b452 = '1';
        pag.innerHTML = '<i data-lucide="wallet" class="ic-sm"></i> Pagamento';
        pag.style.cssText = 'background:#DCFCE7;color:#15803D;border:none;padding:5px 9px;border-radius:6px;font-weight:bold;font-size:0.72rem;cursor:pointer;';
        pag.onclick = (e) => { e.stopPropagation(); abrirPagamento452(Number(id)); };
        btn.insertAdjacentElement('beforebegin', pag);
    });
    document.querySelectorAll('button[onclick^="excluirAlunoPermanente("]:not([data-b452])').forEach(btn => {
        btn.dataset.b452 = '1';
        btn.innerHTML = '<i data-lucide="log-out" class="ic-sm"></i> Dar saída';
    });
    const linha = document.querySelector('.action-tabs-row');
    if (linha && !document.getElementById('btnMovimento452')) {
        const b = document.createElement('button');
        b.id = 'btnMovimento452';
        b.className = 'btn-action-tab';
        b.innerHTML = '<i data-lucide="trending-up" class="ic-sm"></i> Movimento do mês';
        b.onclick = abrirMovimento452;
        linha.appendChild(b);
    }
}
new MutationObserver(() => { clearTimeout(window.__b452); window.__b452 = setTimeout(decorarBotoes452, 50); })
    .observe(document.documentElement, { childList: true, subtree: true });

console.log(`🏊 AQUACONTROL atualização #452 (${VERSAO_452}) carregada.`);

function esc452(s) {
    return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
