// ============================================================
// AQUACONTROL v4.0 — CONFIGURAÇÕES GLOBAIS
// ============================================================
const MASTER_PASSWORD = "aqua123";

const firebaseConfig = {
  apiKey: "AIzaSyCMGMg8ITNtDK7J0ZFxAxkcot5PmU3znt0",
  authDomain: "aquacontrol-453ab.firebaseapp.com",
  projectId: "aquacontrol-453ab",
  storageBucket: "aquacontrol-453ab.firebasestorage.app",
  messagingSenderId: "519539395936",
  appId: "1:519539395936:web:61a37956c32bc24d506205"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ============================================================
// GRADE HORÁRIA COMPLETA (73 HORÁRIOS) — editável via UI
// ============================================================
let horariosConfig = [
    { id: 1, modalidade: "Natação Adulto", dias: ["Segunda","Quarta","Sexta"], horario: "06:00-06:40", capacidade: 10, turno: "manha" },
    { id: 2, modalidade: "Natação Adulto", dias: ["Segunda","Quarta","Sexta"], horario: "13:30-14:10", capacidade: 10, turno: "tarde" },
    { id: 3, modalidade: "Natação Adulto", dias: ["Segunda","Quarta","Sexta"], horario: "21:20-22:00", capacidade: 10, turno: "noite" },
    { id: 4, modalidade: "Natação Adulto", dias: ["Sexta"], horario: "11:30-12:10", capacidade: 10, turno: "tarde" },
    { id: 5, modalidade: "Natação Adulto", dias: ["Terça","Quinta"], horario: "06:00-06:40", capacidade: 10, turno: "manha" },
    { id: 6, modalidade: "Natação Adulto", dias: ["Terça","Quinta"], horario: "07:30-08:10", capacidade: 10, turno: "manha" },
    { id: 7, modalidade: "Natação Adulto", dias: ["Terça","Quinta"], horario: "15:10-15:50", capacidade: 10, turno: "tarde" },
    { id: 8, modalidade: "Natação Adulto", dias: ["Terça","Quinta"], horario: "17:00-17:40", capacidade: 10, turno: "tarde" },
    { id: 9, modalidade: "Natação Adulto", dias: ["Terça","Quinta"], horario: "21:20-22:00", capacidade: 10, turno: "noite" },
    { id: 10, modalidade: "Natação Adulto", dias: ["Sábado"], horario: "07:00-07:40", capacidade: 10, turno: "sabado" },
    { id: 11, modalidade: "Natação Adulto", dias: ["Sábado"], horario: "10:25-11:05", capacidade: 10, turno: "sabado" },
    { id: 12, modalidade: "Natação Adulto", dias: ["Sábado"], horario: "13:00-13:40", capacidade: 10, turno: "sabado" },
    { id: 13, modalidade: "Natação Adulto", dias: ["Sábado"], horario: "15:25-16:05", capacidade: 10, turno: "sabado" },
    { id: 14, modalidade: "Hidroginástica", dias: ["Segunda","Quarta","Sexta"], horario: "06:45-07:25", capacidade: 30, turno: "manha" },
    { id: 15, modalidade: "Hidroginástica", dias: ["Segunda","Quarta","Sexta"], horario: "07:30-08:10", capacidade: 30, turno: "manha" },
    { id: 16, modalidade: "Hidroginástica", dias: ["Segunda","Quarta","Sexta"], horario: "16:10-16:50", capacidade: 30, turno: "tarde" },
    { id: 17, modalidade: "Hidroginástica", dias: ["Segunda","Quarta","Sexta"], horario: "18:55-19:35", capacidade: 30, turno: "noite" },
    { id: 18, modalidade: "Hidroginástica", dias: ["Terça","Quinta"], horario: "06:45-07:25", capacidade: 30, turno: "manha" },
    { id: 19, modalidade: "Hidroginástica", dias: ["Terça","Quinta"], horario: "10:50-11:30", capacidade: 30, turno: "tarde" },
    { id: 20, modalidade: "Hidroginástica", dias: ["Terça","Quinta"], horario: "16:10-16:50", capacidade: 30, turno: "tarde" },
    { id: 21, modalidade: "Hidroginástica", dias: ["Terça","Quinta"], horario: "19:20-20:00", capacidade: 30, turno: "noite" },
    { id: 22, modalidade: "Hidroginástica", dias: ["Sábado"], horario: "07:45-08:25", capacidade: 40, turno: "sabado" },
    { id: 23, modalidade: "Natação Infantil Nível 2", dias: ["Segunda","Quarta","Sexta"], horario: "08:20-09:00", capacidade: 12, turno: "manha" },
    { id: 24, modalidade: "Natação Infantil Nível 2", dias: ["Segunda","Quarta","Sexta"], horario: "15:10-15:50", capacidade: 12, turno: "tarde" },
    { id: 25, modalidade: "Natação Infantil Nível 2", dias: ["Segunda","Quarta","Sexta"], horario: "18:10-18:50", capacidade: 12, turno: "noite" },
    { id: 26, modalidade: "Natação Infantil Nível 2", dias: ["Terça","Quinta"], horario: "08:20-09:00", capacidade: 12, turno: "manha" },
    { id: 27, modalidade: "Natação Infantil Nível 2", dias: ["Terça","Quinta"], horario: "13:30-14:10", capacidade: 12, turno: "tarde" },
    { id: 28, modalidade: "Natação Infantil Nível 2", dias: ["Sábado"], horario: "13:40-14:20", capacidade: 15, turno: "sabado" },
    { id: 29, modalidade: "Natação Infantil Nível 1", dias: ["Segunda","Quarta","Sexta"], horario: "09:05-09:35", capacidade: 12, turno: "manha" },
    { id: 30, modalidade: "Natação Infantil Nível 1", dias: ["Segunda","Quarta","Sexta"], horario: "11:00-11:30", capacidade: 12, turno: "tarde" },
    { id: 31, modalidade: "Natação Infantil Nível 1", dias: ["Segunda","Quarta","Sexta"], horario: "13:00-13:30", capacidade: 12, turno: "tarde" },
    { id: 32, modalidade: "Natação Infantil Nível 1", dias: ["Segunda","Quarta","Sexta"], horario: "14:40-15:10", capacidade: 12, turno: "tarde" },
    { id: 33, modalidade: "Natação Infantil Nível 1", dias: ["Segunda","Quarta","Sexta"], horario: "17:35-18:05", capacidade: 12, turno: "noite" },
    { id: 34, modalidade: "Natação Infantil Nível 1", dias: ["Segunda","Quarta","Sexta"], horario: "20:20-20:50", capacidade: 12, turno: "noite" },
    { id: 35, modalidade: "Natação Infantil Nível 1", dias: ["Segunda","Quarta","Sexta"], horario: "20:50-21:20", capacidade: 12, turno: "noite" },
    { id: 36, modalidade: "Natação Infantil Nível 1", dias: ["Terça","Quinta"], horario: "09:05-09:35", capacidade: 12, turno: "manha" },
    { id: 37, modalidade: "Natação Infantil Nível 1", dias: ["Terça","Quinta"], horario: "10:15-10:45", capacidade: 12, turno: "tarde" },
    { id: 38, modalidade: "Natação Infantil Nível 1", dias: ["Terça","Quinta"], horario: "13:00-13:30", capacidade: 12, turno: "tarde" },
    { id: 39, modalidade: "Natação Baby", dias: ["Segunda","Quarta","Sexta"], horario: "17:00-17:30", capacidade: 18, turno: "tarde" },
    { id: 40, modalidade: "Natação Infantil Nível 1", dias: ["Terça","Quinta"], horario: "17:40-18:10", capacidade: 12, turno: "noite" },
    { id: 41, modalidade: "Natação Infantil Nível 1", dias: ["Terça","Quinta"], horario: "18:45-19:15", capacidade: 12, turno: "noite" },
    { id: 42, modalidade: "Natação Infantil Nível 1", dias: ["Terça","Quinta"], horario: "20:45-21:15", capacidade: 12, turno: "noite" },
    { id: 43, modalidade: "Natação Infantil Nível 1", dias: ["Sábado"], horario: "08:40-09:10", capacidade: 14, turno: "sabado" },
    { id: 44, modalidade: "Natação Infantil Nível 1", dias: ["Sábado"], horario: "09:50-10:20", capacidade: 14, turno: "sabado" },
    { id: 45, modalidade: "Natação Infantil Nível 1", dias: ["Sábado"], horario: "11:45-12:15", capacidade: 14, turno: "sabado" },
    { id: 46, modalidade: "Natação Infantil Nível 1", dias: ["Sábado"], horario: "14:55-15:25", capacidade: 14, turno: "sabado" },
    { id: 47, modalidade: "Natação Infantil Nível 3", dias: ["Segunda","Quarta","Sexta"], horario: "09:40-10:20", capacidade: 12, turno: "manha" },
    { id: 48, modalidade: "Natação Baby", dias: ["Segunda","Quarta","Sexta"], horario: "10:25-10:55", capacidade: 18, turno: "tarde" },
    { id: 49, modalidade: "Natação Baby", dias: ["Segunda","Quarta","Sexta"], horario: "14:10-14:40", capacidade: 18, turno: "tarde" },
    { id: 50, modalidade: "Natação Baby", dias: ["Segunda","Quarta","Sexta"], horario: "19:50-20:20", capacidade: 18, turno: "noite" },
    { id: 51, modalidade: "Natação Baby", dias: ["Terça","Quinta"], horario: "09:40-10:10", capacidade: 18, turno: "manha" },
    { id: 52, modalidade: "Natação Baby", dias: ["Terça","Quinta"], horario: "14:10-14:40", capacidade: 18, turno: "tarde" },
    { id: 53, modalidade: "Natação Baby", dias: ["Terça","Quinta"], horario: "18:10-18:40", capacidade: 18, turno: "noite" },
    { id: 54, modalidade: "Natação Baby", dias: ["Terça","Quinta"], horario: "20:15-20:45", capacidade: 18, turno: "noite" },
    { id: 55, modalidade: "Natação Baby", dias: ["Sábado"], horario: "09:15-09:45", capacidade: 20, turno: "sabado" },
    { id: 56, modalidade: "Natação Baby", dias: ["Sábado"], horario: "11:10-11:40", capacidade: 20, turno: "sabado" },
    { id: 57, modalidade: "Natação Baby", dias: ["Sábado"], horario: "14:20-14:50", capacidade: 20, turno: "sabado" },
    { id: 58, modalidade: "Personal Class", dias: ["Segunda","Terça","Quarta","Quinta","Sexta"], horario: "06:00-07:00", capacidade: 3, turno: "manha" },
    { id: 59, modalidade: "Personal Class", dias: ["Segunda","Terça","Quarta","Quinta","Sexta"], horario: "07:00-08:00", capacidade: 3, turno: "manha" },
    { id: 60, modalidade: "Personal Class", dias: ["Segunda","Terça","Quarta","Quinta","Sexta"], horario: "08:00-09:00", capacidade: 3, turno: "manha" },
    { id: 61, modalidade: "Personal Class", dias: ["Segunda","Terça","Quarta","Quinta","Sexta"], horario: "09:00-10:00", capacidade: 3, turno: "manha" },
    { id: 62, modalidade: "Personal Class", dias: ["Segunda","Terça","Quarta","Quinta","Sexta"], horario: "10:00-11:00", capacidade: 3, turno: "tarde" },
    { id: 63, modalidade: "Personal Class", dias: ["Segunda","Terça","Quarta","Quinta","Sexta"], horario: "11:00-12:00", capacidade: 3, turno: "tarde" },
    { id: 64, modalidade: "Personal Class", dias: ["Segunda","Terça","Quarta","Quinta","Sexta"], horario: "12:00-13:00", capacidade: 3, turno: "tarde" },
    { id: 65, modalidade: "Personal Class", dias: ["Segunda","Terça","Quarta","Quinta","Sexta"], horario: "13:00-14:00", capacidade: 3, turno: "tarde" },
    { id: 66, modalidade: "Personal Class", dias: ["Segunda","Terça","Quarta","Quinta","Sexta"], horario: "14:00-15:00", capacidade: 3, turno: "tarde" },
    { id: 67, modalidade: "Personal Class", dias: ["Segunda","Terça","Quarta","Quinta","Sexta"], horario: "15:00-16:00", capacidade: 3, turno: "tarde" },
    { id: 68, modalidade: "Personal Class", dias: ["Segunda","Terça","Quarta","Quinta","Sexta"], horario: "16:00-17:00", capacidade: 3, turno: "tarde" },
    { id: 69, modalidade: "Personal Class", dias: ["Segunda","Terça","Quarta","Quinta","Sexta"], horario: "17:00-18:00", capacidade: 3, turno: "tarde" },
    { id: 70, modalidade: "Personal Class", dias: ["Segunda","Terça","Quarta","Quinta","Sexta"], horario: "18:00-19:00", capacidade: 3, turno: "noite" },
    { id: 71, modalidade: "Personal Class", dias: ["Segunda","Terça","Quarta","Quinta","Sexta"], horario: "19:00-20:00", capacidade: 3, turno: "noite" },
    { id: 72, modalidade: "Personal Class", dias: ["Segunda","Terça","Quarta","Quinta","Sexta"], horario: "20:00-21:00", capacidade: 3, turno: "noite" },
    { id: 73, modalidade: "Personal Class", dias: ["Segunda","Terça","Quarta","Quinta","Sexta"], horario: "21:00-22:00", capacidade: 3, turno: "noite" }
];

// ============================================================
// ESTADOS GLOBAIS
// ============================================================
let alunos = [];
let experimentais = [];
let studentIdCounter = 1000;
let expIdCounter = 1000;
let historicoFaltasExperimentais = {};

let activeFilters = { modalidade: 'TODAS', turno: 'TODOS', ocupacao: 'TODOS', dias: [] };
const diasMap = { 'Segunda': 'seg', 'Terça': 'ter', 'Quarta': 'qua', 'Quinta': 'qui', 'Sexta': 'sex', 'Sábado': 'sab' };
const diasPtBr = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];

