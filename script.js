// ============================================================
// CONFIGURAÇÕES GLOBAIS
// ============================================================
const MASTER_PASSWORD = "aqua123";
// URL de integração oficial e preservada do Google Apps Script
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzGpaP6Kg3DRLojUee1Nb44SPwt2BixO5w4Sg_qjBPGSr1Ajiye9hSAGweLBde3fBzH/exec";

// ============================================================
// HORÁRIOS E TURMAS DO SISTEMA (CONFIGURAÇÃO)
// ============================================================
const horariosConfig = [
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
    { id: 50, modalidade: "Natação Baby", dias: ["Segunda","Quarta","Sexta"], horario: "17:00-17:30", capacidade: 18, turno: "tarde" },
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
    { id: 50, modalidade: "Natação Baby", dias: ["Segunda","Quarta","Sexta"], horario: "17:00-17:30", capacidade: 18, turno: "tarde" },
    { id: 51, modalidade: "Natação Baby", dias: ["Segunda","Quarta","Sexta"], horario: "19:50-20:20", capacidade: 18, turno: "noite" },
    { id: 52, modalidade: "Natação Baby", dias: ["Terça","Quinta"], horario: "09:40-10:10", capacidade: 18, turno: "manha" },
    { id: 53, modalidade: "Natação Baby", dias: ["Terça","Quinta"], horario: "14:10-14:40", capacidade: 18, turno: "tarde" },
    { id: 54, modalidade: "Natação Baby", dias: ["Terça","Quinta"], horario: "18:10-18:40", capacidade: 18, turno: "noite" },
    { id: 55, modalidade: "Natação Baby", dias: ["Terça","Quinta"], horario: "20:15-20:45", capacidade: 18, turno: "noite" },
    { id: 56, modalidade: "Natação Baby", dias: ["Sábado"], horario: "09:15-09:45", capacidade: 20, turno: "sabado" },
    { id: 57, modalidade: "Natação Baby", dias: ["Sábado"], horario: "11:10-11:40", capacidade: 20, turno: "sabado" },
    { id: 58, modalidade: "Natação Baby", dias: ["Sábado"], horario: "14:20-14:50", capacidade: 20, turno: "sabado" },
    { id: 59, modalidade: "Personal Class", dias: ["Segunda","Terça","Quarta","Quinta","Sexta"], horario: "06:00-07:00", capacidade: 3, turno: "manha" },
    { id: 60, modalidade: "Personal Class", dias: ["Segunda","Terça","Quarta","Quinta","Sexta"], horario: "07:00-08:00", capacidade: 3, turno: "manha" },
    { id: 61, modalidade: "Personal Class", dias: ["Segunda","Terça","Quarta","Quinta","Sexta"], horario: "08:00-09:00", capacidade: 3, turno: "manha" },
    { id: 62, modalidade: "Personal Class", dias: ["Segunda","Terça","Quarta","Quinta","Sexta"], horario: "09:00-10:00", capacidade: 3, turno: "manha" },
    { id: 63, modalidade: "Personal Class", dias: ["Segunda","Terça","Quarta","Quinta","Sexta"], horario: "10:00-11:00", capacidade: 3, turno: "tarde" },
    { id: 64, modalidade: "Personal Class", dias: ["Segunda","Terça","Quarta","Quinta","Sexta"], horario: "11:00-12:00", capacidade: 3, turno: "tarde" },
    { id: 65, modalidade: "Personal Class", dias: ["Segunda","Terça","Quarta","Quinta","Sexta"], horario: "12:00-13:00", capacidade: 3, turno: "tarde" },
    { id: 66, modalidade: "Personal Class", dias: ["Segunda","Terça","Quarta","Quinta","Sexta"], horario: "13:00-14:00", capacidade: 3, turno: "tarde" },
    { id: 67, modalidade: "Personal Class", dias: ["Segunda","Terça","Quarta","Quinta","Sexta"], horario: "14:00-15:00", capacidade: 3, turno: "tarde" },
    { id: 68, modalidade: "Personal Class", dias: ["Segunda","Terça","Quarta","Quinta","Sexta"], horario: "15:00-16:00", capacidade: 3, turno: "tarde" },
    { id: 69, modalidade: "Personal Class", dias: ["Segunda","Terça","Quarta","Quinta","Sexta"], horario: "16:00-17:00", capacidade: 3, turno: "tarde" },
    { id: 70, modalidade: "Personal Class", dias: ["Segunda","Terça","Quarta","Quinta","Sexta"], horario: "17:00-18:00", capacidade: 3, turno: "tarde" },
    { id: 71, modalidade: "Personal Class", dias: ["Segunda","Terça","Quarta","Quinta","Sexta"], horario: "18:00-19:00", capacidade: 3, turno: "noite" },
    { id: 72, modalidade: "Personal Class", dias: ["Segunda","Terça","Quarta","Quinta","Sexta"], horario: "19:00-20:00", capacidade: 3, turno: "noite" },
    { id: 73, modalidade: "Personal Class", dias: ["Segunda","Terça","Quarta","Quinta","Sexta"], horario: "20:00-21:00", capacidade: 3, turno: "noite" },
    { id: 74, modalidade: "Personal Class", dias: ["Segunda","Terça","Quarta","Quinta","Sexta"], horario: "21:00-22:00", capacidade: 3, turno: "noite" }
];