// ============================================================
// LOGIN
// ============================================================
function checkPassword() {
    if (document.getElementById("passwordInput").value === MASTER_PASSWORD) {
        localStorage.setItem("aqua_authenticated", "true");
        document.getElementById("loginScreen").style.display = "none";
        document.getElementById("appContainer").style.display = "block";
        carregarDados();
    } else {
        document.getElementById("loginError").style.display = "block";
    }
}
function handleKeyPress(e) { if (e.key === "Enter") checkPassword(); }
function logout() { localStorage.removeItem("aqua_authenticated"); location.reload(); }

// ============================================================
// CARREGAR DADOS DO FIREBASE
// ============================================================
async function carregarDados() {
    const statusEl = document.getElementById('googleStatus');
    if (statusEl) statusEl.innerText = '🔄 Sincronizando...';
    document.getElementById('loadingBanner').style.display = 'block';

    try {
        const [snapAlunos, snapExperimentais] = await Promise.all([
            db.collection('alunos').get(),
            db.collection('experimentais').get()
        ]);

        alunos = snapAlunos.docs.map(doc => ({ ...doc.data(), _docId: doc.id }));
        experimentais = snapExperimentais.docs.map(doc => ({ ...doc.data(), _docId: doc.id }));

        studentIdCounter = alunos.length > 0 ? Math.max(...alunos.map(a => a.codigo || 0), 1000) : 1000;
        expIdCounter = experimentais.length > 0 ? Math.max(...experimentais.map(e => e.id || 0), 1000) : 1000;

        if (statusEl) { statusEl.innerText = '✅ Online'; statusEl.classList.add('online'); }
    } catch (erro) {
        console.error("Erro Firebase:", erro);
        if (statusEl) statusEl.innerText = '⚠️ Modo Local';
    } finally {
        document.getElementById('loadingBanner').style.display = 'none';
        renderizarTudo();
        renderPainelExperimentaisHoje();
    }
}

// ============================================================
// HELPERS
// ============================================================
function formatarData() {
    const h = new Date();
    return `${String(h.getDate()).padStart(2,'0')}/${String(h.getMonth()+1).padStart(2,'0')}`;
}

function horarioParaMinutos(horStr) {
    const p = horStr.split('-')[0].split(':').map(Number);
    return p[0] * 60 + p[1];
}

function verificarVencimento(dataVenc) {
    if (!dataVenc) return { vencido: false, texto: "Sem data" };
    let dataStr = String(dataVenc);
    if (dataStr.includes('T')) {
        const p = dataStr.split('T')[0].split('-');
        if (p.length === 3) dataStr = `${p[2]}/${p[1]}`;
    }
    const partes = dataStr.split('/');
    if (partes.length !== 2) return { vencido: false, texto: dataStr };
    const hoje = new Date();
    const dataComp = new Date(hoje.getFullYear(), parseInt(partes[1])-1, parseInt(partes[0]));
    const diff = Math.ceil((dataComp - hoje) / (1000 * 60 * 60 * 24));
    if (diff < 0) return { vencido: true, texto: `⚠️ Vencido` };
    if (diff === 0) return { vencido: true, texto: `⚠️ Vence hoje` };
    return { vencido: false, texto: `🟢 ${partes[0]}/${partes[1]}` };
}

function limparData(dataVenc) {
    let dateClean = dataVenc || '—';
    if (String(dateClean).includes('T')) {
        const p = String(dateClean).split('T')[0].split('-');
        if (p.length === 3) dateClean = `${p[2]}/${p[1]}`;
    }
    return dateClean;
}

// ============================================================
// BADGE DE STATUS (ATIVO / PAUSADO / TRANCADO)
// ============================================================
function badgeStatus(status) {
    if (status === 'PAUSADO') return `<span style="background:#fef3c7;color:#b45309;padding:2px 8px;border-radius:12px;font-size:0.75rem;font-weight:bold;">⏸ PAUSADO</span>`;
    if (status === 'TRANCADO') return `<span style="background:#fee2e2;color:#b91c1c;padding:2px 8px;border-radius:12px;font-size:0.75rem;font-weight:bold;">🔒 TRANCADO</span>`;
    return `<span style="background:#dcfce7;color:#15803d;padding:2px 8px;border-radius:12px;font-size:0.75rem;font-weight:bold;">🟢 ATIVO</span>`;
}

// Alunos que contam na ocupação (excluir PAUSADO e TRANCADO)
function alunoContaOcupacao(a) {
    return a.status !== 'PAUSADO' && a.status !== 'TRANCADO';
}

// ============================================================
// RELATÓRIOS E OCUPAÇÃO — FILTRADOS POR DIA
// ============================================================
function getAlunosPorHorarioDia(horarioId, diaFiltro) {
    const horario = horariosConfig.find(h => h.id == horarioId);
    if (!horario) return [];

    return alunos.filter(aluno => {
        if (diaFiltro && diaFiltro !== 'TODOS') {
            // Multi-dia: pelo menos um dos dias selecionados
            const diasAtivos = Array.isArray(diaFiltro) ? diaFiltro : [diaFiltro];
            return diasAtivos.some(dia => {
                if (!horario.dias.includes(dia)) return false;
                return aluno[diasMap[dia]] == horarioId;
            });
        } else {
            // Todos os dias
            for (const dia of horario.dias) {
                if (aluno[diasMap[dia]] == horarioId) return true;
            }
            return false;
        }
    });
}

function getAlunosPorHorario(horarioId) {
    return getAlunosPorHorarioDia(horarioId, null);
}

function getOcupacaoHorarioDia(horarioId, diaFiltro) {
    return getAlunosPorHorarioDia(horarioId, diaFiltro).filter(alunoContaOcupacao).length;
}

function getOcupacaoHorario(horarioId) {
    return getOcupacaoHorarioDia(horarioId, null);
}

// ============================================================
// FILTROS HUB
// ============================================================
function filtrarTurnoHub(t, b) { activeFilters.turno = t; b.parentElement.querySelectorAll('button').forEach(x => x.classList.remove('active')); b.classList.add('active'); renderizarTudo(); }
function filtrarModalidadeHub(m, b) { activeFilters.modalidade = m; b.parentElement.querySelectorAll('button').forEach(x => x.classList.remove('active')); b.classList.add('active'); renderizarTudo(); }
function filtrarOcupacaoHub(o, b) { activeFilters.ocupacao = o; b.parentElement.querySelectorAll('button').forEach(x => x.classList.remove('active')); b.classList.add('active'); renderizarTudo(); }

function filtrarDiaHub(dia, btn) {
    if (dia === 'TODOS') {
        activeFilters.dias = [];
        btn.parentElement.querySelectorAll('button').forEach(x => x.classList.remove('active'));
        btn.classList.add('active');
    } else if (dia === 'HOJE') {
        const hojeIdx = new Date().getDay(); // 0=Dom
        const hojeStr = diasPtBr[hojeIdx];
        activeFilters.dias = (hojeStr !== 'Domingo') ? [hojeStr] : [];
        btn.parentElement.querySelectorAll('button').forEach(x => x.classList.remove('active'));
        btn.classList.add('active');
    } else {
        btn.parentElement.querySelector('button:first-child').classList.remove('active');
        // Deseleciona o botão "Hoje" se estiver ativo
        btn.parentElement.querySelectorAll('button').forEach(x => {
            if (x.getAttribute('onclick') && x.getAttribute('onclick').includes('HOJE')) x.classList.remove('active');
        });
        if (btn.classList.contains('active')) {
            btn.classList.remove('active');
            activeFilters.dias = activeFilters.dias.filter(d => d !== dia);
        } else {
            btn.classList.add('active');
            activeFilters.dias.push(dia);
        }
        if (activeFilters.dias.length === 0) {
            btn.parentElement.querySelector('button:first-child').classList.add('active');
        }
    }
    renderizarTudo();
}

// ============================================================
// WIDGETS GLOBAIS
// ============================================================
function atualizarWidgets() {
    const totalAlunos = alunos.filter(a => a.status !== 'TRANCADO').length;
    let vencidos = 0, emDia = 0;
    alunos.forEach(a => {
        if (a.status === 'TRANCADO') return;
        if (verificarVencimento(a.vencimento).vencido) vencidos++;
        else emDia++;
    });

    let manha = 0, tarde = 0, noite = 0, sabado = 0;
    alunos.filter(alunoContaOcupacao).forEach(a => {
        ['seg','ter','qua','qui','sex','sab'].forEach(d => {
            const hId = a[d];
            if (hId) {
                const h = horariosConfig.find(hc => hc.id == hId);
                if (h) {
                    if (h.turno === 'manha') manha++;
                    else if (h.turno === 'tarde') tarde++;
                    else if (h.turno === 'noite') noite++;
                    else if (h.turno === 'sabado') sabado++;
                }
            }
        });
    });

    const totalMatriculas = manha + tarde + noite + sabado;
    const capTotal = horariosConfig.reduce((s, h) => s + h.capacidade, 0);
    const pctOcupacao = capTotal > 0 ? Math.round((totalMatriculas / capTotal) * 100) : 0;

    const widget = document.getElementById('macroStatsWidget');
    if (!widget) return;

    widget.innerHTML = `
        <div class="widget aluno-counter"><div class="val">${totalAlunos}</div><div class="lbl">🎯 Total Alunos</div><div class="sub">No Sistema</div></div>
        <div class="widget vencidos-border"><div class="val" style="color:#ef4444;">${vencidos}</div><div class="lbl">⚠️ Vencidos</div><div class="sub">Planos Atrasados</div></div>
        <div class="widget emdia-border"><div class="val" style="color:#10b981;">${emDia}</div><div class="lbl">✅ Em Dia</div><div class="sub">Planos Ativos</div></div>
        <div class="widget"><div class="val">${manha}</div><div class="lbl">🌅 Manhã</div><div class="sub">Matrículas</div></div>
        <div class="widget"><div class="val">${tarde}</div><div class="lbl">☀️ Tarde</div><div class="sub">Matrículas</div></div>
        <div class="widget"><div class="val">${noite}</div><div class="lbl">🌙 Noite</div><div class="sub">Matrículas</div></div>
        <div class="widget"><div class="val">${sabado}</div><div class="lbl">📅 Sábados</div><div class="sub">Matrículas</div></div>
        <div class="widget"><div class="val">${pctOcupacao}%</div><div class="lbl">📊 Ocupação</div><div class="progress-mini"><div class="progress-mini-fill" style="width:${pctOcupacao}%"></div></div></div>
    `;
}

function mostrarToast(msg, tipo = 'sucesso') {
    let t = document.getElementById('toastGlobal');
    if (!t) { t = document.createElement('div'); t.id = 'toastGlobal'; t.className = 'toast'; document.body.appendChild(t); }
    t.textContent = msg;
    t.className = `toast ${tipo === 'erro' ? 'erro' : ''}`;
    setTimeout(() => t.classList.add('show'), 10);
    setTimeout(() => t.classList.remove('show'), 3000);
}

// ============================================================
// RENDERIZAÇÃO PRINCIPAL DOS CARDS
// ============================================================
function renderizarTudo() {
    const grid = document.getElementById('cardsGrid');
    if (!grid) return;

    atualizarWidgets();

    const query = document.getElementById('searchBar')?.value.toLowerCase() || '';
    const diasFiltro = activeFilters.dias; // array de dias selecionados

    // ---- Filtra turmas ----
    let filtrados = horariosConfig.filter(h => {
        const matchTurno = activeFilters.turno === 'TODOS' || h.turno === activeFilters.turno;
        const matchMod = activeFilters.modalidade === 'TODAS' || h.modalidade === activeFilters.modalidade;

        // Filtro de dia: turma deve ter aula em PELO MENOS UM dos dias selecionados
        let matchDia = true;
        if (diasFiltro.length > 0) {
            matchDia = diasFiltro.some(d => h.dias.includes(d));
        }

        // Ocupação considera o dia filtrado
        const diasRef = diasFiltro.length > 0 ? diasFiltro : null;
        const qtd = diasRef ? getOcupacaoHorarioDia(h.id, diasRef) : getOcupacaoHorario(h.id);
        let matchOcup = true;
        if (activeFilters.ocupacao === 'COM_ALUNOS') matchOcup = qtd > 0;
        else if (activeFilters.ocupacao === 'VAZIAS') matchOcup = qtd === 0;
        else if (activeFilters.ocupacao === 'LOTADAS') matchOcup = qtd >= h.capacidade;
        else if (activeFilters.ocupacao === 'COM_VAGAS') matchOcup = qtd < h.capacidade;
        else if (activeFilters.ocupacao === 'VENCIDOS') matchOcup = getAlunosPorHorarioDia(h.id, diasRef).some(a => verificarVencimento(a.vencimento).vencido);
        else if (activeFilters.ocupacao === 'COM_EXPERIMENTAIS') matchOcup = experimentais.some(e => e.horario_id === h.id && e.status === 'agendado');

        return matchTurno && matchMod && matchDia && matchOcup;
    });

    if (query) {
        filtrados = filtrados.filter(h => {
            const matchHor = h.horario.includes(query) || h.modalidade.toLowerCase().includes(query);
            const matchAl = getAlunosPorHorario(h.id).some(a => String(a.nome).toLowerCase().includes(query));
            return matchHor || matchAl;
        });
    }

    // Ordenação cronológica quando há filtro de dia
    if (diasFiltro.length > 0) {
        filtrados.sort((a, b) => horarioParaMinutos(a.horario) - horarioParaMinutos(b.horario));
    }

    if (filtrados.length === 0) {
        grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px;color:#94a3b8;font-weight:600;">🔍 Nenhum horário atende aos filtros aplicados.</div>';
        return;
    }

    // Dados de tempo atual para colorir cards
    const agora = new Date();
    const minAtuais = agora.getHours() * 60 + agora.getMinutes();
    const hojeStr = diasPtBr[agora.getDay()];

    grid.innerHTML = filtrados.map(h => {
        const diasRef = diasFiltro.length > 0 ? diasFiltro : null;
        const qtd = diasRef ? getOcupacaoHorarioDia(h.id, diasRef) : getOcupacaoHorario(h.id);
        const pct = Math.min((qtd / h.capacidade) * 100, 100);
        const corBarra = pct >= 100 ? '#ef4444' : (pct >= 70 ? '#f59e0b' : '#10b981');
        const expQtd = experimentais.filter(e => e.horario_id === h.id && e.status === 'agendado').length;

        // Lógica de cor temporal (somente quando há filtro de dia único == hoje)
        let cardStyle = `border-top: 4px solid ${corBarra};`;
        let badgeTempo = '';
        const isDiaHoje = diasFiltro.length === 1 && diasFiltro[0] === hojeStr;
        if (isDiaHoje || (diasFiltro.length === 0 && h.dias.includes(hojeStr))) {
            const minInicio = horarioParaMinutos(h.horario);
            const partesFim = h.horario.split('-')[1]?.split(':').map(Number);
            const minFim = partesFim ? partesFim[0] * 60 + partesFim[1] : minInicio + 45;
            const diff = minInicio - minAtuais;

            if (minAtuais >= minInicio && minAtuais <= minFim) {
                cardStyle = `border-top: 4px solid #f59e0b; opacity: 1;`;
                badgeTempo = `<span style="background:#f59e0b;color:white;padding:2px 8px;border-radius:12px;font-size:0.72rem;font-weight:bold;margin-left:6px;">🚀 EM ANDAMENTO</span>`;
            } else if (diff > 0 && diff <= 120) {
                cardStyle = `border-top: 4px solid #0284c7; opacity: 1;`;
                badgeTempo = `<span style="background:#0284c7;color:white;padding:2px 8px;border-radius:12px;font-size:0.72rem;font-weight:bold;margin-left:6px;">⏱️ PRÓX. 2H</span>`;
            } else if (diff <= 0 && minAtuais > minFim) {
                cardStyle = `border-top: 4px solid ${corBarra}; opacity: 0.55;`;
            }
        }

        // Dias exibidos no card (só os filtrados se houver filtro)
        const diasExibir = diasFiltro.length > 0 ? h.dias.filter(d => diasFiltro.includes(d)) : h.dias;

        return `
            <div class="card" onclick="abrirModalHorario(${h.id})" style="${cardStyle}">
                <div class="card-header">
                    <h3>
                        <span>${h.modalidade}</span>
                        <span class="horario">${h.horario}</span>
                        ${badgeTempo}
                    </h3>
                    <div style="display:flex;justify-content:space-between;align-items:center;">
                        <div class="dias">📅 ${diasExibir.join(' • ')}</div>
                        <button onclick="event.stopPropagation(); abrirEdicaoTurma(${h.id})" style="background:none;border:1px solid #cbd5e1;border-radius:6px;padding:3px 8px;font-size:0.75rem;cursor:pointer;color:#475569;" title="Editar turma">✏️ Editar Turma</button>
                    </div>
                </div>
                <div style="display:flex;justify-content:space-between;align-items:center;margin-top:12px;font-size:0.9rem;font-weight:700;color:#475569;">
                    <span>👥 Alunos: ${qtd}/${h.capacidade}</span>
                    ${expQtd > 0 ? `<span style="background:#b45309;color:white;padding:2px 6px;border-radius:4px;font-size:0.75rem;">🧪 ${expQtd} exp</span>` : ''}
                </div>
                <div class="progress-bar"><div class="progress-fill" style="width:${pct}%;background:${corBarra};"></div></div>
            </div>
        `;
    }).join('');
}