// ============================================================
// VARIÁVEIS GLOBAIS DE ESTADO
// ============================================================
let alunos = [];
let activeFilters = { modalidade: 'TODAS', turno: 'TODOS', ocupacao: 'TODOS' };
let currentDiasFiltro = [];
let alunoFilterStatus = 'TODOS';
let studentIdCounter = 1000;
let editingStudent = null;
let googleConnected = false;

// ============================================================
// FUNÇÕES AUXILIARES E DE TRATAMENTO DE DADOS
// ============================================================
function gerarCodigo() { return ++studentIdCounter; }

function formatarData() {
    const hoje = new Date();
    return `${String(hoje.getDate()).padStart(2,'0')}/${String(hoje.getMonth()+1).padStart(2,'0')}`;
}

function verificarVencimento(dataVenc) {
    if (!dataVenc) return { vencido: false, texto: "Sem data" };
    const partes = String(dataVenc).split('/');
    if (partes.length !== 2) return { vencido: false, texto: dataVenc };
    const hoje = new Date();
    const dataComp = new Date(hoje.getFullYear(), parseInt(partes[1])-1, parseInt(partes[0]));
    const diff = Math.ceil((dataComp - hoje) / (1000 * 60 * 60 * 24));
    if (diff < 0) return { vencido: true, texto: `⚠️ Vencido há ${-diff} dias` };
    if (diff === 0) return { vencido: true, texto: `⚠️ Vence hoje` };
    if (diff <= 5) return { vencido: false, texto: `📅 Falta ${diff} dias` };
    return { vencido: false, texto: `📅 ${dataVenc}` };
}

function getAlunosPorHorario(horarioId) {
    const config = horariosConfig.find(h => h.id == horarioId);
    return alunos.filter(a => {
        // Tenta achar pelo ID numérico
        if (a.horario_id == horarioId) return true;
        // Tenta achar pelo texto escrito na planilha do Google (Modalidade + Horário)
        if (config && a.modalidade === config.modalidade && a.horario === config.horario) {
            a.horario_id = horarioId; // Converte o texto em ID para o sistema funcionar rápido
            return true;
        }
        return false;
    });
}

function editarAluno(codigo) {
    const aluno = alunos.find(a => a.codigo == codigo);
    if (!aluno) return;
    
    // Preenche o formulário
    document.getElementById('editStudentId').value = aluno.codigo;
    document.getElementById('addStudentName').value = aluno.nome || '';
    document.getElementById('addStudentPhone').value = aluno.telefone || '';
    document.getElementById('addStudentDueDate').value = aluno.vencimento || '';
    document.getElementById('addStudentBirthday').value = aluno.aniversario || '';
    document.getElementById('addStudentModality').value = aluno.modalidade || '';
    document.getElementById('addStudentHorario').value = aluno.horario_id || '';
    document.getElementById('addStudentObs').value = aluno.obs || '';
    
    // Marca as caixinhas dos dias de treino
    document.querySelectorAll('.dia-treino-cb').forEach(cb => cb.checked = false);
    if (aluno.dias_treino) {
        const dias = aluno.dias_treino.split(',');
        document.querySelectorAll('.dia-treino-cb').forEach(cb => {
            if (dias.map(d => d.trim()).includes(cb.value)) cb.checked = true;
        });
    }
    
    // Muda o visual dos botões
    const btnSubmit = document.querySelector('.btn-submit');
    if (btnSubmit) btnSubmit.innerText = '💾 Salvar Edição';
    document.getElementById('btnCancelar').style.display = 'inline-block';
    
    // Rola a tela para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function getDiasTreinoSelecionados() {
    return Array.from(document.querySelectorAll('.dia-treino-cb:checked')).map(cb => cb.value);
}
// ============================================================
// FUNÇÕES DE CADASTRO E GERENCIAMENTO DE ALUNOS
// ============================================================
// ============================================================
// FUNÇÕES DE CADASTRO E GERENCIAMENTO DE ALUNOS
// ============================================================
function cadastrarAluno() {
    const editId = document.getElementById('editStudentId')?.value;
    const nome = document.getElementById('addStudentName')?.value.trim();
    const telefone = document.getElementById('addStudentPhone')?.value.trim();
    const vencimento = document.getElementById('addStudentDueDate')?.value.trim() || formatarData();
    const aniversario = document.getElementById('addStudentBirthday')?.value.trim();
    const modalidade = document.getElementById('addStudentModality')?.value;
    const diasTreino = getDiasTreinoSelecionados();
    const horarioId = parseInt(document.getElementById('addStudentHorario')?.value);
    const obs = document.getElementById('addStudentObs')?.value.trim();
    
    if (!nome || !telefone || !modalidade || diasTreino.length === 0 || !horarioId) {
        alert('Preencha todos os campos obrigatórios!');
        return;
    }
    
    if (editId) {
        // Atualiza um aluno que já existe
        const index = alunos.findIndex(a => a.codigo == editId);
        if (index !== -1) {
            alunos[index] = { ...alunos[index], nome, telefone, vencimento, aniversario, modalidade, dias_treino: diasTreino.join(','), horario_id: horarioId, obs };
            alert(`✅ ${nome} atualizado com sucesso!`);
        }
    } else {
        // Cria um aluno novo
        alunos.push({
            codigo: gerarCodigo(), nome, telefone, vencimento, aniversario, modalidade, dias_treino: diasTreino.join(','), horario_id: horarioId, obs: obs || '', status: 'ATIVO'
        });
        alert(`✅ ${nome} cadastrado com sucesso!`);
    }
    
    cancelarEdicao();
    renderizarTudo();
}