// ============================================================
// EDIÇÃO DE TURMA (nome/modalidade + capacidade)
// ============================================================
function abrirEdicaoTurma(hId) {
    const h = horariosConfig.find(x => x.id === hId);
    if (!h) return;

    const modal = document.getElementById('globalSuperModal');
    const titulo = document.getElementById('superModalTitulo');
    const corpo = document.getElementById('superModalCorpo');
    titulo.innerHTML = '✏️ Editar Turma';
    corpo.innerHTML = `
        <div style="display:grid;gap:15px;max-width:480px;">
            <div>
                <label style="font-weight:bold;display:block;margin-bottom:5px;">Modalidade / Nome:</label>
                <select id="etMod" class="form-select-field" style="width:100%;height:44px;">
                    ${["Natação Adulto","Hidroginástica","Natação Infantil Nível 1","Natação Infantil Nível 2","Natação Infantil Nível 3","Natação Baby","Personal Class"]
                        .map(m => `<option value="${m}" ${h.modalidade === m ? 'selected' : ''}>${m}</option>`).join('')}
                </select>
            </div>
            <div>
                <label style="font-weight:bold;display:block;margin-bottom:5px;">Limite de Vagas:</label>
                <input type="number" id="etCap" class="search-input-field" value="${h.capacidade}" min="1" max="100">
            </div>
            <div style="font-size:0.85rem;color:#64748b;">Horário: <strong>${h.horario}</strong> &nbsp;|&nbsp; Dias: <strong>${h.dias.join(', ')}</strong></div>
            <div class="form-actions-row">
                <button class="btn-save-modal" onclick="salvarEdicaoTurma(${hId})">💾 Salvar Turma</button>
                <button class="btn-discard-modal" onclick="fecharSuperModal()">Cancelar</button>
            </div>
        </div>
    `;
    modal.classList.add('active');
}

function salvarEdicaoTurma(hId) {
    const h = horariosConfig.find(x => x.id === hId);
    if (!h) return;
    h.modalidade = document.getElementById('etMod').value;
    h.capacidade = parseInt(document.getElementById('etCap').value) || h.capacidade;
    fecharSuperModal();
    renderizarTudo();
    mostrarToast('✅ Turma atualizada com sucesso!');
}

// ============================================================
// MODAL DA TURMA — FILTRADO PELO DIA SELECIONADO
// ============================================================
function abrirModalHorario(horarioId) {
    const horario = horariosConfig.find(h => h.id === horarioId);
    if (!horario) return;

    const diasFiltro = activeFilters.dias;
    const diasRef = diasFiltro.length > 0 ? diasFiltro : null;
    const alunosMatriculados = getAlunosPorHorarioDia(horarioId, diasRef);
    const listaExp = experimentais.filter(e => e.horario_id === horarioId);

    const modal = document.getElementById('globalSuperModal');
    const titulo = document.getElementById('superModalTitulo');
    const corpo = document.getElementById('superModalCorpo');
    if (!modal || !corpo || !titulo) return;

    const labelDia = diasFiltro.length > 0 ? `— ${diasFiltro.join(' + ')}` : '';
    titulo.innerHTML = `🏊‍♂️ Turma: ${horario.modalidade} (${horario.horario}) ${labelDia}`;

    const capOcup = alunosMatriculados.filter(alunoContaOcupacao).length;

    corpo.innerHTML = `
        <div style="margin-bottom:20px;font-size:1.05rem;background:#e0f2fe;padding:15px;border-radius:10px;border-left:5px solid #006994;color:#0369a1;font-weight:600;">
            ${diasFiltro.length > 0
                ? `📅 Exibindo: <strong>${diasFiltro.join(' + ')}</strong> &nbsp;|&nbsp; 👥 Alunos neste(s) dia(s): ${capOcup}/${horario.capacidade}`
                : `📅 Dias: ${horario.dias.join(', ')} &nbsp;|&nbsp; 👥 Lotação: ${capOcup}/${horario.capacidade} Matrículas`
            }
        </div>

        <div id="centralFormEdicaoContainer" style="display:none;background:#f8fafc;padding:22px;border-radius:12px;margin-bottom:25px;border:2px dashed #006994;"></div>

        <div style="display:flex;gap:25px;flex-wrap:wrap;align-items:flex-start;">
            <div style="flex:1;min-width:320px;background:white;border:1px solid #cbd5e1;border-radius:12px;padding:20px;">
                <h3 style="font-size:1.2rem;color:#006994;border-bottom:3px solid #006994;padding-bottom:8px;margin-bottom:15px;">
                    👥 Alunos ${diasFiltro.length > 0 ? `(${diasFiltro.join('+')})` : 'Fixos'} (${alunosMatriculados.length})
                </h3>
                <div style="max-height:450px;overflow-y:auto;">
                    ${alunosMatriculados.map(a => {
                        const fin = verificarVencimento(a.vencimento);
                        const dateClean = limparData(a.vencimento);
                        const statusAtual = a.status || 'ATIVO';
                        const obsHtml = a.observacao ? `<div style="background:#fffbeb;border:1px solid #fde68a;border-radius:6px;padding:6px 10px;font-size:0.82rem;color:#78350f;margin-top:5px;">📝 ${a.observacao}</div>` : '';

                        return `
                            <div class="aluno-box-item" style="flex-direction:column;align-items:stretch;gap:8px;margin-bottom:10px;">
                                <div style="display:flex;justify-content:space-between;align-items:flex-start;">
                                    <div>
                                        <div style="font-size:1.15rem;font-weight:bold;color:var(--text-primary);">${a.nome}</div>
                                        <div style="font-size:0.9rem;color:var(--text-secondary);margin-top:2px;">📞 <strong>${a.telefone}</strong> | Venc: <strong>${dateClean}</strong></div>
                                        <div style="margin-top:4px;">${badgeStatus(statusAtual)}</div>
                                        ${obsHtml}
                                    </div>
                                    <span class="badge ${fin.vencido ? 'badge-vencido' : 'badge-emdia'}">${fin.texto}</span>
                                </div>
                                <div style="display:flex;gap:6px;justify-content:flex-end;flex-wrap:wrap;border-top:1px solid #f1f5f9;padding-top:8px;">
                                    <a href="https://wa.me/55${String(a.telefone).replace(/\D/g,'')}" target="_blank" class="btn-whatsapp-speed">💬 WhatsApp</a>
                                    <button onclick="abrirEdicaoCompletaInline(${a.codigo},${horarioId})" style="background:#e0f2fe;color:#0369a1;border:none;padding:6px 12px;border-radius:6px;font-weight:bold;font-size:0.82rem;cursor:pointer;">✏️ Editar</button>
                                    <button onclick="abrirModalObs(${a.codigo},${horarioId})" style="background:#fef9c3;color:#854d0e;border:none;padding:6px 12px;border-radius:6px;font-weight:bold;font-size:0.82rem;cursor:pointer;">📝 Obs</button>
                                    <button onclick="alternarStatusAluno(${a.codigo},${horarioId})" style="background:#f1f5f9;color:#334155;border:none;padding:6px 12px;border-radius:6px;font-weight:bold;font-size:0.82rem;cursor:pointer;">🔄 Status</button>
                                </div>
                            </div>
                        `;
                    }).join('') || '<p style="text-align:center;padding:20px;color:#64748b;">Nenhum aluno neste dia.</p>'}
                </div>
            </div>

            <div style="flex:1;min-width:280px;background:#fffbeb;border:1px solid #fde68a;border-radius:12px;padding:20px;">
                <h3 style="font-size:1.2rem;color:#b45309;border-bottom:3px solid #b45309;padding-bottom:8px;margin-bottom:15px;">🧪 Experimentais (${listaExp.length})</h3>
                <div style="max-height:450px;overflow-y:auto;">
                    ${listaExp.map(exp => {
                        const faltas = historicoFaltasExperimentais[exp.telefone] || 0;
                        const alerta = faltas >= 2 ? `<div style="background:#fee2e2;color:#b91c1c;font-size:0.85rem;font-weight:bold;padding:5px;border-radius:6px;margin-top:4px;">⚠️ Faltou ${faltas}x antes!</div>` : '';
                        let ind = '', btns = '';
                        if (exp.status === 'agendado') {
                            ind = '<span class="badge" style="background:#fef3c7;color:#b45309;">📅 Agendado</span>';
                            btns = `<button onclick="marcarPresencaExp(${exp.id},'compareceu',${horarioId})" style="background:#10b981;color:white;border:none;padding:8px 12px;border-radius:6px;font-weight:bold;cursor:pointer;">✔️ Veio</button><button onclick="marcarPresencaExp(${exp.id},'nao_compareceu',${horarioId})" style="background:#ef4444;color:white;border:none;padding:8px 12px;border-radius:6px;font-weight:bold;cursor:pointer;">❌ Faltou</button>`;
                        } else if (exp.status === 'compareceu') {
                            ind = '<span class="badge" style="background:#dcfce7;color:#15803d;">✅ Veio</span>';
                            btns = `<button onclick="matricularExperimentalInSuper(${exp.id})" style="background:#006994;color:white;border:none;padding:8px;border-radius:6px;font-weight:bold;width:100%;cursor:pointer;">📋 Efetivar Matrícula</button>`;
                        } else if (exp.status === 'nao_compareceu') {
                            ind = '<span class="badge" style="background:#fee2e2;color:#b91c1c;">❌ Faltou</span>';
                            btns = `<button onclick="marcarPresencaExp(${exp.id},'agendado',${horarioId})" style="background:#64748b;color:white;border:none;padding:6px 12px;border-radius:6px;cursor:pointer;">🔄 Refazer</button>`;
                        }
                        return `
                            <div style="background:white;padding:12px;border-radius:10px;border:1px solid #fde68a;margin-bottom:10px;">
                                <div style="display:flex;justify-content:space-between;">
                                    <div>
                                        <strong style="color:#78350f;">${exp.nome}</strong>
                                        <div style="font-size:0.88rem;color:#b45309;">📞 ${exp.telefone}</div>
                                        ${alerta}
                                    </div>
                                    <div>${ind}</div>
                                </div>
                                <div style="display:flex;gap:6px;justify-content:flex-end;margin-top:8px;flex-wrap:wrap;">
                                    <a href="https://wa.me/55${String(exp.telefone).replace(/\D/g,'')}" target="_blank" class="btn-whatsapp-speed">💬 WA</a>
                                    ${btns}
                                </div>
                            </div>
                        `;
                    }).join('') || '<p style="text-align:center;padding:20px;color:#b45309;">Sem experimentais.</p>'}
                </div>
            </div>
        </div>
    `;
    modal.classList.add('active');
}

// ============================================================
// OBSERVAÇÕES POR ALUNO
// ============================================================
function abrirModalObs(cod, hId) {
    const a = alunos.find(al => al.codigo == cod);
    if (!a) return;

    const modal = document.getElementById('globalSuperModal');
    const titulo = document.getElementById('superModalTitulo');
    const corpo = document.getElementById('superModalCorpo');
    titulo.innerHTML = `📝 Observações — ${a.nome}`;
    corpo.innerHTML = `
        <div style="max-width:500px;">
            <textarea id="obsTexto" style="width:100%;min-height:120px;padding:12px;border-radius:8px;border:1px solid #cbd5e1;font-size:0.95rem;font-family:inherit;resize:vertical;" placeholder="Digite qualquer anotação sobre este aluno...">${a.observacao || ''}</textarea>
            <div class="form-actions-row" style="margin-top:12px;">
                <button class="btn-save-modal" onclick="salvarObservacao(${cod},${hId || 'null'})">💾 Salvar Obs</button>
                <button class="btn-discard-modal" onclick="${hId ? `abrirModalHorario(${hId})` : 'fecharSuperModal()'}">⬅️ Voltar</button>
            </div>
        </div>
    `;
    modal.classList.add('active');
}

async function salvarObservacao(cod, hId) {
    const a = alunos.find(al => al.codigo == cod);
    if (!a) return;
    a.observacao = document.getElementById('obsTexto').value.trim();
    await salvarNoGoogle(a);
    if (hId) abrirModalHorario(hId);
    else { fecharSuperModal(); renderStudentTableSuper(); }
}

// ============================================================
// ALTERNAR STATUS DO ALUNO
// ============================================================
function alternarStatusAluno(cod, hId) {
    const a = alunos.find(al => al.codigo == cod);
    if (!a) return;
    const ciclo = ['ATIVO', 'PAUSADO', 'TRANCADO'];
    const atual = a.status || 'ATIVO';
    const proximo = ciclo[(ciclo.indexOf(atual) + 1) % ciclo.length];
    a.status = proximo;
    salvarNoGoogle(a);
    renderizarTudo();
    abrirModalHorario(hId);
    mostrarToast(`✅ Status de ${a.nome} → ${proximo}`);
}

// ============================================================
// PAINEL LATERAL — EXPERIMENTAIS DO DIA
// ============================================================
function renderPainelExperimentaisHoje() {
    const painel = document.getElementById('painelExpHoje');
    if (!painel) return;

    const hojeIdx = new Date().getDay();
    const hojeStr = diasPtBr[hojeIdx];

    const expHoje = experimentais.filter(e => {
        const h = horariosConfig.find(hc => hc.id === e.horario_id);
        return h && h.dias.includes(hojeStr);
    });

    expHoje.sort((a, b) => {
        const ha = horariosConfig.find(h => h.id === a.horario_id);
        const hb = horariosConfig.find(h => h.id === b.horario_id);
        return (ha ? horarioParaMinutos(ha.horario) : 0) - (hb ? horarioParaMinutos(hb.horario) : 0);
    });

    const header = document.getElementById('painelExpCount');
    if (header) header.textContent = expHoje.length;

    painel.innerHTML = expHoje.length === 0
        ? `<div style="text-align:center;padding:20px;color:#94a3b8;font-size:0.9rem;">😊 Sem experimentais hoje!</div>`
        : expHoje.map(exp => {
            const h = horariosConfig.find(hc => hc.id === exp.horario_id);
            const faltas = historicoFaltasExperimentais[exp.telefone] || 0;
            const alerta = faltas >= 2 ? `<div style="background:#fee2e2;color:#b91c1c;font-size:0.78rem;font-weight:bold;padding:4px;border-radius:5px;margin-top:3px;">⚠️ Faltou ${faltas}x antes</div>` : '';
            let cor = '#fef3c7', corTxt = '#b45309', label = '📅 Agendado';
            if (exp.status === 'compareceu') { cor = '#dcfce7'; corTxt = '#15803d'; label = '✅ Veio'; }
            if (exp.status === 'nao_compareceu') { cor = '#fee2e2'; corTxt = '#b91c1c'; label = '❌ Faltou'; }

            return `
                <div style="background:white;border:1px solid #e2e8f0;border-radius:10px;padding:12px;margin-bottom:8px;">
                    <div style="display:flex;justify-content:space-between;align-items:flex-start;">
                        <div>
                            <div style="font-weight:bold;font-size:0.95rem;">${exp.nome}</div>
                            <div style="font-size:0.82rem;color:#64748b;">📞 ${exp.telefone}</div>
                            <div style="font-size:0.8rem;color:#0369a1;font-weight:600;">⏰ ${h ? h.horario : '??'}</div>
                            ${alerta}
                        </div>
                        <span style="background:${cor};color:${corTxt};padding:2px 7px;border-radius:10px;font-size:0.72rem;font-weight:bold;white-space:nowrap;">${label}</span>
                    </div>
                    <div style="display:flex;gap:5px;flex-wrap:wrap;margin-top:8px;">
                        ${exp.status === 'agendado' ? `
                            <button onclick="marcarPresencaExpPainel(${exp.id},'compareceu')" style="background:#10b981;color:white;border:none;padding:5px 9px;border-radius:6px;font-size:0.78rem;font-weight:bold;cursor:pointer;">✔️ Veio</button>
                            <button onclick="marcarPresencaExpPainel(${exp.id},'nao_compareceu')" style="background:#ef4444;color:white;border:none;padding:5px 9px;border-radius:6px;font-size:0.78rem;font-weight:bold;cursor:pointer;">❌ Faltou</button>
                        ` : ''}
                        ${exp.status === 'compareceu' ? `
                            <button onclick="matricularExperimentalInSuper(${exp.id})" style="background:#006994;color:white;border:none;padding:5px 9px;border-radius:6px;font-size:0.78rem;font-weight:bold;cursor:pointer;">📋 Efetivar</button>
                        ` : ''}
                        <a href="https://wa.me/55${String(exp.telefone).replace(/\D/g,'')}" target="_blank" style="background:#25d366;color:white;padding:5px 9px;border-radius:6px;font-size:0.78rem;font-weight:bold;text-decoration:none;">💬 WA</a>
                    </div>
                </div>
            `;
        }).join('');
}