function editarAluno(codigo) {
    const aluno = alunos.find(a => a.codigo == codigo);
    if (!aluno) return;
    
    // Puxa os dados do aluno de volta para os campos lá em cima
    document.getElementById('editStudentId').value = aluno.codigo;
    document.getElementById('addStudentName').value = aluno.nome || '';
    document.getElementById('addStudentPhone').value = aluno.telefone || '';
    document.getElementById('addStudentDueDate').value = aluno.vencimento || '';
    document.getElementById('addStudentBirthday').value = aluno.aniversario || '';
    document.getElementById('addStudentModality').value = aluno.modalidade || '';
    document.getElementById('addStudentHorario').value = aluno.horario_id || '';
    document.getElementById('addStudentObs').value = aluno.obs || '';
    
    // Remarca os dias da semana corretamente
    document.querySelectorAll('.dia-treino-cb').forEach(cb => cb.checked = false);
    if (aluno.dias_treino) {
        const dias = String(aluno.dias_treino).split(',');
        document.querySelectorAll('.dia-treino-cb').forEach(cb => {
            if (dias.map(d => d.trim()).includes(cb.value)) cb.checked = true;
        });
    }
    
    // Muda a aparência dos botões
    const btnSubmit = document.querySelector('.btn-submit');
    if (btnSubmit) btnSubmit.innerText = '💾 Salvar Edição';
    document.getElementById('btnCancelar').style.display = 'inline-block';
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function cancelarEdicao() {
    document.getElementById('editStudentId').value = '';
    document.getElementById('addStudentName').value = '';
    document.getElementById('addStudentPhone').value = '';
    document.getElementById('addStudentDueDate').value = '';
    document.getElementById('addStudentBirthday').value = '';
    document.getElementById('addStudentModality').value = '';
    document.getElementById('addStudentHorario').value = '';
    document.getElementById('addStudentObs').value = '';
    document.querySelectorAll('.dia-treino-cb').forEach(cb => cb.checked = false);
    
    const btnSubmit = document.querySelector('.btn-submit');
    if (btnSubmit) btnSubmit.innerText = '➕ Cadastrar';
    document.getElementById('btnCancelar').style.display = 'none';
}

function removerAluno(codigo) {
    if (!confirm('Remover este aluno?')) return;
    alunos = alunos.filter(a => a.codigo != codigo);
    renderizarTudo();
}

function salvarDiasIncompletos(codigo) {
    const aluno = alunos.find(a => a.codigo == codigo);
    if (!aluno) return;
    
    const dias = Array.from(document.querySelectorAll(`.correcao-dia-${codigo}:checked`)).map(cb => cb.value);
    aluno.dias_treino = dias.join(',');
    
    renderizarTudo();
    alert(`✅ Dias de ${aluno.nome} atualizados: ${dias.join(', ') || 'Nenhum'}`);
}

function salvarDiasIncompletos(codigo) {
    const aluno = alunos.find(a => a.codigo == codigo);
    if (!aluno) return;
    
    const dias = Array.from(document.querySelectorAll(`.correcao-dia-${codigo}:checked`)).map(cb => cb.value);
    aluno.dias_treino = dias.join(',');
    
    renderizarTudo();
    alert(`✅ Dias de ${aluno.nome} atualizados: ${dias.join(', ') || 'Nenhum'}`);
}

// ============================================================
// SISTEMA DE FILTROS LOGÍCOS
// ============================================================
function getHorariosFiltrados() {
    let filtrados = [...horariosConfig];
    
    if (currentDiasFiltro.length > 0) {
        filtrados = filtrados.filter(h => {
            return currentDiasFiltro.some(dia => h.dias.includes(dia));
        });
    }
    
    if (activeFilters.modalidade !== 'TODAS') {
        filtrados = filtrados.filter(h => h.modalidade === activeFilters.modalidade);
    }
    
    if (activeFilters.turno !== 'TODOS') {
        filtrados = filtrados.filter(h => h.turno === activeFilters.turno);
    }
    
    if (activeFilters.ocupacao !== 'TODOS') {
        filtrados = filtrados.filter(h => {
            const alunosHorario = getAlunosPorHorario(h.id);
            const ocupacaoAtual = alunosHorario.length;
            
            if (activeFilters.ocupacao === 'COM_ALUNOS') return ocupacaoAtual > 0;
            if (activeFilters.ocupacao === 'VAZIAS') return ocupacaoAtual === 0;
            if (activeFilters.ocupacao === 'LOTADAS') return ocupacaoAtual >= h.capacidade;
            if (activeFilters.ocupacao === 'COM_VAGAS') return ocupacaoAtual < h.capacidade;
            if (activeFilters.ocupacao === 'VENCIDOS') {
                return alunosHorario.some(a => verificarVencimento(a.vencimento).vencido);
            }
            return true;
        });
    }
    
    return filtrados;
}

// ============================================================
// RENDERIZADORES DE TELA (HTML DINÂMICO)
// ============================================================
function renderizarHorarios() {
    const grid = document.getElementById('cardsGrid');
    if (!grid) return;
    
    const filtrados = getHorariosFiltrados();
    const searchQuery = document.getElementById('searchBar')?.value.toLowerCase() || '';
    
    let exibir = filtrados;
    if (searchQuery) {
        exibir = filtrados.filter(h => {
            const alunosHorario = getAlunosPorHorario(h.id);
            const matchHorario = h.horario.toLowerCase().includes(searchQuery) || h.modalidade.toLowerCase().includes(searchQuery);
            const matchAluno = alunosHorario.some(a => String(a.nome || '').toLowerCase().includes(searchQuery) || String(a.telefone || '').includes(searchQuery));
            return matchHorario || matchAluno;
        });
    }
    
    if (exibir.length === 0) {
        grid.innerHTML = '<div style="text-align:center; padding:40px; color:#94a3b8;">Nenhum horário encontrado com estes filtros</div>';
        return;
    }
    
    grid.innerHTML = exibir.map(horario => {
        const alunosHorario = getAlunosPorHorario(horario.id);
        const ocupacao = alunosHorario.length;
        const percentage = (ocupacao / horario.capacidade) * 100;
        const lotado = ocupacao >= horario.capacidade;
        
        let badgeClass = 'badge-disponivel';
        let badgeText = 'Disponível';
        if (ocupacao === 0) { badgeText = 'Vazia'; badgeClass = 'badge-vazio'; }
        if (lotado) { badgeText = 'Lotada'; badgeClass = 'badge-lotado'; }
        
        const alunosHtml = alunosHorario.map(a => {
            const status = verificarVencimento(a.vencimento);
            return `
                <div class="student-item">
                    <div>
                        <span class="student-name">${a.nome}</span>
                        <span style="font-size:0.55rem; color:#64748b;"> #${a.codigo}</span>
                        ${status.vencido ? `<span class="badge-vencido" style="font-size:0.5rem; margin-left:5px;">${status.texto}</span>` : ''}
                    </div>
                    <a href="https://wa.me/${String(a.telefone || '').replace(/\D/g,'')}" target="_blank" class="btn-whatsapp">WhatsApp</a>
                </div>
            `;
        }).join('');
        
        return `
            <div class="card">
                <div class="card-header" onclick="abrirModalHorario(${horario.id})">
                    <h3>${horario.modalidade}</h3>
                    <div class="dias">${horario.dias.join(' • ')}</div>
                    <div class="horario">${horario.horario}</div>
                </div>
                <div class="card-body">
                    <div class="info-row">
                        <span>📊 Ocupação</span>
                        <span><strong>${ocupacao}/${horario.capacidade}</strong> <span class="badge ${badgeClass}">${badgeText}</span></span>
                    </div>
                    <div class="progress-bar"><div class="progress-fill" style="width: ${Math.min(percentage,100)}%; background: ${percentage >= 100 ? '#ef4444' : (percentage >= 80 ? '#f59e0b' : '#10b981')}"></div></div>
                    <div class="student-list">${alunosHtml || '<div style="text-align:center; color:#94a3b8; padding:10px;">Nenhum aluno</div>'}</div>
                    <div class="actions">
                        <button class="btn btn-remove" onclick="removerUltimoAluno(${horario.id})">- Remover</button>
                        <button class="btn btn-add" onclick="abrirModalCadastro()">+ Aluno</button>
                        <button class="btn btn-view" onclick="abrirModalHorario(${horario.id})">🔍</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function removerUltimoAluno(horarioId) {
    const alunosHorario = getAlunosPorHorario(horarioId);
    if (alunosHorario.length === 0) return;
    removerAluno(alunosHorario[alunosHorario.length-1].codigo);
}

function renderStudentTable() {
    const body = document.getElementById('studentTableBody');
    if (!body) return;
    
    const search = document.getElementById('studentTableSearch')?.value.toLowerCase() || '';
    let filtrados = [...alunos];
    
    if (search) {
        filtrados = filtrados.filter(a => String(a.nome || '').toLowerCase().includes(search) || String(a.telefone || '').includes(search));
    }
    if (alunoFilterStatus === 'VENCIDOS') {
        filtrados = filtrados.filter(a => verificarVencimento(a.vencimento).vencido);
    } else if (alunoFilterStatus === 'EM_DIA') {
        filtrados = filtrados.filter(a => !verificarVencimento(a.vencimento).vencido);
    }
    
    body.innerHTML = filtrados.map(a => {
        const status = verificarVencimento(a.vencimento);
        const horario = horariosConfig.find(h => h.id == a.horario_id);
        return `
            <tr class="${status.vencido ? 'vencido' : ''}">
                <td>#${a.codigo}</td>
                <td><strong>${a.nome}</strong></td>
                <td>${a.telefone}</td>
                <td><span class="badge ${status.vencido ? 'badge-vencido' : 'badge-emdia'}">${status.texto}</span></td>
                <td>${a.aniversario || '—'}</td>
                <td><span style="color:var(--primary); font-weight:600;">${a.dias_treino || '—'}</span></td>
                <td>${horario ? horario.horario : '—'}</td>
                <td>${a.modalidade}</td>
                <td>
                    <a href="https://wa.me/${String(a.telefone || '').replace(/\D/g,'')}" target="_blank" class="btn-whatsapp" style="display:inline-block; margin-right:5px;">💬</a>
                    <button onclick="editarAluno(${a.codigo})" style="background:#e0f2fe; color:#0369a1; border:none; padding:4px 8px; border-radius:4px; cursor:pointer; margin-right:5px;">✏️</button>
                    <button onclick="removerAluno(${a.codigo})" style="background:#fee2e2; border:none; padding:4px 8px; border-radius:4px; cursor:pointer;">🗑️</button>
                </td>
            </tr>
        `;
    }).join('');
    
    renderVencidosList();
    atualizarWidgets();
}

function renderVencidosList() {
    const container = document.getElementById('vencidosList');
    if (!container) return;
    
    const vencidos = alunos.filter(a => verificarVencimento(a.vencimento).vencido);
    const vencidosUnicos = [];
    const nomesVistos = [];
    vencidos.forEach(v => {
        const nomeSeguro = String(v.nome || '').toLowerCase();
        if (!nomesVistos.includes(nomeSeguro)) {
            nomesVistos.push(nomeSeguro);
            vencidosUnicos.push(v);
        }
    });
    
    if (vencidosUnicos.length === 0) {
        container.innerHTML = '<div style="text-align:center; padding:20px; color:#16a34a;">✅ Todos os alunos estão em dia!</div>';
        return;
    }
    
    container.innerHTML = vencidosUnicos.map(v => `
        <div class="vencido-card">
            <div><strong>#${v.codigo}</strong> 👤 ${v.nome} - 📞 ${v.telefone}</div>
            <a href="https://wa.me/${String(v.telefone || '').replace(/\D/g,'')}" target="_blank" class="btn-whatsapp">💬 Cobrar</a>
        </div>
    `).join('');
}

function renderIncompletos() {
    const body = document.getElementById('incompletosBody');
    if (!body) return;
    
    const incompletos = alunos.filter(a => !a.dias_treino || a.dias_treino.trim() === '');
    
    if (incompletos.length === 0) {
        body.innerHTML = '<tr><td colspan="6" style="text-align:center; padding:40px;">✅ Nenhum aluno incompleto! Todos têm dias de treino definidos.</td></tr>';
        return;
    }
    
    body.innerHTML = incompletos.map(a => {
        const diasOptions = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
        const checkboxes = diasOptions.map(dia => `
            <label class="dia-correcao-label">
                <input type="checkbox" class="correcao-dia-${a.codigo}" value="${dia}"> ${dia.substring(0,3)}
            </label>
        `).join('');
        
        return `
            <tr>
                <td>#${a.codigo}</td>
                <td><strong>${a.nome}</strong></td>
                <td>${a.telefone}</td>
                <td><span style="color:#ef4444;">⚠️ Não definido</span></td>
                <td><div class="dias-correcao-group">${checkboxes}</div></td>
                <td><button class="btn-salvar-dias" onclick="salvarDiasIncompletos(${a.codigo})">💾 Salvar</button></td>
            </tr>
        `;
    }).join('');
}

function renderResumo() {
    const container = document.getElementById('resumoContainer');
    if (!container) return;
    
    const total = alunos.length;
    const porModalidade = {};
    alunos.forEach(a => { porModalidade[a.modalidade] = (porModalidade[a.modalidade] || 0) + 1; });
    
    container.innerHTML = `
        <div style="background:white; border-radius:12px; padding:20px;">
            <h3 style="margin-bottom:15px;">📊 Resumo da Academia</h3>
            <div style="background:#f1f5f9; padding:20px; border-radius:12px; text-align:center; margin-bottom:20px;">
                <div style="font-size:2.5rem; font-weight:700; color:#006994;">${total}</div>
                <div>Total de Alunos Matriculados</div>
            </div>
            <h4>📋 Por Modalidade</h4>
            ${Object.entries(porModalidade).map(([mod, qtd]) => `
                <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid #eee;">
                    <span>${mod}</span><span><strong>${qtd}</strong> alunos</span>
                </div>
            `).join('')}
        </div>
    `;
}

function renderizarSidebar() {
    const ranking = [...horariosConfig].sort((a,b) => getOcupacaoHorario(b.id) - getOcupacaoHorario(a.id)).slice(0,5);
    document.getElementById('rankingList').innerHTML = ranking.map(h => {
        const ocup = getOcupacaoHorario(h.id);
        const pct = Math.round((ocup / h.capacidade) * 100);
        return `<div class="ranking-item"><span>${h.modalidade.split(' ').slice(0,2).join(' ')} ${h.horario.split('-')[0]}</span><span><strong>${ocup}/${h.capacidade}</strong> (${pct}%)</span></div>`;
    }).join('');
    
    const aniversariantes = getAniversariantesMes();
    document.getElementById('aniversariantesList').innerHTML = aniversariantes.length ? 
        aniversariantes.map(a => `<div class="ranking-item"><span>🎂 ${a.nome}</span><span>${a.aniversario}</span></div>`).join('') :
        '<div class="ranking-item" style="color:#94a3b8;">Nenhum aniversariante</div>';
    
    const totalAlunos = alunos.length;
    const vencidos = alunos.filter(a => verificarVencimento(a.vencimento).vencido).length;
    document.getElementById('statsSidebar').innerHTML = `
        <div class="sidebar-stat"><span>👥 Alunos</span><span><strong>${totalAlunos}</strong></span></div>
        <div class="sidebar-stat"><span>⚠️ Vencidos</span><span><strong style="color:#dc2626;">${vencidos}</strong></span></div>
        <div class="sidebar-stat"><span>✅ Em dia</span><span><strong style="color:#16a34a;">${totalAlunos - vencidos}</strong></span></div>
    `;
}

function atualizarWidgets() {
    const totalAlunos = alunos.length;
    const vencidos = alunos.filter(a => verificarVencimento(a.vencimento).vencido).length;
    const emDia = totalAlunos - vencidos;
    
    let manha = 0, tarde = 0, noite = 0, sabado = 0;
    alunos.forEach(a => {
        const h = horariosConfig.find(h => h.id == a.horario_id);
        if (h) {
            if (h.turno === 'manha') manha++;
            else if (h.turno === 'tarde') tarde++;
            else if (h.turno === 'noite') noite++;
            else if (h.turno === 'sabado') sabado++;
        }
    });
    
    const totalMatriculas = manha + tarde + noite + sabado;
    const capacidadeTotal = horariosConfig.reduce((s, h) => s + h.capacidade, 0);
    const pctOcupacao = capacidadeTotal > 0 ? Math.round((totalMatriculas / capacidadeTotal) * 100) : 0;
    
    document.getElementById('widgetTotalAlunosCount').innerText = totalAlunos;
    document.getElementById('widgetTotalAlunos').innerText = totalAlunos;
    document.getElementById('widgetVencidos').innerText = vencidos;
    document.getElementById('widgetEmDia').innerText = emDia;
    document.getElementById('widgetManha').innerText = manha;
    document.getElementById('widgetTarde').innerText = tarde;
    document.getElementById('widgetNoite').innerText = noite;
    document.getElementById('widgetSabado').innerText = sabado;
    document.getElementById('widgetOcupacao').innerText = `${pctOcupacao}%`;
    document.getElementById('progressGeral').style.width = `${pctOcupacao}%`;
    document.getElementById('topGlobalAlunos').innerText = `${totalAlunos} alunos`;
    document.getElementById('topGlobalVagas').innerText = `${totalMatriculas} matrículas`;
    
    const turnos = ['Manha', 'Tarde', 'Noite', 'Sabado'];
    const valores = [manha, tarde, noite, sabado];
    turnos.forEach((t, i) => {
        const maxCap = t === 'Sabado' ? 200 : 300;
        const pct = Math.min((valores[i] / maxCap) * 100, 100);
        document.getElementById(`progress${t}`).style.width = `${pct}%`;
    });
}

function renderizarTudo() {
    renderizarHorarios();
    renderStudentTable();
    renderIncompletos();
    renderResumo();
    renderizarSidebar();
    atualizarWidgets();
}

// ============================================================
// COMPORTAMENTO DOS FILTROS DA INTERFACE
// ============================================================
function limparFiltrosDia(btn) {
    document.querySelectorAll('.dia-filtro-cb').forEach(cb => cb.checked = false);
    currentDiasFiltro = [];
    document.querySelectorAll('#filterDays .btn-select').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderizarHorarios();
}

function filtrarHorarios() {
    currentDiasFiltro = Array.from(document.querySelectorAll('.dia-filtro-cb:checked')).map(cb => cb.value);
    const btnTodos = document.querySelector('#filterDays .btn-select');
    if (btnTodos) btnTodos.classList.toggle('active', currentDiasFiltro.length === 0);
    renderizarHorarios();
}

function filtrarPorModalidade(modalidade) {
    activeFilters.modalidade = modalidade;
    document.querySelectorAll('#filterModalities .btn-select').forEach(b => b.classList.remove('active'));
    if (event && event.target) event.target.classList.add('active');
    renderizarHorarios();
}

function filtrarPorTurno(turno) {
    activeFilters.turno = turno;
    document.querySelectorAll('#filterTurno .btn-select').forEach(b => b.classList.remove('active'));
    if (event && event.target) event.target.classList.add('active');
    renderizarHorarios();
}

function filtrarPorOcupacao(ocupacao) {
    activeFilters.ocupacao = ocupacao;
    document.querySelectorAll('#filterOcupacao .btn-select').forEach(b => b.classList.remove('active'));
    if (event && event.target) event.target.classList.add('active');
    renderizarHorarios();
}

function setFilterAluno(status) {
    alunoFilterStatus = status;
    document.querySelectorAll('#tab-alunos .filter-options .btn-select').forEach(b => b.classList.remove('active'));
    if (event && event.target) event.target.classList.add('active');
    renderStudentTable();
}

function filtrarIncompletos(filter) {
    renderIncompletos();
}

// ============================================================
// CONTROLE DOS MODAIS (JANELAS POP-UP)
// ============================================================
function abrirModalHorario(horarioId) {
    const horario = horariosConfig.find(h => h.id === horarioId);
    if (!horario) return;
    const alunosHorario = getAlunosPorHorario(horarioId);
    
    document.getElementById('modalTitulo').innerHTML = `${horario.modalidade} - ${horario.horario}`;
    const body = document.getElementById('modalBody');
    body.innerHTML = `
        <div style="margin-bottom:15px;"><strong>📅 Dias:</strong> ${horario.dias.join(', ')}<br><strong>👥 Ocupação:</strong> ${alunosHorario.length}/${horario.capacidade}</div>
        <div style="border-top:1px solid #eee; padding-top:10px;"><h4>👤 Alunos (${alunosHorario.length})</h4>
        ${alunosHorario.map(a => `
            <div class="modal-student-row">
                <div><strong>${a.nome}</strong><br><span style="font-size:0.65rem;">📞 ${a.telefone}</span></div>
                <div><a href="https://wa.me/${String(a.telefone || '').replace(/\D/g,'')}" target="_blank" class="btn-whatsapp">💬</a>
                <button onclick="removerAluno(${a.codigo}); fecharModal();" style="background:#fee2e2; border:none; padding:4px 8px; border-radius:4px; cursor:pointer;">🗑️</button></div>
            </div>
        `).join('') || '<div style="text-align:center;">Nenhum aluno</div>'}</div>
    `;
    document.getElementById('modal').classList.add('active');
}

function abrirModalCadastro() {
    document.getElementById('modalTitulo').innerHTML = '➕ Cadastrar Aluno';
    document.getElementById('modalBody').innerHTML = `
        <div>
            <input type="text" id="modalNome" placeholder="Nome" style="width:100%; padding:8px; margin-bottom:8px; border:1px solid #ddd; border-radius:6px;">
            <input type="text" id="modalTelefone" placeholder="Telefone" style="width:100%; padding:8px; margin-bottom:8px; border:1px solid #ddd; border-radius:6px;">
            <input type="text" id="modalVencimento" placeholder="Vencimento (DD/MM)" style="width:100%; padding:8px; margin-bottom:8px; border:1px solid #ddd; border-radius:6px;" value="${formatarData()}">
            <select id="modalModalidade" style="width:100%; padding:8px; margin-bottom:8px; border:1px solid #ddd; border-radius:6px;">
                <option value="">Selecione Modalidade</option>
                <option value="Natação Adulto">Natação Adulto</option>
                <option value="Hidroginástica">Hidroginástica</option>
                <option value="Natação Infantil Nível 1">Infantil N1</option>
                <option value="Natação Infantil Nível 2">Infantil N2</option>
                <option value="Natação Infantil Nível 3">Infantil N3</option>
                <option value="Natação Baby">Baby</option>
                <option value="Personal Class">Personal</option>
            </select>
            <div style="display:flex; gap:8px; margin-bottom:8px;">
                <label><input type="checkbox" class="modal-dia-cb" value="Segunda"> Seg</label>
                <label><input type="checkbox" class="modal-dia-cb" value="Terça"> Ter</label>
                <label><input type="checkbox" class="modal-dia-cb" value="Quarta"> Qua</label>
                <label><input type="checkbox" class="modal-dia-cb" value="Quinta"> Qui</label>
                <label><input type="checkbox" class="modal-dia-cb" value="Sexta"> Sex</label>
                <label><input type="checkbox" class="modal-dia-cb" value="Sábado"> Sáb</label>
            </div>
            <select id="modalHorario" style="width:100%; padding:8px; margin-bottom:8px; border:1px solid #ddd; border-radius:6px;">
                <option value="">Selecione horário</option>
                ${horariosConfig.map(h => `<option value="${h.id}">${h.modalidade} - ${h.horario}</option>`).join('')}
            </select>
            <button onclick="salvarCadastroModal()" style="width:100%; background:#006994; color:white; border:none; padding:10px; border-radius:6px; font-weight:bold; cursor:pointer;">✅ Cadastrar</button>
        </div>
    `;
    document.getElementById('modal').classList.add('active');
}

function salvarCadastroModal() {
    const nome = document.getElementById('modalNome')?.value.trim();
    const telefone = document.getElementById('modalTelefone')?.value.trim();
    const vencimento = document.getElementById('modalVencimento')?.value.trim() || formatarData();
    const modalidade = document.getElementById('modalModalidade')?.value;
    const dias = Array.from(document.querySelectorAll('.modal-dia-cb:checked')).map(cb => cb.value);
    const horarioId = parseInt(document.getElementById('modalHorario')?.value);
    
    if (!nome || !telefone || !modalidade || dias.length === 0 || !horarioId) {
        alert('Preencha todos os campos!');
        return;
    }
    
    const novoAluno = {
        codigo: gerarCodigo(),
        nome: nome,
        telefone: telefone,
        vencimento: vencimento,
        aniversario: '',
        modalidade: modalidade,
        dias_treino: dias.join(','),
        horario_id: horarioId,
        obs: '',
        status: 'ATIVO'
    };
    
    alunos.push(novoAluno);
    renderizarTudo();
    fecharModal();
    alert(`✅ ${nome} cadastrado com sucesso!`);
}

function fecharModal(event) {
    if (event && event.target !== event.currentTarget) return;
    document.getElementById('modal').classList.remove('active');
}

// ============================================================
// EXPORTAÇÃO DE ARQUIVOS E BUSCA GLOBAL
// ============================================================
function exportarCSV() {
    let csv = "Código,Nome,Telefone,Vencimento,Aniversário,Modalidade,Dias de Treino,Horário,OBS\n";
    alunos.forEach(a => {
        const horario = horariosConfig.find(h => h.id == a.horario_id);
        csv += `"${a.codigo}","${a.nome}","${a.telefone}","${a.vencimento}","${a.aniversario || ''}","${a.modalidade}","${a.dias_treino || ''}","${horario ? horario.horario : ''}","${a.obs || ''}"\n`;
    });
    const blob = new Blob(["\uFEFF" + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `aquacontrol_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
}

function buscarGlobal() {
    const termo = document.getElementById('globalSearchHeader')?.value.toLowerCase();
    if (!termo) return;
    const encontrados = alunos.filter(a => String(a.nome || '').toLowerCase().includes(termo) || String(a.telefone || '').includes(termo));
    if (encontrados.length > 0) {
        mudarAba('alunos');
        document.getElementById('studentTableSearch').value = termo;
        renderStudentTable();
    }
}

// ============================================================
// INTEGRAÇÃO ASSÍNCRONA COM GOOGLE APPS SCRIPT
// ============================================================
async function carregarDados() {
    const statusEl = document.getElementById('googleStatus');
    statusEl.innerText = '🔄 Carregando...';
    document.getElementById('loadingBanner').style.display = 'block';
    
    try {
        const resposta = await fetch(GOOGLE_SCRIPT_URL);
        const dados = await resposta.json();
        
        if (dados.alunos && dados.alunos.length > 0) {
            alunos = dados.alunos;
            const maxCodigo = Math.max(...alunos.map(a => a.codigo || 0), 1000);
            studentIdCounter = maxCodigo;
        } else {
            alunos = [];
        }
        
        statusEl.innerText = '✅ Online';
        statusEl.classList.add('online');
        googleConnected = true;
    } catch (erro) {
        console.error("Erro na sincronização:", erro);
        statusEl.innerText = '⚠️ Offline';
        googleConnected = false;
    } finally {
        document.getElementById('loadingBanner').style.display = 'none';
        renderizarTudo();
        
        // Alimenta o seletor de horários do formulário de cadastro principal
        const selectHorario = document.getElementById('addStudentHorario');
        if (selectHorario && selectHorario.options.length <= 1) {
            horariosConfig.forEach(h => {
                const opt = document.createElement('option');
                opt.value = h.id;
                opt.innerText = `${h.modalidade} (${h.horario})`;
                selectHorario.appendChild(opt);
            });
        }
    }
}

// ============================================================
// INTERNAVEGAÇÃO (SISTEMA DE ABAS) E CONTROLE DE LOGIN
// ============================================================
function mudarAba(aba) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    
    if (aba === 'horarios') {
        document.querySelector('.tab:first-child').classList.add('active');
        document.getElementById('tab-horarios').classList.add('active');
        renderizarHorarios();
    } else if (aba === 'alunos') {
        document.querySelectorAll('.tab')[1].classList.add('active');
        document.getElementById('tab-alunos').classList.add('active');
        renderStudentTable();
    } else if (aba === 'resumo') {
        document.querySelectorAll('.tab')[2].classList.add('active');
        document.getElementById('tab-resumo').classList.add('active');
        renderResumo();
    } else if (aba === 'incompletos') {
        document.querySelectorAll('.tab')[3].classList.add('active');
        document.getElementById('tab-incompletos').classList.add('active');
        renderIncompletos();
    }
}

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

function logout() {
    localStorage.removeItem("aqua_authenticated");
    location.reload();
}

// Execução automática ao iniciar a página
window.onload = function() {
    if (localStorage.getItem("aqua_authenticated") === "true") {
        document.getElementById("loginScreen").style.display = "none";
        document.getElementById("appContainer").style.display = "block";
        carregarDados();
    }
};