function marcarPresencaExpPainel(id, st) {
    const exp = experimentais.find(e => e.id === id);
    if (!exp) return;
    if (st === 'nao_compareceu' && exp.status !== 'nao_compareceu') historicoFaltasExperimentais[exp.telefone] = (historicoFaltasExperimentais[exp.telefone] || 0) + 1;
    else if (st === 'agendado' && exp.status === 'nao_compareceu' && historicoFaltasExperimentais[exp.telefone] > 0) historicoFaltasExperimentais[exp.telefone]--;
    exp.status = st;
    renderizarTudo();
    renderPainelExperimentaisHoje();
}

function marcarPresencaExp(id, st, hId) {
    const exp = experimentais.find(e => e.id === id);
    if (!exp) return;
    if (st === 'nao_compareceu' && exp.status !== 'nao_compareceu') historicoFaltasExperimentais[exp.telefone] = (historicoFaltasExperimentais[exp.telefone] || 0) + 1;
    else if (st === 'agendado' && exp.status === 'nao_compareceu' && historicoFaltasExperimentais[exp.telefone] > 0) historicoFaltasExperimentais[exp.telefone]--;
    exp.status = st;
    renderizarTudo();
    renderPainelExperimentaisHoje();
    abrirModalHorario(hId);
}

// ============================================================
// EDIÇÃO COMPLETA DO ALUNO (inline)
// ============================================================
function abrirEdicaoCompletaInline(cod, hId) {
    const a = alunos.find(al => al.codigo == cod);
    if (!a) return;

    const divId = hId ? 'centralFormEdicaoContainer' : 'superFormEdicaoContainer';
    const div = document.getElementById(divId);
    if (!div) return;
    div.style.display = 'block';

    const diasSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const selectGradeHtml = diasSemana.map(dia => {
        const campo = diasMap[dia];
        const valorAtual = a[campo] || '';
        const opcoesDoDia = horariosConfig.filter(hc => hc.dias.includes(dia));
        return `
            <div style="display:flex;flex-direction:column;gap:4px;">
                <label style="font-size:0.82rem;font-weight:bold;color:#475569;">${dia}:</label>
                <select id="editGrade${campo}" class="form-select-field" style="width:100%;padding:8px;font-size:0.82rem;">
                    <option value="">[ Não treina ]</option>
                    ${opcoesDoDia.map(hc => `<option value="${hc.id}" ${valorAtual == hc.id ? 'selected' : ''}>${hc.modalidade} (${hc.horario})</option>`).join('')}
                </select>
            </div>
        `;
    }).join('');

    const statusAtual = a.status || 'ATIVO';
    const btnVoltar = hId
        ? `<button onclick="document.getElementById('${divId}').style.display='none'" class="btn-discard-modal">⬅️ Voltar para a Turma</button>`
        : `<button onclick="document.getElementById('${divId}').style.display='none'" class="btn-discard-modal">⬅️ Cancelar</button>`;

    div.innerHTML = `
        <h3 style="color:#006994;margin-bottom:15px;font-size:1.2rem;font-weight:bold;border-left:4px solid #006994;padding-left:8px;">✏️ Editar: #${a.codigo} — ${a.nome}</h3>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:15px;margin-bottom:18px;">
            <div><label style="font-size:0.85rem;font-weight:bold;color:#334155;">Nome:</label><input type="text" id="editFullN" class="search-input-field" style="padding:10px;" value="${a.nome}"></div>
            <div><label style="font-size:0.85rem;font-weight:bold;color:#334155;">Telefone:</label><input type="text" id="editFullP" class="search-input-field" style="padding:10px;" value="${a.telefone}"></div>
            <div><label style="font-size:0.85rem;font-weight:bold;color:#334155;">Vencimento:</label><input type="text" id="editFullV" class="search-input-field" style="padding:10px;" value="${a.vencimento || ''}"></div>
            <div><label style="font-size:0.85rem;font-weight:bold;color:#334155;">Modalidade:</label>
                <select id="editFullMod" class="form-select-field" style="width:100%;height:42px;">
                    ${["Natação Adulto","Hidroginástica","Natação Infantil Nível 1","Natação Infantil Nível 2","Natação Infantil Nível 3","Natação Baby","Personal Class"]
                        .map(m => `<option value="${m}" ${a.modalidade === m ? 'selected' : ''}>${m}</option>`).join('')}
                </select>
            </div>
            <div><label style="font-size:0.85rem;font-weight:bold;color:#334155;">Status:</label>
                <select id="editFullStatus" class="form-select-field" style="width:100%;height:42px;">
                    <option value="ATIVO" ${statusAtual === 'ATIVO' ? 'selected' : ''}>🟢 ATIVO</option>
                    <option value="PAUSADO" ${statusAtual === 'PAUSADO' ? 'selected' : ''}>⏸ PAUSADO</option>
                    <option value="TRANCADO" ${statusAtual === 'TRANCADO' ? 'selected' : ''}>🔒 TRANCADO</option>
                </select>
            </div>
        </div>
        <div style="background:#edf2f7;padding:15px;border-radius:8px;margin-bottom:15px;">
            <span style="font-weight:bold;font-size:0.9rem;color:#1e293b;display:block;margin-bottom:10px;">🗓️ Grade Semanal:</span>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;">${selectGradeHtml}</div>
        </div>
        <div style="display:flex;gap:12px;justify-content:flex-end;">
            <button onclick="salvarEdicaoCompleta(${a.codigo},${hId})" class="btn-save-modal" style="padding:10px 22px;">💾 Salvar</button>
            ${btnVoltar}
        </div>
    `;
    div.scrollIntoView({ behavior: 'smooth' });
}

function salvarEdicaoCompleta(cod, hId) {
    const a = alunos.find(al => al.codigo == cod);
    if (!a) return;

    a.nome = document.getElementById('editFullN').value.trim();
    a.telefone = document.getElementById('editFullP').value.trim();
    a.vencimento = document.getElementById('editFullV').value.trim();
    a.modalidade = document.getElementById('editFullMod')?.value || a.modalidade;
    a.status = document.getElementById('editFullStatus')?.value || a.status || 'ATIVO';

    a.seg = document.getElementById('editGradeseg').value ? parseInt(document.getElementById('editGradeseg').value) : '';
    a.ter = document.getElementById('editGradeter').value ? parseInt(document.getElementById('editGradeter').value) : '';
    a.qua = document.getElementById('editGradequa').value ? parseInt(document.getElementById('editGradequa').value) : '';
    a.qui = document.getElementById('editGradequi').value ? parseInt(document.getElementById('editGradequi').value) : '';
    a.sex = document.getElementById('editGradesex').value ? parseInt(document.getElementById('editGradesex').value) : '';
    a.sab = document.getElementById('editGradesab').value ? parseInt(document.getElementById('editGradesab').value) : '';

    salvarNoGoogle(a);

    const divId = hId ? 'centralFormEdicaoContainer' : 'superFormEdicaoContainer';
    document.getElementById(divId).style.display = 'none';
    renderizarTudo();
    renderPainelExperimentaisHoje();
    if (hId) { abrirModalHorario(hId); } else { renderStudentTableSuper(); }
    mostrarToast(`✅ ${a.nome} atualizado com sucesso!`);
}

// ============================================================
// SUPER MODAL — BUSCAR ALUNOS / INCOMPLETOS
// ============================================================
function abrirSuperModal(tipo) {
    const modal = document.getElementById('globalSuperModal');
    const titulo = document.getElementById('superModalTitulo');
    const corpo = document.getElementById('superModalCorpo');
    if (!modal || !corpo || !titulo) return;

    document.getElementById('fabContainer')?.classList.remove('active');
    modal.classList.add('active');

    if (tipo === 'alunos') {
        titulo.innerHTML = '👥 Central de Gestão de Alunos';
        corpo.innerHTML = `
            <input type="text" id="superStudentSearch" class="search-input-field" style="margin-bottom:15px;" placeholder="🔍 Nome, código ou telefone..." oninput="renderStudentTableSuper()">
            <div id="superFormEdicaoContainer" style="display:none;background:#f8fafc;padding:20px;border-radius:12px;margin-bottom:20px;border:2px dashed #006994;"></div>
            <div class="table-container">
                <table>
                    <thead><tr><th>Código</th><th>Nome</th><th>Telefone</th><th>Vencimento</th><th>Status</th><th>Dias</th><th>Ações</th></tr></thead>
                    <tbody id="superStudentTableBody"></tbody>
                </table>
            </div>
        `;
        renderStudentTableSuper();
    } else if (tipo === 'incompletos') {
        titulo.innerHTML = '⚠️ Alunos sem Dias de Treino';
        corpo.innerHTML = `
            <div class="table-container">
                <table>
                    <thead><tr><th>Nome</th><th>Vincular Turmas</th><th>Ação</th></tr></thead>
                    <tbody id="superIncompletosBody"></tbody>
                </table>
            </div>
        `;
        renderIncompletosSuper();
    }
}

function fecharSuperModal(e) {
    if (e && e.target !== e.currentTarget) return;
    document.getElementById('globalSuperModal').classList.remove('active');
}

function renderStudentTableSuper() {
    const body = document.getElementById('superStudentTableBody');
    if (!body) return;
    const txt = document.getElementById('superStudentSearch')?.value.toLowerCase() || '';
    const filtrados = alunos.filter(a =>
        String(a.nome).toLowerCase().includes(txt) ||
        String(a.telefone).includes(txt) ||
        String(a.codigo).includes(txt)
    );

    body.innerHTML = filtrados.map(a => {
        const fin = verificarVencimento(a.vencimento);
        const dateClean = limparData(a.vencimento);
        const statusAtual = a.status || 'ATIVO';
        let dParticipa = [];
        if (a.seg) dParticipa.push("Seg"); if (a.ter) dParticipa.push("Ter");
        if (a.qua) dParticipa.push("Qua"); if (a.qui) dParticipa.push("Qui");
        if (a.sex) dParticipa.push("Sex"); if (a.sab) dParticipa.push("Sáb");

        return `
            <tr>
                <td>#${a.codigo}</td>
                <td><strong>${a.nome}</strong></td>
                <td>${a.telefone}</td>
                <td><span class="badge ${fin.vencido ? 'badge-vencido' : 'badge-emdia'}">${dateClean}</span></td>
                <td>${badgeStatus(statusAtual)}</td>
                <td style="font-size:0.85rem;color:#006994;font-weight:bold;">${dParticipa.join(', ') || 'Nenhum'}</td>
                <td style="display:flex;gap:6px;flex-wrap:wrap;">
                    <a href="https://wa.me/55${String(a.telefone).replace(/\D/g,'')}" target="_blank" class="btn-whatsapp-speed" style="padding:5px 8px;font-size:0.78rem;">💬 WA</a>
                    <button onclick="abrirEdicaoCompletaInline(${a.codigo},null)" style="background:#e0f2fe;color:#0369a1;border:none;padding:5px 8px;border-radius:6px;font-weight:bold;font-size:0.78rem;cursor:pointer;">✏️ Editar</button>
                    <button onclick="abrirModalObs(${a.codigo},null)" style="background:#fef9c3;color:#854d0e;border:none;padding:5px 8px;border-radius:6px;font-weight:bold;font-size:0.78rem;cursor:pointer;">📝 Obs</button>
                </td>
            </tr>
        `;
    }).join('');
}

function renderIncompletosSuper() {
    const body = document.getElementById('superIncompletosBody');
    if (!body) return;
    const inc = alunos.filter(a => a.status === 'PENDENTE' || (!a.seg && !a.ter && !a.qua && !a.qui && !a.sex && !a.sab));

    body.innerHTML = inc.map(a => {
        const diasSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
        const gradeHtml = diasSemana.map(dia => {
            const campo = diasMap[dia];
            const turmasCompativeis = horariosConfig.filter(h => h.modalidade === a.modalidade && h.dias.includes(dia));
            return `
                <div style="display:flex;align-items:center;gap:5px;">
                    <span style="font-size:0.7rem;font-weight:700;color:var(--text-muted);width:45px;flex-shrink:0;">${dia.substring(0,3)}:</span>
                    <select class="inc-select-${a.codigo}-${campo}" style="flex:1;padding:3px 5px;border-radius:5px;border:1px solid var(--border);background:var(--bg-surface-2);color:var(--text-primary);font-size:0.73rem;">
                        <option value="">--</option>
                        ${turmasCompativeis.map(h => `<option value="${h.id}">${h.horario}</option>`).join('')}
                    </select>
                </div>
            `;
        }).join('');

        return `
            <tr>
                <td style="font-weight:700;white-space:nowrap;">${a.nome}</td>
                <td><div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:4px;">${gradeHtml}</div></td>
                <td><button id="btn-save-${a.codigo}" class="btn-save" data-codigo="${a.codigo}">💾 Salvar</button></td>
            </tr>
        `;
    }).join('');

    document.querySelectorAll('.btn-save').forEach(btn => {
        btn.addEventListener('click', function() { vincularIncompleto(this.getAttribute('data-codigo')); });
    });
}

function vincularIncompleto(cod) {
    const al = alunos.find(a => a.codigo == cod);
    if (!al) { alert("Aluno não encontrado!"); return; }
    ['seg','ter','qua','qui','sex','sab'].forEach(campo => {
        const select = document.querySelector(`.inc-select-${al.codigo}-${campo}`);
        if (select) al[campo] = select.value ? parseInt(select.value) : '';
    });
    al.status = 'ATIVO';
    salvarNoGoogle(al);
    abrirSuperModal('incompletos');
}

// ============================================================
// FAB + FORMULÁRIOS
// ============================================================
function toggleFabMenu() { document.getElementById('fabContainer')?.classList.toggle('active'); }

function abrirFormularioSobreposto(tipo) {
    const modal = document.getElementById('globalSuperModal');
    const titulo = document.getElementById('superModalTitulo');
    const corpo = document.getElementById('superModalCorpo');
    if (!modal || !corpo || !titulo) return;
    document.getElementById('fabContainer')?.classList.remove('active');
    modal.classList.add('active');

    if (tipo === 'cadastro') {
        titulo.innerHTML = '📋 Matricular Novo Aluno';

        const diasSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
        const diasMapLocal = { 'Segunda': 'seg', 'Terça': 'ter', 'Quarta': 'qua', 'Quinta': 'qui', 'Sexta': 'sex', 'Sábado': 'sab' };
        const selectGradeHtml = diasSemana.map(dia => {
            const campo = diasMapLocal[dia];
            return `
                <div style="display:flex;flex-direction:column;gap:4px;">
                    <label style="font-size:0.82rem;font-weight:bold;color:#475569;">${dia}:</label>
                    <select id="cadGrade${campo}" class="form-select-field" style="width:100%;padding:8px;font-size:0.82rem;">
                        <option value="">[ Não treina ]</option>
                    </select>
                </div>
            `;
        }).join('');

        corpo.innerHTML = `
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;margin-bottom:20px;">
                <div><label style="font-weight:bold;display:block;margin-bottom:5px;">Código *</label><input type="number" id="fabCodigo" class="search-input-field" placeholder="Ex: 1050"></div>
                <div><label style="font-weight:bold;display:block;margin-bottom:5px;">Nome *</label><input type="text" id="fName" class="search-input-field"></div>
                <div><label style="font-weight:bold;display:block;margin-bottom:5px;">Telefone *</label><input type="text" id="fPhone" class="search-input-field" placeholder="(00) 00000-0000"></div>
                <div><label style="font-weight:bold;display:block;margin-bottom:5px;">Vencimento</label><input type="text" id="fVenc" class="search-input-field" value="${formatarData()}"></div>
                <div style="grid-column:1/-1;"><label style="font-weight:bold;display:block;margin-bottom:5px;">Modalidade *</label>
                    <select id="fMod" class="form-select-field" style="width:100%;height:46px;" onchange="filtrarTurmasPorModalidade()">
                        <option value="Natação Adulto">Natação Adulto</option>
                        <option value="Hidroginástica">Hidroginástica</option>
                        <option value="Natação Infantil Nível 1">Natação Infantil Nível 1</option>
                        <option value="Natação Infantil Nível 2">Natação Infantil Nível 2</option>
                        <option value="Natação Infantil Nível 3">Natação Infantil Nível 3</option>
                        <option value="Natação Baby">Natação Baby</option>
                        <option value="Personal Class">Personal Class</option>
                    </select>
                </div>
            </div>
            <div style="background:#edf2f7;padding:15px;border-radius:8px;margin-bottom:15px;">
                <span style="font-weight:bold;font-size:0.9rem;color:#1e293b;display:block;margin-bottom:10px;">🗓️ Vincular Turmas:</span>
                <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;">${selectGradeHtml}</div>
            </div>
            <div class="form-actions-row">
                <button class="btn-save-modal" onclick="salvarMatriculaFab()">💾 Efetivar Matrícula</button>
                <button class="btn-discard-modal" onclick="fecharSuperModal()">Cancelar</button>
            </div>
        `;
        filtrarTurmasPorModalidade();

    } else if (tipo === 'experimental') {
        titulo.innerHTML = '🧪 Agendar Nova Experimental';
        const modalidades = [...new Set(horariosConfig.map(h => h.modalidade))];
        corpo.innerHTML = `
            <div style="font-size:1rem;">
                <div style="margin-bottom:12px;"><label style="font-weight:bold;display:block;margin-bottom:5px;">Nome *</label><input type="text" id="fExpN" class="search-input-field"></div>
                <div style="margin-bottom:12px;"><label style="font-weight:bold;display:block;margin-bottom:5px;">Telefone *</label><input type="text" id="fExpP" class="search-input-field" placeholder="(00) 00000-0000"></div>
                <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:12px;">
                    <div><label style="font-weight:bold;display:block;margin-bottom:5px;">Modalidade *</label>
                        <select id="fExpMod" class="form-select-field" style="width:100%;" onchange="filtrarExpDias()">
                            <option value="">-- Selecione --</option>
                            ${modalidades.map(m => `<option value="${m}">${m}</option>`).join('')}
                        </select>
                    </div>
                    <div><label style="font-weight:bold;display:block;margin-bottom:5px;">Dia *</label>
                        <select id="fExpDia" class="form-select-field" style="width:100%;" onchange="filtrarExpHorarios()" disabled>
                            <option value="">-- Selecione a modalidade --</option>
                        </select>
                    </div>
                    <div><label style="font-weight:bold;display:block;margin-bottom:5px;">Horário *</label>
                        <select id="fExpH" class="form-select-field" style="width:100%;" disabled>
                            <option value="">-- Selecione o dia --</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="form-actions-row">
                <button class="btn-save-modal" style="background:#b45309;" onclick="salvarExpFab()">💾 Confirmar</button>
                <button class="btn-discard-modal" onclick="fecharSuperModal()">Cancelar</button>
            </div>
        `;
    }
}

function filtrarTurmasPorModalidade() {
    const mod = document.getElementById('fMod').value;
    const diasSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const diasMapLocal = { 'Segunda': 'seg', 'Terça': 'ter', 'Quarta': 'qua', 'Quinta': 'qui', 'Sexta': 'sex', 'Sábado': 'sab' };
    diasSemana.forEach(dia => {
        const campo = diasMapLocal[dia];
        const select = document.getElementById('cadGrade' + campo);
        if (!select) return;
        const turmas = horariosConfig.filter(hc => hc.dias.includes(dia) && hc.modalidade === mod);
        select.innerHTML = '<option value="">[ Não treina ]</option>' + turmas.map(hc => `<option value="${hc.id}">${hc.horario}</option>`).join('');
    });
}

function filtrarExpDias() {
    const mod = document.getElementById('fExpMod').value;
    const selectDia = document.getElementById('fExpDia');
    const selectH = document.getElementById('fExpH');
    selectDia.innerHTML = '<option value="">-- Selecione --</option>';
    selectH.innerHTML = '<option value="">-- Primeiro selecione o dia --</option>';
    selectH.disabled = true;
    if (!mod) { selectDia.disabled = true; return; }
    const dias = [...new Set(horariosConfig.filter(h => h.modalidade === mod).flatMap(h => h.dias))];
    const ordem = ['Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
    dias.sort((a, b) => ordem.indexOf(a) - ordem.indexOf(b));
    dias.forEach(dia => { selectDia.innerHTML += `<option value="${dia}">${dia}</option>`; });
    selectDia.disabled = false;
}

function filtrarExpHorarios() {
    const mod = document.getElementById('fExpMod').value;
    const dia = document.getElementById('fExpDia').value;
    const selectH = document.getElementById('fExpH');
    selectH.innerHTML = '<option value="">-- Selecione --</option>';
    if (!dia) { selectH.disabled = true; return; }
    horariosConfig.filter(h => h.modalidade === mod && h.dias.includes(dia))
        .forEach(h => { selectH.innerHTML += `<option value="${h.id}_${dia}">${h.horario}</option>`; });
    selectH.disabled = false;
}

function salvarMatriculaFab() {
    const codigoDigitado = document.getElementById('fabCodigo').value;
    const nome = document.getElementById('fName').value.trim();
    const telefone = document.getElementById('fPhone').value.trim();
    const modalidade = document.getElementById('fMod').value;
    const vencimento = document.getElementById('fVenc').value;
    const seg = document.getElementById('cadGradeseg').value ? parseInt(document.getElementById('cadGradeseg').value) : '';
    const ter = document.getElementById('cadGradeter').value ? parseInt(document.getElementById('cadGradeter').value) : '';
    const qua = document.getElementById('cadGradequa').value ? parseInt(document.getElementById('cadGradequa').value) : '';
    const qui = document.getElementById('cadGradequi').value ? parseInt(document.getElementById('cadGradequi').value) : '';
    const sex = document.getElementById('cadGradesex').value ? parseInt(document.getElementById('cadGradesex').value) : '';
    const sab = document.getElementById('cadGradesab').value ? parseInt(document.getElementById('cadGradesab').value) : '';

    if (!codigoDigitado) { alert('⚠️ Digite o código do aluno!'); return; }
    if (!nome || !telefone) { alert('⚠️ Nome e Telefone são obrigatórios!'); return; }

    const statusDef = (!seg && !ter && !qua && !qui && !sex && !sab) ? 'PENDENTE' : 'ATIVO';
    const novoAluno = { codigo: parseInt(codigoDigitado), nome, telefone, vencimento, modalidade, seg, ter, qua, qui, sex, sab, status: statusDef, observacao: '' };

    alunos.push(novoAluno);
    salvarNoGoogle(novoAluno);
    renderizarTudo();
    renderPainelExperimentaisHoje();
    fecharSuperModal();
    mostrarToast(`✅ ${nome} matriculado(a) com sucesso!`);
}

function salvarExpFab() {
    const nome = document.getElementById('fExpN').value.trim();
    const telefone = document.getElementById('fExpP').value.trim();
    const valor = document.getElementById('fExpH').value;
    if (!nome || !telefone || !valor) { alert('⚠️ Preencha todos os campos!'); return; }
    const [hId, diaExp] = valor.split('_');
    experimentais.push({ id: ++expIdCounter, nome, telefone, data: formatarData(), horario_id: parseInt(hId), dia: diaExp, status: 'agendado' });
    renderizarTudo();
    renderPainelExperimentaisHoje();
    fecharSuperModal();
    mostrarToast('✅ Experimental reservada!');
}

function matricularExperimentalInSuper(id) {
    const exp = experimentais.find(e => e.id === id);
    if (!exp) return;
    fecharSuperModal();
    abrirFormularioSobreposto('cadastro');
    setTimeout(() => {
        const nEl = document.getElementById('fName');
        const pEl = document.getElementById('fPhone');
        if (nEl) nEl.value = exp.nome;
        if (pEl) pEl.value = exp.telefone;
        experimentais = experimentais.filter(e => e.id !== id);
        renderizarTudo();
        renderPainelExperimentaisHoje();
    }, 250);
}

// ============================================================
// FIREBASE SAVE
// ============================================================
async function salvarNoGoogle(dadosAluno) {
    try {
        if (dadosAluno._docId) {
            await db.collection('alunos').doc(dadosAluno._docId).set(dadosAluno);
        } else {
            const docRef = await db.collection('alunos').add(dadosAluno);
            dadosAluno._docId = docRef.id;
        }
        mostrarToast('✅ Salvo no Firebase!');
    } catch (erro) {
        mostrarToast('❌ Erro ao salvar: ' + erro.message, 'erro');
        console.error(erro);
    }
}

// ============================================================
// EXPORTAR CSV
// ============================================================
function exportarCSV() {
    const header = ['Codigo','Nome','Telefone','Modalidade','Vencimento','Status','Seg','Ter','Qua','Qui','Sex','Sab','Observacao'];
    const rows = alunos.map(a => [
        a.codigo, a.nome, a.telefone, a.modalidade, a.vencimento || '', a.status || 'ATIVO',
        a.seg || '', a.ter || '', a.qua || '', a.qui || '', a.sex || '', a.sab || '',
        (a.observacao || '').replace(/,/g,'|')
    ]);
    const csv = [header, ...rows].map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `aquacontrol_${formatarData().replace('/','')}.csv`; a.click();
    URL.revokeObjectURL(url);
    mostrarToast('✅ CSV exportado!');
}

// ============================================================
// TEMA
// ============================================================
function toggleTheme() {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('aqua_theme', isDark ? 'dark' : 'light');
    document.getElementById('themeIcon').textContent = isDark ? '☀️' : '🌙';
}
(function() {
    const saved = localStorage.getItem('aqua_theme');
    if (saved === 'dark') document.body.classList.add('dark');
})();

// ============================================================
// MONITOR EM TEMPO REAL
// ============================================================
function atualizarMonitorTempoReal() {
    const agora = new Date();
    const hojeStr = diasPtBr[agora.getDay()];
    const minAtuais = agora.getHours() * 60 + agora.getMinutes();

    document.querySelectorAll('.card').forEach(card => card.querySelector('.badge-andamento')?.remove());

    horariosConfig.forEach(h => {
        if (!h.dias.includes(hojeStr)) return;
        const minIn = horarioParaMinutos(h.horario);
        const partesF = h.horario.split('-')[1]?.split(':').map(Number);
        const minFim = partesF ? partesF[0] * 60 + partesF[1] : minIn + 45;
        const diff = minIn - minAtuais;

        document.querySelectorAll('.card').forEach(card => {
            const txtMod = card.querySelector('h3 span')?.innerText;
            const txtHor = card.querySelector('.horario')?.innerText;
            if (txtMod === h.modalidade && txtHor === h.horario) {
                if (minAtuais >= minIn && minAtuais <= minFim) {
                    card.style.borderColor = "#f59e0b";
                } else if (diff > 0 && diff <= 120) {
                    card.style.borderColor = "#0284c7";
                }
            }
        });
    });
}

// ============================================================
// INICIALIZAÇÃO
// ============================================================
window.onload = function() {
    if (localStorage.getItem("aqua_authenticated") === "true") {
        document.getElementById("loginScreen").style.display = "none";
        document.getElementById("appContainer").style.display = "block";
        carregarDados();
    }
    setInterval(atualizarMonitorTempoReal, 30000);
    setInterval(() => {
        renderPainelExperimentaisHoje();
        renderizarTudo();
    }, 60000);
};
