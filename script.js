// ============================================================
// AQUACONTROL v7.0 — SUPABASE VERSION
// ============================================================

// ============================================================
// CONFIGURAÇÃO DO SUPABASE
// ============================================================
const SUPABASE_URL = "https://tibkrjcwtcinedijfuvt.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable__kiaNy9c-My-wHiD8zI2eg_guEYcFnb";

// CRIAR CLIENTE SUPABASE (USANDO A VARIÁVEL GLOBAL)
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ============================================================
// LISTA DE MODALIDADES
// ============================================================
let modalidadesDisponiveis = [
    "Natação Adulto",
    "Hidroginástica",
    "Natação Infantil Nível 1",
    "Natação Infantil Nível 2",
    "Natação Infantil Nível 3",
    "Natação Baby",
    "Personal Class"
];

// ============================================================
// GRADE HORÁRIA
// ============================================================
let horariosConfig = [
    { id: 1, modalidade: "Natação Adulto", dias: ["Segunda","Quarta","Sexta"], horario: "06:00-06:40", capacidade: 10, turno: "manha" },
    { id: 2, modalidade: "Natação Adulto", dias: ["Segunda","Quarta","Sexta"], horario: "13:30-14:10", capacidade: 10, turno: "tarde" },
    { id: 3, modalidade: "Natação Adulto", dias: ["Segunda","Quarta","Sexta"], horario: "21:20-22:00", capacidade: 10, turno: "noite" },
    { id: 4, modalidade: "Natação Adulto", dias: ["Sexta"], horario: "11:30-12:10", capacidade: 10, turno: "tarde" },
    { id: 5, modalidade: "Natação Adulto", dias: ["Terça","Quinta"], horario: "06:00-06:40", capacidade: 10, turno: "manha" },
    { id: 6, modalidade: "Natação Adulto", dias: ["Terça","Quinta"], horario: "07:30-08:10", capacidade: 10, turno: "manha" },
    { id: 7, modalidade: "Natação Adulto", dias: ["Terça","Quinta"], horario: "15:10-15:50", capacidade: 10, turno: "tarde" },
    { id: 8, modalidade: "Natação Adulto", dias: ["Terça","Quinta"], horario: "17:00-17:40", capacidade: 10, turno: "noite" },
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
    { id: 39, modalidade: "Natação Baby", dias: ["Segunda","Quarta","Sexta"], horario: "17:00-17:30", capacidade: 18, turno: "noite" },
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
    { id: 69, modalidade: "Personal Class", dias: ["Segunda","Terça","Quarta","Quinta","Sexta"], horario: "17:00-18:00", capacidade: 3, turno: "noite" },
    { id: 70, modalidade: "Personal Class", dias: ["Segunda","Terça","Quarta","Quinta","Sexta"], horario: "18:00-19:00", capacidade: 3, turno: "noite" },
    { id: 71, modalidade: "Personal Class", dias: ["Segunda","Terça","Quarta","Quinta","Sexta"], horario: "19:00-20:00", capacidade: 3, turno: "noite" },
    { id: 72, modalidade: "Personal Class", dias: ["Segunda","Terça","Quarta","Quinta","Sexta"], horario: "20:00-21:00", capacidade: 3, turno: "noite" },
    { id: 73, modalidade: "Personal Class", dias: ["Segunda","Terça","Quarta","Quinta","Sexta"], horario: "21:00-22:00", capacidade: 3, turno: "noite" },
    { id: 74, modalidade: "Personal Class", dias: ["Sábado"], horario: "07:00-08:00", capacidade: 3, turno: "manha" },
    { id: 75, modalidade: "Personal Class", dias: ["Sábado"], horario: "08:00-09:00", capacidade: 3, turno: "manha" },
    { id: 76, modalidade: "Personal Class", dias: ["Sábado"], horario: "09:00-10:00", capacidade: 3, turno: "manha" },
    { id: 77, modalidade: "Personal Class", dias: ["Sábado"], horario: "10:00-11:00", capacidade: 3, turno: "manha" },
    { id: 78, modalidade: "Personal Class", dias: ["Sábado"], horario: "11:00-12:00", capacidade: 3, turno: "manha" },
    { id: 79, modalidade: "Natação Infantil Nível 1", dias: ["Terça","Quinta"], horario: "14:50-15:20", capacidade: 10, turno: "tarde" },
    { id: 80, modalidade: "Natação Adulto", dias: ["Sábado"], horario: "07:00-08:00", capacidade: 3, turno: "manha" },
    { id: 81, modalidade: "Personal Class", dias: ["Segunda","Quarta","Sexta"], horario: "14:30-15:30", capacidade: 3, turno: "tarde" }
];

// Corrigir turno baseado no horário (17h em diante = noite)
horariosConfig = horariosConfig.map(h => {
    const horaInicio = parseInt(h.horario.split('-')[0].split(':')[0]);
    if (horaInicio >= 17 && h.turno !== 'sabado') {
        h.turno = "noite";
    }
    return h;
});

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
const MASTER_PASSWORD = "aqua123";

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

function handleKeyPress(e) {
    if (e.key === "Enter") checkPassword();
}

function logout() {
    localStorage.removeItem("aqua_authenticated");
    location.reload();
}

// ============================================================
// FUNÇÕES DE BANCO DE DADOS (SUPABASE)
// ============================================================

async function carregarAlunos() {
    try {
        const { data, error } = await supabaseClient
            .from('alunos')
            .select('*')
            .order('codigo', { ascending: true });
        
        if (error) throw error;
        alunos = data || [];
        studentIdCounter = alunos.length > 0 ? Math.max(...alunos.map(a => a.codigo || 0), 1000) : 1000;
        console.log("✅ Alunos carregados:", alunos.length);
        return alunos;
    } catch (erro) {
        console.error("❌ Erro ao carregar alunos:", erro);
        alunos = [];
        return [];
    }
}

async function salvarAluno(aluno) {
    try {
        if (aluno.id) {
            const { error } = await supabaseClient
                .from('alunos')
                .update(aluno)
                .eq('id', aluno.id);
            if (error) throw error;
        } else {
            const { data, error } = await supabaseClient
                .from('alunos')
                .insert([aluno])
                .select();
            if (error) throw error;
            if (data && data.length > 0) {
                aluno.id = data[0].id;
            }
        }
        console.log("✅ Aluno salvo:", aluno.nome);
        return aluno;
    } catch (erro) {
        console.error("❌ Erro ao salvar aluno:", erro);
        throw erro;
    }
}

async function excluirAluno(id) {
    try {
        const { error } = await supabaseClient
            .from('alunos')
            .delete()
            .eq('id', id);
        if (error) throw error;
        console.log("✅ Aluno excluído:", id);
        return true;
    } catch (erro) {
        console.error("❌ Erro ao excluir aluno:", erro);
        return false;
    }
}

async function carregarExperimentais() {
    try {
        const { data, error } = await supabaseClient
            .from('experimentais')
            .select('*')
            .order('id', { ascending: true });
        
        if (error) throw error;
        experimentais = data || [];
        expIdCounter = experimentais.length > 0 ? Math.max(...experimentais.map(e => e.id || 0), 1000) : 1000;
        console.log("✅ Experimentais carregados:", experimentais.length);
        return experimentais;
    } catch (erro) {
        console.error("❌ Erro ao carregar experimentais:", erro);
        experimentais = [];
        return [];
    }
}

async function salvarExperimental(exp) {
    try {
        if (exp.id) {
            const { error } = await supabaseClient
                .from('experimentais')
                .update(exp)
                .eq('id', exp.id);
            if (error) throw error;
        } else {
            const { data, error } = await supabaseClient
                .from('experimentais')
                .insert([exp])
                .select();
            if (error) throw error;
            if (data && data.length > 0) {
                exp.id = data[0].id;
            }
        }
        return exp;
    } catch (erro) {
        console.error("❌ Erro ao salvar experimental:", erro);
        throw erro;
    }
}

async function excluirExperimental(id) {
    try {
        const { error } = await supabaseClient
            .from('experimentais')
            .delete()
            .eq('id', id);
        if (error) throw error;
        return true;
    } catch (erro) {
        console.error("❌ Erro ao excluir experimental:", erro);
        return false;
    }
}

async function salvarHistoricoExperimental(item) {
    try {
        const { error } = await supabaseClient
            .from('historico_experimentais')
            .insert([item]);
        if (error) throw error;
        console.log("✅ Histórico salvo:", item.nome);
        return true;
    } catch (erro) {
        console.error("❌ Erro ao salvar histórico:", erro);
        return false;
    }
}

async function carregarHistoricoExperimental() {
    try {
        const { data, error } = await supabaseClient
            .from('historico_experimentais')
            .select('*')
            .order('timestamp', { ascending: false });
        
        if (error) throw error;
        console.log("✅ Histórico carregado:", data ? data.length : 0);
        return data || [];
    } catch (erro) {
        console.error("❌ Erro ao carregar histórico:", erro);
        return [];
    }
}

async function carregarTurmas() {
    try {
        const { data, error } = await supabaseClient
            .from('config')
            .select('valor')
            .eq('chave', 'turmas')
            .single();
        
        if (error) {
            await supabaseClient
                .from('config')
                .insert([{ chave: 'turmas', valor: JSON.stringify(horariosConfig) }]);
            console.log("✅ Configuração de turmas criada");
            return horariosConfig;
        }
        
        if (data && data.valor) {
            const turmas = typeof data.valor === 'string' ? JSON.parse(data.valor) : data.valor;
            if (turmas && turmas.length > 0) {
                horariosConfig = turmas;
                console.log("✅ Turmas carregadas:", horariosConfig.length);
            }
        }
        return horariosConfig;
    } catch (erro) {
        console.error("❌ Erro ao carregar turmas:", erro);
        return horariosConfig;
    }
}

async function salvarTurmas() {
    try {
        const { error } = await supabaseClient
            .from('config')
            .update({ 
                valor: JSON.stringify(horariosConfig),
                ultima_atualizacao: new Date().toISOString()
            })
            .eq('chave', 'turmas');
        
        if (error) throw error;
        console.log("✅ Turmas salvas:", horariosConfig.length);
        return true;
    } catch (erro) {
        console.error("❌ Erro ao salvar turmas:", erro);
        return false;
    }
}

// ============================================================
// CARREGAR DADOS
// ============================================================
async function carregarDados() {
    const statusEl = document.getElementById('googleStatus');
    if (statusEl) statusEl.innerText = '🔄 Sincronizando...';
    document.getElementById('loadingBanner').style.display = 'block';

    try {
        await carregarTurmas();
        await carregarAlunos();
        await carregarExperimentais();
        
        if (statusEl) { statusEl.innerText = '✅ Online'; statusEl.classList.add('online'); }
    } catch (erro) {
        console.error("Erro ao carregar dados:", erro);
        if (statusEl) statusEl.innerText = '⚠️ Modo Local';
    } finally {
        document.getElementById('loadingBanner').style.display = 'none';
        renderizarTudo();
        renderPainelExperimentaisHoje();
    }
}

// ============================================================
// FUNÇÕES DO SISTEMA
// ============================================================

function formatarData() {
    const h = new Date();
    return `${String(h.getDate()).padStart(2,'0')}/${String(h.getMonth()+1).padStart(2,'0')}`;
}

function formatarDataISO() {
    const h = new Date();
    return `${h.getFullYear()}-${String(h.getMonth()+1).padStart(2,'0')}-${String(h.getDate()).padStart(2,'0')}`;
}

function formatarDataBR(dataISO) {
    if (!dataISO) return '—';
    const partes = dataISO.split('-');
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
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

function badgeStatus(status) {
    if (status === 'PAUSADO') return `<span style="background:#fef3c7;color:#b45309;padding:2px 8px;border-radius:12px;font-size:0.75rem;font-weight:bold;">⏸ PAUSADO</span>`;
    if (status === 'TRANCADO') return `<span style="background:#fee2e2;color:#b91c1c;padding:2px 8px;border-radius:12px;font-size:0.75rem;font-weight:bold;">🔒 TRANCADO</span>`;
    return `<span style="background:#dcfce7;color:#15803d;padding:2px 8px;border-radius:12px;font-size:0.75rem;font-weight:bold;">🟢 ATIVO</span>`;
}

function alunoContaOcupacao(a) {
    return a.status !== 'PAUSADO' && a.status !== 'TRANCADO';
}

// ============================================================
// CONTAGEM DE ALUNOS
// ============================================================
function contarAlunosUnicos() {
    const ativos = alunos.filter(a => a.status !== 'TRANCADO' && a.status !== 'PAUSADO');
    return ativos.length;
}

function contarMatriculasPorTurno() {
    let manha = 0, tarde = 0, noite = 0, sabado = 0;
    
    alunos.filter(a => a.status !== 'TRANCADO' && a.status !== 'PAUSADO').forEach(a => {
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
    
    return { manha, tarde, noite, sabado };
}

function atualizarWidgets() {
    const totalAlunos = contarAlunosUnicos();
    
    let vencidos = 0, emDia = 0;
    alunos.forEach(a => {
        if (a.status === 'TRANCADO' || a.status === 'PAUSADO') return;
        if (verificarVencimento(a.vencimento).vencido) vencidos++;
        else emDia++;
    });

    const matriculas = contarMatriculasPorTurno();
    const totalMatriculas = matriculas.manha + matriculas.tarde + matriculas.noite + matriculas.sabado;
    
    const capTotal = horariosConfig.reduce((s, h) => s + h.capacidade, 0);
    const pctOcupacao = capTotal > 0 ? Math.round((totalMatriculas / capTotal) * 100) : 0;

    const widget = document.getElementById('macroStatsWidget');
    if (!widget) return;

    widget.innerHTML = `
        <div class="widget aluno-counter"><div class="val">${totalAlunos}</div><div class="lbl">🎯 Total Alunos</div><div class="sub">Alunos únicos ativos</div></div>
        <div class="widget vencidos-border"><div class="val" style="color:#ef4444;">${vencidos}</div><div class="lbl">⚠️ Vencidos</div><div class="sub">Planos Atrasados</div></div>
        <div class="widget emdia-border"><div class="val" style="color:#10b981;">${emDia}</div><div class="lbl">✅ Em Dia</div><div class="sub">Planos Ativos</div></div>
        <div class="widget"><div class="val">${matriculas.manha}</div><div class="lbl">🌅 Manhã</div><div class="sub">Matrículas</div></div>
        <div class="widget"><div class="val">${matriculas.tarde}</div><div class="lbl">☀️ Tarde</div><div class="sub">Matrículas</div></div>
        <div class="widget"><div class="val">${matriculas.noite}</div><div class="lbl">🌙 Noite</div><div class="sub">Matrículas</div></div>
        <div class="widget"><div class="val">${matriculas.sabado}</div><div class="lbl">📅 Sábados</div><div class="sub">Matrículas</div></div>
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
// FUNÇÃO PARA ATUALIZAR DROPDOWNS
// ============================================================
function atualizarDropdownsModalidade() {
    const selects = document.querySelectorAll('.modalidade-select');
    selects.forEach(select => {
        const valorAtual = select.value;
        select.innerHTML = modalidadesDisponiveis.map(m => `<option value="${m}" ${valorAtual === m ? 'selected' : ''}>${m}</option>`).join('');
    });
}

// ============================================================
// RENDERIZAÇÃO DOS CARDS
// ============================================================
function renderizarTudo() {
    const grid = document.getElementById('cardsGrid');
    if (!grid) return;
    atualizarWidgets();

    const query = document.getElementById('searchBar')?.value.toLowerCase() || '';
    const diasFiltro = activeFilters.dias;

    let filtrados = horariosConfig.filter(h => {
        const matchTurno = activeFilters.turno === 'TODOS' || h.turno === activeFilters.turno;
        const matchMod = activeFilters.modalidade === 'TODAS' || h.modalidade === activeFilters.modalidade;
        let matchDia = true;
        if (diasFiltro.length > 0) matchDia = diasFiltro.some(d => h.dias.includes(d));
        const diasRef = diasFiltro.length > 0 ? diasFiltro : null;
        const qtd = diasRef ? getOcupacaoHorarioDia(h.id, diasRef) : getOcupacaoHorarioDia(h.id, null);
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
            const matchAl = getAlunosPorHorarioDia(h.id, null).some(a => String(a.nome).toLowerCase().includes(query));
            return matchHor || matchAl;
        });
    }

    if (diasFiltro.length > 0) {
        filtrados.sort((a, b) => horarioParaMinutos(a.horario) - horarioParaMinutos(b.horario));
        const hojeStr = diasPtBr[new Date().getDay()];
        const isDiaHoje = diasFiltro.length === 1 && diasFiltro[0] === hojeStr;
        if (isDiaHoje) {
            const agora = new Date();
            const minAtuais = agora.getHours() * 60 + agora.getMinutes();
            filtrados = filtrados.filter(h => {
                const partesFim = h.horario.split('-')[1]?.split(':').map(Number);
                const minFim = partesFim ? partesFim[0] * 60 + partesFim[1] : 9999;
                return minAtuais <= minFim;
            });
        }
    }

    if (filtrados.length === 0) {
        grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px;color:#94a3b8;font-weight:600;">🔍 Nenhum horário atende aos filtros.</div>';
        return;
    }

    const agora = new Date();
    const minAtuais = agora.getHours() * 60 + agora.getMinutes();
    const hojeStr = diasPtBr[agora.getDay()];

    grid.innerHTML = filtrados.map(h => {
        const diasRef = diasFiltro.length > 0 ? diasFiltro : null;
        const qtd = diasRef ? getOcupacaoHorarioDia(h.id, diasRef) : getOcupacaoHorarioDia(h.id, null);
        const pct = Math.min((qtd / h.capacidade) * 100, 100);
        const corBarra = pct >= 100 ? '#ef4444' : (pct >= 70 ? '#f59e0b' : '#10b981');
        const expQtd = experimentais.filter(e => e.horario_id === h.id && e.status === 'agendado').length;

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
            }
        }

        const diasExibir = diasFiltro.length > 0 ? h.dias.filter(d => diasFiltro.includes(d)) : h.dias;

        return `
            <div class="card" onclick="abrirModalHorario(${h.id})" style="${cardStyle}">
                <div class="card-header">
                    <h3><span>${h.modalidade}</span><span class="horario">${h.horario}</span>${badgeTempo}</h3>
                    <div style="display:flex;justify-content:space-between;align-items:center;">
                        <div class="dias">📅 ${diasExibir.join(' • ')}</div>
                        <button onclick="event.stopPropagation(); abrirEdicaoTurma(${h.id})" style="background:none;border:1px solid #cbd5e1;border-radius:6px;padding:3px 8px;font-size:0.75rem;cursor:pointer;">✏️ Editar Turma</button>
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
// OCUPAÇÃO
// ============================================================
function getAlunosPorHorarioDia(horarioId, diaFiltro) {
    const horario = horariosConfig.find(h => h.id == horarioId);
    if (!horario) return [];

    return alunos.filter(aluno => {
        if (diaFiltro && diaFiltro !== 'TODOS' && diaFiltro.length > 0) {
            const diasAtivos = Array.isArray(diaFiltro) ? diaFiltro : [diaFiltro];
            return diasAtivos.some(dia => {
                if (!horario.dias.includes(dia)) return false;
                const campo = diasMap[dia];
                return aluno[campo] == horarioId;
            });
        } else {
            for (const dia of horario.dias) {
                const campo = diasMap[dia];
                if (aluno[campo] == horarioId) {
                    return true;
                }
            }
            return false;
        }
    });
}

function getOcupacaoHorarioDia(horarioId, diaFiltro) {
    const alunosCount = getAlunosPorHorarioDia(horarioId, diaFiltro).filter(alunoContaOcupacao).length;
    const hojeStr = formatarDataISO();
    
    let expCount = 0;
    if (diaFiltro && diaFiltro.length > 0) {
        const diasFiltroArray = Array.isArray(diaFiltro) ? diaFiltro : [diaFiltro];
        expCount = experimentais.filter(e => {
            if (e.horario_id !== horarioId) return false;
            if (e.status !== 'agendado') return false;
            if (e.dataAgendada && e.dataAgendada !== hojeStr) return false;
            return diasFiltroArray.includes(e.dia);
        }).length;
    } else {
        expCount = experimentais.filter(e => {
            if (e.horario_id !== horarioId) return false;
            if (e.status !== 'agendado') return false;
            if (e.dataAgendada && e.dataAgendada !== hojeStr) return false;
            return true;
        }).length;
    }
    
    return alunosCount + expCount;
}

function gerarCardsDisponibilidade(horario, diasFiltro) {
    const diasRef = diasFiltro && diasFiltro.length > 0 ? diasFiltro : horario.dias;
    const cards = diasRef.map(dia => {
        const ocupacao = getOcupacaoHorarioDia(horario.id, [dia]);
        const capacidade = horario.capacidade;
        const pct = (ocupacao / capacidade) * 100;
        let cor = '#10b981', bg = '#dcfce7';
        if (pct >= 100) { cor = '#ef4444'; bg = '#fee2e2'; }
        else if (pct >= 70) { cor = '#f59e0b'; bg = '#fef3c7'; }
        const diaAbrev = dia.substring(0,3).toUpperCase();
        return `<span style="background:${bg};color:${cor};padding:6px 12px;border-radius:20px;font-size:0.8rem;font-weight:bold;">${diaAbrev}: ${ocupacao}/${capacidade}</span>`;
    }).join('');
    return `<div style="display:flex;gap:8px;flex-wrap:wrap;margin:10px 0;padding:10px;background:#f8fafc;border-radius:12px;">${cards}</div>`;
}

// ============================================================
// FILTROS
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
        const hojeIdx = new Date().getDay();
        const hojeStr = diasPtBr[hojeIdx];
        activeFilters.dias = (hojeStr !== 'Domingo') ? [hojeStr] : [];
        btn.parentElement.querySelectorAll('button').forEach(x => x.classList.remove('active'));
        btn.classList.add('active');
    } else {
        btn.parentElement.querySelector('button:first-child').classList.remove('active');
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
// EDIÇÃO DE TURMA
// ============================================================
function abrirEdicaoTurma(hId) {
    const h = horariosConfig.find(x => x.id === hId);
    if (!h) return;
    
    const modal = document.getElementById('globalSuperModal');
    const titulo = document.getElementById('superModalTitulo');
    const corpo = document.getElementById('superModalCorpo');
    
    titulo.innerHTML = `✏️ Editar Turma: ${h.modalidade}`;
    
    const diasSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const diasCheckboxHtml = diasSemana.map(dia => `
        <label style="display:inline-flex;align-items:center;gap:6px;margin-right:10px;margin-bottom:8px;background:#f1f5f9;padding:6px 14px;border-radius:30px;cursor:pointer;">
            <input type="checkbox" value="${dia}" ${h.dias.includes(dia) ? 'checked' : ''}> ${dia}
        </label>
    `).join('');
    
    corpo.innerHTML = `
        <div style="max-width:550px;margin:0 auto;">
            <div style="margin-bottom:15px;">
                <label style="font-weight:bold;display:block;margin-bottom:5px;">🏊 Modalidade:</label>
                <select id="editTurmaModalidade" class="form-select-field modalidade-select" style="width:100%;padding:10px;">
                    ${modalidadesDisponiveis.map(m => `<option value="${m}" ${h.modalidade === m ? 'selected' : ''}>${m}</option>`).join('')}
                </select>
            </div>
            
            <div style="margin-bottom:15px;">
                <label style="font-weight:bold;display:block;margin-bottom:5px;">⏰ HORÁRIO:</label>
                <input type="text" id="editTurmaHorario" class="search-input-field" value="${h.horario}" style="width:100%;padding:10px;font-size:1rem;" placeholder="08:00-09:00">
                <small style="color:#64748b;">Formato: HH:MM-HH:MM</small>
            </div>
            
            <div style="margin-bottom:15px;">
                <label style="font-weight:bold;display:block;margin-bottom:8px;">📅 Dias da Semana:</label>
                <div style="display:flex;flex-wrap:wrap;gap:6px;">${diasCheckboxHtml}</div>
            </div>
            
            <div style="margin-bottom:15px;">
                <label style="font-weight:bold;display:block;margin-bottom:5px;">👥 Capacidade (vagas):</label>
                <input type="number" id="editTurmaCapacidade" class="search-input-field" value="${h.capacidade}" min="1" max="100" style="width:100%;padding:10px;">
            </div>
            
            <div style="margin-bottom:20px;">
                <label style="font-weight:bold;display:block;margin-bottom:5px;">🌙 Turno:</label>
                <select id="editTurmaTurno" class="form-select-field" style="width:100%;padding:10px;">
                    <option value="manha" ${h.turno === 'manha' ? 'selected' : ''}>🌅 Manhã</option>
                    <option value="tarde" ${h.turno === 'tarde' ? 'selected' : ''}>☀️ Tarde</option>
                    <option value="noite" ${h.turno === 'noite' ? 'selected' : ''}>🌙 Noite</option>
                    <option value="sabado" ${h.turno === 'sabado' ? 'selected' : ''}>📅 Sábado</option>
                </select>
            </div>
            
            <div style="margin-bottom:20px;padding:12px;background:#fff3e0;border-radius:8px;color:#b45309;font-size:0.85rem;border-left:3px solid #f59e0b;">
                ⚠️ <strong>Atenção:</strong> Alterar horário ou dias pode afetar a matrícula dos alunos!
            </div>
            
            <div class="form-actions-row" style="display:flex;gap:10px;justify-content:space-between;flex-wrap:wrap;">
                <button onclick="excluirTurmaPermanente(${h.id})" style="background:#fee2e2;color:#b91c1c;border:none;padding:10px 20px;border-radius:8px;cursor:pointer;font-weight:bold;">🗑️ Excluir Turma</button>
                <div style="display:flex;gap:8px;">
                    <button class="btn-save-modal" onclick="salvarEdicaoCompletaTurma(${h.id})" style="background:#006994;color:white;padding:10px 24px;border-radius:8px;border:none;cursor:pointer;font-weight:bold;">💾 Salvar</button>
                    <button class="btn-discard-modal" onclick="fecharSuperModal()" style="background:#e2e8f0;border:none;padding:10px 20px;border-radius:8px;cursor:pointer;">Cancelar</button>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

function salvarEdicaoCompletaTurma(hId) {
    const h = horariosConfig.find(x => x.id === hId);
    if (!h) return;
    
    const novaModalidade = document.getElementById('editTurmaModalidade').value;
    const novoHorario = document.getElementById('editTurmaHorario').value.trim();
    const novaCapacidade = parseInt(document.getElementById('editTurmaCapacidade').value);
    let novoTurno = document.getElementById('editTurmaTurno').value;
    
    const novosDias = [];
    document.querySelectorAll('#globalSuperModal input[type="checkbox"]').forEach(cb => {
        if (cb.checked && ['Segunda','Terça','Quarta','Quinta','Sexta','Sábado'].includes(cb.value)) {
            novosDias.push(cb.value);
        }
    });
    
    if (!novoHorario) { alert('⚠️ Digite o horário!'); return; }
    if (!novoHorario.match(/^\d{2}:\d{2}-\d{2}:\d{2}$/)) {
        alert('⚠️ Formato inválido! Use HH:MM-HH:MM');
        return;
    }
    if (novosDias.length === 0) { alert('⚠️ Selecione pelo menos um dia!'); return; }
    if (!novaCapacidade || novaCapacidade < 1) { alert('⚠️ Capacidade inválida!'); return; }
    
    const horaInicio = parseInt(novoHorario.split('-')[0].split(':')[0]);
    if (horaInicio >= 17 && novoTurno !== 'sabado') novoTurno = 'noite';
    else if (horaInicio >= 12 && horaInicio < 17) novoTurno = 'tarde';
    else if (horaInicio >= 6 && horaInicio < 12) novoTurno = 'manha';
    
    h.modalidade = novaModalidade;
    h.horario = novoHorario;
    h.dias = novosDias;
    h.capacidade = novaCapacidade;
    h.turno = novoTurno;
    
    salvarTurmas();
    renderizarTudo();
    fecharSuperModal();
    mostrarToast(`✅ Turma "${novaModalidade}" (${novoHorario}) atualizada!`);
}

function excluirTurmaPermanente(hId) {
    const turma = horariosConfig.find(h => h.id === hId);
    if (!turma) return;
    
    const alunosMatriculados = alunos.filter(a => {
        return turma.dias.some(dia => a[diasMap[dia]] == hId);
    });
    
    let msg = `⚠️ EXCLUIR TURMA PERMANENTEMENTE?\n\n📌 ${turma.modalidade}\n⏰ ${turma.horario}\n📅 Dias: ${turma.dias.join(', ')}\n\n`;
    if (alunosMatriculados.length > 0) {
        msg += `🔴 ATENÇÃO: ${alunosMatriculados.length} aluno(s) estão matriculados!\n\n`;
    }
    msg += `Digite "SIM" para confirmar.`;
    
    const confirmText = prompt(msg);
    if (confirmText !== "SIM") { alert("❌ Cancelado!"); return; }
    
    alunos.forEach(a => {
        turma.dias.forEach(dia => {
            const campo = diasMap[dia];
            if (a[campo] == hId) a[campo] = '';
        });
        salvarAluno(a);
    });
    
    const index = horariosConfig.findIndex(h => h.id === hId);
    if (index !== -1) horariosConfig.splice(index, 1);
    
    salvarTurmas();
    renderizarTudo();
    fecharSuperModal();
    mostrarToast(`✅ Turma "${turma.modalidade}" excluída!`);
}

// ============================================================
// CRIAR NOVA TURMA
// ============================================================
function abrirCriarTurma() {
    const modal = document.getElementById('globalSuperModal');
    const titulo = document.getElementById('superModalTitulo');
    const corpo = document.getElementById('superModalCorpo');
    
    titulo.innerHTML = '➕ Criar Nova Turma';
    corpo.innerHTML = `
        <div style="max-width:500px;margin:0 auto;">
            <div style="margin-bottom:15px;">
                <label style="font-weight:bold;display:block;margin-bottom:5px;">Modalidade:</label>
                <select id="novaModalidade" class="form-select-field modalidade-select" style="width:100%;">
                    ${modalidadesDisponiveis.map(m => `<option value="${m}">${m}</option>`).join('')}
                </select>
                <button onclick="abrirCriarModalidade()" style="margin-top:5px;background:#e0f2fe;border:none;padding:5px 10px;border-radius:6px;cursor:pointer;font-size:0.75rem;">➕ Criar nova modalidade</button>
            </div>
            
            <div style="margin-bottom:15px;">
                <label style="font-weight:bold;display:block;margin-bottom:5px;">Horário (ex: 08:00-09:00):</label>
                <input type="text" id="novoHorario" class="search-input-field" placeholder="08:00-09:00" style="width:100%;">
            </div>
            
            <div style="margin-bottom:15px;">
                <label style="font-weight:bold;display:block;margin-bottom:5px;">Dias da Semana:</label>
                <div class="dias-checkbox-group">
                    <label><input type="checkbox" value="Segunda"> Segunda</label>
                    <label><input type="checkbox" value="Terça"> Terça</label>
                    <label><input type="checkbox" value="Quarta"> Quarta</label>
                    <label><input type="checkbox" value="Quinta"> Quinta</label>
                    <label><input type="checkbox" value="Sexta"> Sexta</label>
                    <label><input type="checkbox" value="Sábado"> Sábado</label>
                </div>
            </div>
            
            <div style="margin-bottom:15px;">
                <label style="font-weight:bold;display:block;margin-bottom:5px;">Capacidade (vagas):</label>
                <input type="number" id="novaCapacidade" class="search-input-field" value="10" min="1" max="100" style="width:100%;">
            </div>
            
            <div style="margin-bottom:15px;">
                <label style="font-weight:bold;display:block;margin-bottom:5px;">Turno:</label>
                <select id="novoTurno" class="form-select-field" style="width:100%;">
                    <option value="manha">🌅 Manhã (até 11:59)</option>
                    <option value="tarde">☀️ Tarde (12:00 - 16:59)</option>
                    <option value="noite">🌙 Noite (17:00 em diante)</option>
                    <option value="sabado">📅 Sábado</option>
                </select>
            </div>
            
            <div class="form-actions-row" style="margin-top:20px;">
                <button class="btn-save-modal" onclick="salvarNovaTurma()">💾 Criar Turma</button>
                <button class="btn-discard-modal" onclick="fecharSuperModal()">Cancelar</button>
            </div>
        </div>
    `;
    
    const horarioInput = document.getElementById('novoHorario');
    const turnoSelect = document.getElementById('novoTurno');
    if (horarioInput && turnoSelect) {
        horarioInput.addEventListener('input', function() {
            const hora = parseInt(this.value.split('-')[0]?.split(':')[0] || 0);
            if (hora >= 17) turnoSelect.value = 'noite';
            else if (hora >= 12) turnoSelect.value = 'tarde';
            else if (hora >= 6) turnoSelect.value = 'manha';
        });
    }
    
    modal.classList.add('active');
}

function salvarNovaTurma() {
    const modalidade = document.getElementById('novaModalidade').value;
    const horario = document.getElementById('novoHorario').value.trim();
    const capacidade = parseInt(document.getElementById('novaCapacidade').value);
    const turno = document.getElementById('novoTurno').value;
    
    const diasSelecionados = [];
    document.querySelectorAll('.dias-checkbox-group input[type="checkbox"]:checked').forEach(cb => {
        diasSelecionados.push(cb.value);
    });
    
    if (!horario) { alert('⚠️ Digite o horário!'); return; }
    if (!horario.match(/^\d{2}:\d{2}-\d{2}:\d{2}$/)) { 
        alert('⚠️ Formato inválido! Use HH:MM-HH:MM'); 
        return; 
    }
    if (diasSelecionados.length === 0) { alert('⚠️ Selecione pelo menos um dia!'); return; }
    if (!capacidade || capacidade < 1) { alert('⚠️ Capacidade inválida!'); return; }
    
    const novoId = Math.max(...horariosConfig.map(h => h.id), 0) + 1;
    
    const novaTurma = {
        id: novoId,
        modalidade: modalidade,
        dias: diasSelecionados,
        horario: horario,
        capacidade: capacidade,
        turno: turno
    };
    
    horariosConfig.push(novaTurma);
    salvarTurmas();
    renderizarTudo();
    fecharSuperModal();
    mostrarToast(`✅ Turma de ${modalidade} (${horario}) criada!`);
}

// ============================================================
// MODAL DA TURMA
// ============================================================
function abrirModalHorario(horarioId) {
    const horario = horariosConfig.find(h => h.id === horarioId);
    if (!horario) return;

    const diasFiltro = activeFilters.dias;
    const diasRef = diasFiltro.length > 0 ? diasFiltro : null;
    const alunosMatriculados = getAlunosPorHorarioDia(horarioId, diasRef);
    const listaExp = experimentais.filter(e => e.horario_id === horarioId && e.status === 'agendado');

    const modal = document.getElementById('globalSuperModal');
    const titulo = document.getElementById('superModalTitulo');
    const corpo = document.getElementById('superModalCorpo');
    if (!modal || !corpo || !titulo) return;

    const labelDia = diasFiltro.length > 0 ? `— ${diasFiltro.join(' + ')}` : '';
    titulo.innerHTML = `🏊‍♂️ <span id="nomeTurmaDisplay">${horario.modalidade}</span> (${horario.horario}) ${labelDia} <button onclick="toggleEditNomeTurma(${horarioId})" style="background:none;border:1px solid #cbd5e1;border-radius:6px;padding:2px 8px;font-size:0.75rem;cursor:pointer;">✏️</button>`;

    const capOcup = alunosMatriculados.filter(alunoContaOcupacao).length + listaExp.length;
    const cardsDisponibilidade = gerarCardsDisponibilidade(horario, diasRef || horario.dias);

    corpo.innerHTML = `
        <div style="margin-bottom:20px;background:#e0f2fe;padding:15px;border-radius:10px;border-left:5px solid #006994;color:#0369a1;font-weight:600;">
            ${diasFiltro.length > 0 ? `📅 Exibindo: <strong>${diasFiltro.join(' + ')}</strong> | 👥 Ocupação: ${capOcup}/${horario.capacidade}` : `📅 Dias: ${horario.dias.join(', ')} | 👥 Lotação: ${capOcup}/${horario.capacidade}`}
        </div>
        ${cardsDisponibilidade}
        <div id="centralFormEdicaoContainer" style="display:none;background:#f8fafc;padding:22px;border-radius:12px;margin-bottom:25px;border:2px dashed #006994;"></div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:flex-start;">
            <div style="background:white;border:1px solid #cbd5e1;border-radius:12px;padding:20px;">
                <h3 style="font-size:1.2rem;color:#006994;border-bottom:3px solid #006994;padding-bottom:8px;margin-bottom:15px;">👥 Alunos (${alunosMatriculados.length})</h3>
                <div style="max-height:450px;overflow-y:auto;">
                    ${alunosMatriculados.map(a => {
                        const fin = verificarVencimento(a.vencimento);
                        const dateClean = limparData(a.vencimento);
                        const statusAtual = a.status || 'ATIVO';
                        const obsHtml = a.observacao ? `<div style="background:#fffbeb;border:1px solid #fde68a;border-radius:6px;padding:6px 10px;font-size:0.82rem;color:#78350f;margin-top:5px;">📝 ${a.observacao}</div>` : '';
                        const diasDoAluno = horario.dias.filter(dia => a[diasMap[dia]] == horarioId).map(d => d.substring(0,3)).join(', ');
                        const botoesExcluir = horario.dias.filter(dia => a[diasMap[dia]] == horarioId).map(dia => `<button onclick="excluirAlunoDaTurma(${a.id}, ${horarioId}, '${dia}')" style="background:#fee2e2;color:#b91c1c;border:none;padding:4px 8px;border-radius:6px;font-size:0.7rem;cursor:pointer;" title="Remover da ${dia}">🗑️ ${dia.substring(0,3)}</button>`).join('');
                        return `
                            <div style="margin-bottom:10px;border-bottom:1px solid #e2e8f0;padding-bottom:10px;">
                                <div style="display:flex;justify-content:space-between;align-items:flex-start;">
                                    <div><div style="font-size:1rem;font-weight:bold;">#${a.codigo} - ${a.nome} <span style="font-weight:normal;font-size:0.75rem;background:#e0f2fe;border-radius:8px;padding:1px 7px;">📅 ${diasDoAluno || '—'}</span></div>
                                    <div style="font-size:0.85rem;">📞 ${a.telefone} | Venc: ${dateClean}</div>
                                    <div>${badgeStatus(statusAtual)}</div>${obsHtml}</div>
                                    <span class="badge ${fin.vencido ? 'badge-vencido' : 'badge-emdia'}">${fin.texto}</span>
                                </div>
                                <div style="display:flex;gap:6px;justify-content:flex-end;flex-wrap:wrap;margin-top:8px;">
                                    ${botoesExcluir}
                                    <a href="https://wa.me/55${String(a.telefone).replace(/\D/g,'')}" target="_blank" class="btn-whatsapp-speed">💬 WhatsApp</a>
                                    <button onclick="abrirEdicaoCompletaInline(${a.id},${horarioId})" style="background:#e0f2fe;color:#0369a1;border:none;padding:6px 12px;border-radius:6px;font-weight:bold;font-size:0.75rem;cursor:pointer;">✏️ Editar</button>
                                    <button onclick="abrirModalObs(${a.id},${horarioId})" style="background:#fef9c3;color:#854d0e;border:none;padding:6px 12px;border-radius:6px;font-weight:bold;font-size:0.75rem;cursor:pointer;">📝 Obs</button>
                                    <button onclick="alternarStatusAluno(${a.id},${horarioId})" style="background:#f1f5f9;color:#334155;border:none;padding:6px 12px;border-radius:6px;font-weight:bold;font-size:0.75rem;cursor:pointer;">🔄 Status</button>
                                    <button onclick="excluirAlunoPermanente(${a.id},${horarioId})" style="background:#fee2e2;color:#b91c1c;border:none;padding:6px 12px;border-radius:6px;font-weight:bold;font-size:0.75rem;cursor:pointer;">🗑️ Excluir</button>
                                </div>
                            </div>
                        `;
                    }).join('') || '<p style="text-align:center;padding:20px;">Nenhum aluno.</p>'}
                </div>
            </div>
            <div style="background:#fffbeb;border:1px solid #fde68a;border-radius:12px;padding:20px;">
                <h3 style="font-size:1.2rem;color:#b45309;border-bottom:3px solid #b45309;padding-bottom:8px;margin-bottom:15px;">🧪 Experimentais (${listaExp.length})</h3>
                <div style="max-height:450px;overflow-y:auto;">
                    ${listaExp.map(exp => {
                        const faltas = historicoFaltasExperimentais[exp.telefone] || 0;
                        const alerta = faltas >= 2 ? `<div style="background:#fee2e2;color:#b91c1c;font-size:0.75rem;padding:4px;border-radius:5px;margin-top:4px;">⚠️ Faltou ${faltas}x antes</div>` : '';
                        return `
                            <div style="background:white;padding:12px;border-radius:10px;border:1px solid #fde68a;margin-bottom:10px;">
                                <div><strong>${exp.nome}</strong><div style="font-size:0.85rem;">📞 ${exp.telefone}</div>${alerta}<div style="font-size:0.8rem;color:#0369a1;">📅 ${formatarDataBR(exp.dataAgendada)} | ${horariosConfig.find(h=>h.id===exp.horario_id)?.horario || '??'}</div></div>
                                <div style="display:flex;gap:6px;justify-content:flex-end;margin-top:8px;">
                                    <a href="https://wa.me/55${String(exp.telefone).replace(/\D/g,'')}" target="_blank" class="btn-whatsapp-speed">💬 WA</a>
                                    <button onclick="marcarPresencaExp(${exp.id},'compareceu',${horarioId})" style="background:#10b981;color:white;border:none;padding:6px 12px;border-radius:6px;cursor:pointer;">✔️ Veio</button>
                                    <button onclick="marcarPresencaExp(${exp.id},'nao_compareceu',${horarioId})" style="background:#ef4444;color:white;border:none;padding:6px 12px;border-radius:6px;cursor:pointer;">❌ Faltou</button>
                                </div>
                            </div>
                        `;
                    }).join('') || '<p style="text-align:center;padding:20px;">Sem experimentais.</p>'}
                </div>
            </div>
        </div>
    `;
    modal.classList.add('active');
}

function toggleEditNomeTurma(hId) {
    const h = horariosConfig.find(x => x.id === hId);
    if (!h) return;
    const span = document.getElementById('nomeTurmaDisplay');
    if (!span) return;
    if (span.querySelector('input')) {
        const input = span.querySelector('input');
        h.modalidade = input.value.trim() || h.modalidade;
        renderizarTudo();
        abrirModalHorario(hId);
        mostrarToast('✅ Nome da turma atualizado!');
    } else {
        span.innerHTML = `<input type="text" value="${h.modalidade}" style="font-size:0.95rem;padding:4px 8px;border-radius:6px;border:2px solid #006994;width:260px;" onkeydown="if(event.key==='Enter')toggleEditNomeTurma(${hId})" autofocus>`;
        span.querySelector('input').focus();
    }
}

// ============================================================
// EXCLUIR ALUNO DA TURMA
// ============================================================
async function excluirAlunoDaTurma(id, horarioId, dia) {
    const aluno = alunos.find(a => a.id == id);
    if (!aluno) return;
    if (!confirm(`Remover ${aluno.nome} da turma de ${dia}?`)) return;
    const campo = diasMap[dia];
    if (aluno[campo] == horarioId) aluno[campo] = '';
    await salvarAluno(aluno);
    renderizarTudo();
    abrirModalHorario(horarioId);
    mostrarToast(`✅ ${aluno.nome} removido da ${dia}`);
}

// ============================================================
// EXCLUIR ALUNO PERMANENTEMENTE
// ============================================================
async function excluirAlunoPermanente(id, hId) {
    const aluno = alunos.find(a => a.id == id);
    if (!aluno) { mostrarToast('❌ Aluno não encontrado!', 'erro'); return; }
    const confirmado = confirm(`⚠️ EXCLUIR PERMANENTEMENTE?\n\n#${aluno.codigo} - ${aluno.nome}\n\nEsta ação NÃO pode ser desfeita!`);
    if (!confirmado) return;
    const confirmText = prompt(`Digite "SIM" para confirmar exclusão de ${aluno.nome}:`);
    if (confirmText !== "SIM") { alert("❌ Cancelado!"); return; }
    try {
        await excluirAluno(aluno.id);
        const index = alunos.findIndex(a => a.id == id);
        if (index !== -1) alunos.splice(index, 1);
        renderizarTudo();
        renderPainelExperimentaisHoje();
        fecharSuperModal();
        mostrarToast(`✅ ${aluno.nome} excluído!`);
    } catch (erro) { mostrarToast(`❌ Erro: ${erro.message}`, 'erro'); }
}

// ============================================================
// OBSERVAÇÕES
// ============================================================
function abrirModalObs(id, hId) {
    const a = alunos.find(al => al.id == id);
    if (!a) return;
    const modal = document.getElementById('globalSuperModal');
    const titulo = document.getElementById('superModalTitulo');
    const corpo = document.getElementById('superModalCorpo');
    titulo.innerHTML = `📝 Observações — ${a.nome}`;
    corpo.innerHTML = `
        <div style="max-width:500px;"><textarea id="obsTexto" style="width:100%;min-height:120px;padding:12px;border-radius:8px;border:1px solid #cbd5e1;">${a.observacao || ''}</textarea>
        <div class="form-actions-row" style="margin-top:12px;"><button class="btn-save-modal" onclick="salvarObservacao(${id},${hId || 'null'})">💾 Salvar</button><button class="btn-discard-modal" onclick="${hId ? `abrirModalHorario(${hId})` : 'fecharSuperModal()'}">⬅️ Voltar</button></div></div>
    `;
    modal.classList.add('active');
}

async function salvarObservacao(id, hId) {
    const a = alunos.find(al => al.id == id);
    if (!a) return;
    a.observacao = document.getElementById('obsTexto').value.trim();
    await salvarAluno(a);
    if (hId) abrirModalHorario(hId);
    else { fecharSuperModal(); renderStudentTableSuper(); }
}

function alternarStatusAluno(id, hId) {
    const a = alunos.find(al => al.id == id);
    if (!a) return;
    const ciclo = ['ATIVO', 'PAUSADO', 'TRANCADO'];
    const atual = a.status || 'ATIVO';
    const proximo = ciclo[(ciclo.indexOf(atual) + 1) % ciclo.length];
    a.status = proximo;
    salvarAluno(a);
    renderizarTudo();
    if (hId) abrirModalHorario(hId);
    mostrarToast(`✅ Status → ${proximo}`);
}

// ============================================================
// PAINEL EXPERIMENTAIS DO DIA
// ============================================================
function renderPainelExperimentaisHoje() {
    const painel = document.getElementById('painelExpHoje');
    if (!painel) return;
    const hojeStr = formatarDataISO();
    const expHoje = experimentais.filter(e => {
        if (e.status !== 'agendado') return false;
        if (e.dataAgendada && e.dataAgendada !== hojeStr) return false;
        const h = horariosConfig.find(hc => hc.id === e.horario_id);
        const hojeSemana = diasPtBr[new Date().getDay()];
        return h && h.dias.includes(hojeSemana);
    });
    expHoje.sort((a, b) => (horariosConfig.find(h=>h.id===a.horario_id)?.horario || '').localeCompare(horariosConfig.find(h=>h.id===b.horario_id)?.horario || ''));
    const header = document.getElementById('painelExpCount');
    if (header) header.textContent = expHoje.length;
    painel.innerHTML = expHoje.length === 0 ? '<div style="text-align:center;padding:20px;">😊 Sem experimentais hoje!</div>' : expHoje.map(exp => {
        const h = horariosConfig.find(hc => hc.id === exp.horario_id);
        const faltas = historicoFaltasExperimentais[exp.telefone] || 0;
        const alerta = faltas >= 2 ? `<div style="background:#fee2e2;color:#b91c1c;font-size:0.7rem;padding:4px;border-radius:5px;">⚠️ Faltou ${faltas}x antes</div>` : '';
        return `
            <div style="background:white;border:1px solid #e2e8f0;border-radius:10px;padding:12px;margin-bottom:8px;">
                <div><div style="font-weight:bold;">${exp.nome}</div><div style="font-size:0.8rem;">📞 ${exp.telefone}</div><div style="font-size:0.75rem;">⏰ ${h ? h.horario : '??'}</div>${alerta}</div>
                <div style="display:flex;gap:5px;margin-top:8px;">
                    <button onclick="marcarPresencaExpPainel(${exp.id},'compareceu')" style="background:#10b981;color:white;border:none;padding:5px 9px;border-radius:6px;font-size:0.7rem;cursor:pointer;">✔️ Veio</button>
                    <button onclick="marcarPresencaExpPainel(${exp.id},'nao_compareceu')" style="background:#ef4444;color:white;border:none;padding:5px 9px;border-radius:6px;font-size:0.7rem;cursor:pointer;">❌ Faltou</button>
                    <a href="https://wa.me/55${String(exp.telefone).replace(/\D/g,'')}" target="_blank" style="background:#25d366;color:white;padding:5px 9px;border-radius:6px;font-size:0.7rem;text-decoration:none;">💬 WA</a>
                </div>
            </div>
        `;
    }).join('');
}

function marcarPresencaExpPainel(id, st) {
    const exp = experimentais.find(e => e.id === id);
    if (!exp) return;
    if (st === 'nao_compareceu' && exp.status !== 'nao_compareceu') {
        historicoFaltasExperimentais[exp.telefone] = (historicoFaltasExperimentais[exp.telefone] || 0) + 1;
        salvarHistoricoExperimental({
            nome: exp.nome,
            telefone: exp.telefone,
            data: exp.dataAgendada || formatarDataISO(),
            horario_id: exp.horario_id,
            resultado: 'nao_compareceu',
            matriculado: false
        });
    }
    exp.status = st;
    if (st === 'compareceu') {
        salvarHistoricoExperimental({
            nome: exp.nome,
            telefone: exp.telefone,
            data: exp.dataAgendada || formatarDataISO(),
            horario_id: exp.horario_id,
            resultado: 'compareceu',
            matriculado: false
        });
        setTimeout(() => {
            if (confirm(`📋 ${exp.nome} compareceu. Efetivar matrícula?`)) {
                matricularExperimentalInSuper(exp.id);
            }
        }, 100);
    }
    salvarExperimental(exp);
    renderizarTudo();
    renderPainelExperimentaisHoje();
}

function marcarPresencaExp(id, st, hId) {
    const exp = experimentais.find(e => e.id === id);
    if (!exp) return;
    if (st === 'nao_compareceu' && exp.status !== 'nao_compareceu') {
        historicoFaltasExperimentais[exp.telefone] = (historicoFaltasExperimentais[exp.telefone] || 0) + 1;
        salvarHistoricoExperimental({
            nome: exp.nome,
            telefone: exp.telefone,
            data: exp.dataAgendada || formatarDataISO(),
            horario_id: exp.horario_id,
            resultado: 'nao_compareceu',
            matriculado: false
        });
    }
    exp.status = st;
    if (st === 'compareceu') {
        salvarHistoricoExperimental({
            nome: exp.nome,
            telefone: exp.telefone,
            data: exp.dataAgendada || formatarDataISO(),
            horario_id: exp.horario_id,
            resultado: 'compareceu',
            matriculado: false
        });
        setTimeout(() => {
            if (confirm(`📋 ${exp.nome} compareceu. Efetivar matrícula?`)) {
                matricularExperimentalInSuper(exp.id);
            }
        }, 100);
    }
    salvarExperimental(exp);
    renderizarTudo();
    renderPainelExperimentaisHoje();
    abrirModalHorario(hId);
}

// ============================================================
// EDIÇÃO COMPLETA DO ALUNO
// ============================================================
function abrirEdicaoCompletaInline(id, hId) {
    const aluno = alunos.find(a => a.id == id);
    if (!aluno) {
        mostrarToast('❌ Aluno não encontrado!', 'erro');
        return;
    }
    
    const divId = hId ? 'centralFormEdicaoContainer' : 'superFormEdicaoContainer';
    let div = document.getElementById(divId);
    
    if (!div) {
        const corpo = document.getElementById('superModalCorpo');
        if (corpo) {
            const newDiv = document.createElement('div');
            newDiv.id = divId;
            newDiv.style.display = 'none';
            newDiv.style.background = '#f8fafc';
            newDiv.style.padding = '22px';
            newDiv.style.borderRadius = '12px';
            newDiv.style.marginBottom = '25px';
            newDiv.style.border = '2px dashed #006994';
            corpo.insertBefore(newDiv, corpo.firstChild);
            div = newDiv;
        }
    }
    
    if (!div) {
        mostrarToast('❌ Erro ao abrir edição!', 'erro');
        return;
    }
    
    div.style.display = 'block';
    
    const diasSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const selectGradeHtml = diasSemana.map(dia => {
        const campo = diasMap[dia];
        const valorAtual = aluno[campo] || '';
        const opcoesDoDia = horariosConfig.filter(hc => hc.dias.includes(dia));
        return `
            <div style="margin-bottom:10px;">
                <label style="font-size:0.8rem;font-weight:bold;display:block;margin-bottom:3px;">${dia}:</label>
                <select id="editGrade${campo}" class="form-select-field" style="width:100%;padding:8px;border-radius:6px;border:1px solid #cbd5e1;">
                    <option value="">[ Não treina ]</option>
                    ${opcoesDoDia.map(hc => `<option value="${hc.id}" ${valorAtual == hc.id ? 'selected' : ''}>${hc.modalidade} (${hc.horario})</option>`).join('')}
                </select>
            </div>
        `;
    }).join('');
    
    const statusAtual = aluno.status || 'ATIVO';
    const btnVoltar = hId 
        ? `<button onclick="document.getElementById('${divId}').style.display='none'" class="btn-discard-modal" style="background:#e2e8f0;border:none;padding:8px 16px;border-radius:6px;cursor:pointer;">⬅️ Voltar para a Turma</button>`
        : `<button onclick="document.getElementById('${divId}').style.display='none'" class="btn-discard-modal" style="background:#e2e8f0;border:none;padding:8px 16px;border-radius:6px;cursor:pointer;">⬅️ Cancelar</button>`;
    
    div.innerHTML = `
        <h3 style="color:#006994;margin-bottom:15px;font-size:1.2rem;font-weight:bold;border-left:4px solid #006994;padding-left:8px;">✏️ Editar Matrícula: #${aluno.codigo} — ${aluno.nome}</h3>
        
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin-bottom:18px;">
            <div>
                <label style="font-size:0.8rem;font-weight:bold;color:#334155;">Código:</label>
                <input type="number" id="editFullCodigo" class="search-input-field" value="${aluno.codigo}" style="width:100%;padding:8px;border-radius:6px;border:1px solid #cbd5e1;">
            </div>
            <div>
                <label style="font-size:0.8rem;font-weight:bold;color:#334155;">Nome:</label>
                <input type="text" id="editFullN" class="search-input-field" value="${aluno.nome}" style="width:100%;padding:8px;border-radius:6px;border:1px solid #cbd5e1;">
            </div>
            <div>
                <label style="font-size:0.8rem;font-weight:bold;color:#334155;">Telefone:</label>
                <input type="text" id="editFullP" class="search-input-field" value="${aluno.telefone}" style="width:100%;padding:8px;border-radius:6px;border:1px solid #cbd5e1;">
            </div>
            <div>
                <label style="font-size:0.8rem;font-weight:bold;color:#334155;">Vencimento:</label>
                <input type="text" id="editFullV" class="search-input-field" value="${aluno.vencimento || ''}" placeholder="DD/MM" style="width:100%;padding:8px;border-radius:6px;border:1px solid #cbd5e1;">
            </div>
            <div>
                <label style="font-size:0.8rem;font-weight:bold;color:#334155;">Modalidade:</label>
                <select id="editFullMod" class="form-select-field" style="width:100%;padding:8px;border-radius:6px;border:1px solid #cbd5e1;">
                    ${modalidadesDisponiveis.map(m => `<option value="${m}" ${aluno.modalidade === m ? 'selected' : ''}>${m}</option>`).join('')}
                </select>
            </div>
            <div>
                <label style="font-size:0.8rem;font-weight:bold;color:#334155;">Status:</label>
                <select id="editFullStatus" class="form-select-field" style="width:100%;padding:8px;border-radius:6px;border:1px solid #cbd5e1;">
                    <option value="ATIVO" ${statusAtual === 'ATIVO' ? 'selected' : ''}>🟢 ATIVO</option>
                    <option value="PAUSADO" ${statusAtual === 'PAUSADO' ? 'selected' : ''}>⏸ PAUSADO</option>
                    <option value="TRANCADO" ${statusAtual === 'TRANCADO' ? 'selected' : ''}>🔒 TRANCADO</option>
                </select>
            </div>
        </div>
        
        <div style="background:#edf2f7;padding:15px;border-radius:8px;margin-bottom:15px;">
            <span style="font-weight:bold;font-size:0.9rem;color:#1e293b;display:block;margin-bottom:10px;">🗓️ Grade Semanal (Turmas que o aluno participa):</span>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;">${selectGradeHtml}</div>
        </div>
        
        <div style="display:flex;gap:12px;justify-content:flex-end;">
            <button onclick="salvarEdicaoCompleta(${aluno.id},${hId || 'null'})" class="btn-save-modal" style="background:#006994;color:white;border:none;padding:10px 22px;border-radius:8px;cursor:pointer;font-weight:bold;">💾 Salvar Alterações</button>
            ${btnVoltar}
        </div>
    `;
    
    div.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

async function salvarEdicaoCompleta(id, hId) {
    const aluno = alunos.find(a => a.id == id);
    if (!aluno) {
        mostrarToast('❌ Aluno não encontrado!', 'erro');
        return;
    }
    
    const novoCodigo = parseInt(document.getElementById('editFullCodigo')?.value);
    const nome = document.getElementById('editFullN')?.value.trim();
    const telefone = document.getElementById('editFullP')?.value.trim();
    const vencimento = document.getElementById('editFullV')?.value.trim();
    const modalidade = document.getElementById('editFullMod')?.value || aluno.modalidade;
    const statusAluno = document.getElementById('editFullStatus')?.value || aluno.status || 'ATIVO';
    
    if (!nome) { mostrarToast('⚠️ Nome é obrigatório!', 'erro'); return; }
    if (!telefone) { mostrarToast('⚠️ Telefone é obrigatório!', 'erro'); return; }
    
    if (novoCodigo && novoCodigo !== aluno.codigo) {
        const codigoExistente = alunos.find(a => a.codigo === novoCodigo && a.id !== aluno.id);
        if (codigoExistente) {
            mostrarToast(`⚠️ Código ${novoCodigo} já está em uso por ${codigoExistente.nome}!`, 'erro');
            return;
        }
        aluno.codigo = novoCodigo;
    }
    
    aluno.nome = nome;
    aluno.telefone = telefone;
    aluno.vencimento = vencimento;
    aluno.modalidade = modalidade;
    aluno.status = statusAluno;
    
    aluno.seg = document.getElementById('editGradeseg')?.value ? parseInt(document.getElementById('editGradeseg').value) : '';
    aluno.ter = document.getElementById('editGradeter')?.value ? parseInt(document.getElementById('editGradeter').value) : '';
    aluno.qua = document.getElementById('editGradequa')?.value ? parseInt(document.getElementById('editGradequa').value) : '';
    aluno.qui = document.getElementById('editGradequi')?.value ? parseInt(document.getElementById('editGradequi').value) : '';
    aluno.sex = document.getElementById('editGradesex')?.value ? parseInt(document.getElementById('editGradesex').value) : '';
    aluno.sab = document.getElementById('editGradesab')?.value ? parseInt(document.getElementById('editGradesab').value) : '';
    
    await salvarAluno(aluno);
    
    const divId = hId && hId !== 'null' ? 'centralFormEdicaoContainer' : 'superFormEdicaoContainer';
    const div = document.getElementById(divId);
    if (div) div.style.display = 'none';
    
    renderizarTudo();
    renderPainelExperimentaisHoje();
    
    if (hId && hId !== 'null') {
        abrirModalHorario(parseInt(hId));
    } else {
        renderStudentTableSuper();
    }
    
    mostrarToast(`✅ ${aluno.nome} atualizado com sucesso!`);
}

// ============================================================
// SUPER MODAL
// ============================================================
function abrirSuperModal(tipo) {
    const modal = document.getElementById('globalSuperModal');
    const titulo = document.getElementById('superModalTitulo');
    const corpo = document.getElementById('superModalCorpo');
    if (!modal) return;
    document.getElementById('fabContainer')?.classList.remove('active');
    modal.classList.add('active');

    if (tipo === 'vencidos') {
        titulo.innerHTML = '⚠️ Alunos Vencidos';
        corpo.innerHTML = `<div id="superFormEdicaoContainer" style="display:none;"></div><div class="table-container"><table><thead><tr><th>Código</th><th>Nome</th><th>Telefone</th><th>Vencimento</th><th>Status</th><th>Dias</th><th>Ações</th></tr></thead><tbody id="superVencidosBody"></tbody></table></div>`;
        renderVencidosSuper();
    } else if (tipo === 'alunos') {
        titulo.innerHTML = '👥 Central de Alunos';
        corpo.innerHTML = `<div style="display:flex;gap:10px;margin-bottom:15px;flex-wrap:wrap;"><button class="filter-chip active" onclick="filtrarListaAlunos('todos', this)">📋 Todos</button><button class="filter-chip" onclick="filtrarListaAlunos('pausados', this)">⏸ PAUSADOS</button><button class="filter-chip" onclick="filtrarListaAlunos('trancados', this)">🔒 TRANCADOS</button></div><input type="text" id="superStudentSearch" class="search-input-field" style="margin-bottom:15px;" placeholder="🔍 Nome, código ou telefone..." oninput="renderStudentTableSuper()"><div id="superFormEdicaoContainer" style="display:none;"></div><div class="table-container"><table><thead><tr><th>Código</th><th>Nome</th><th>Telefone</th><th>Vencimento</th><th>Status</th><th>Dias</th><th>Ações</th></tr></thead><tbody id="superStudentTableBody"></tbody></table></div>`;
        window.listaAlunosFiltro = 'todos';
        renderStudentTableSuper();
    } else if (tipo === 'incompletos') {
        titulo.innerHTML = '⚠️ Alunos sem Dias de Treino';
        corpo.innerHTML = `<div class="table-container"><table><thead><tr><th>Nome</th><th>Vincular Turmas</th><th>Ação</th></tr></thead><tbody id="superIncompletosBody"></tbody></table></div>`;
        renderIncompletosSuper();
    } else if (tipo === 'experimentais_futuros') {
        titulo.innerHTML = '📅 Aulas Experimentais Futuras';
        corpo.innerHTML = `
            <input type="text" id="buscarExpFuturo" class="search-input-field" style="margin-bottom:15px;" placeholder="🔍 Buscar por nome ou telefone..." oninput="renderExperimentaisFuturos()">
            <div class="table-container" style="max-height:500px;overflow-y:auto;">
                <table style="width:100%;">
                    <thead><tr><th>Data</th><th>Horário</th><th>Nome</th><th>Telefone</th><th>Status</th><th>Ações</th></tr></thead>
                    <tbody id="experimentaisFuturosBody"></tbody>
                </table>
            </div>
        `;
        renderExperimentaisFuturos();
    } else if (tipo === 'modalidades') {
        titulo.innerHTML = '🏷️ Gerenciar Modalidades';
        corpo.innerHTML = `
            <div style="margin-bottom:20px;">
                <button onclick="abrirCriarModalidade()" style="background:#006994;color:white;border:none;padding:10px 20px;border-radius:8px;cursor:pointer;">➕ Criar Nova Modalidade</button>
            </div>
            <div class="table-container">
                <table style="width:100%;">
                    <thead><tr><th>Modalidades Existentes</th><th>Ações</th></tr></thead>
                    <tbody id="modalidadesListBody"></tbody>
                </table>
            </div>
        `;
        renderModalidadesList();
    } else if (tipo === 'historico_experimentais') {
        abrirHistoricoExperimentais();
    }
}

// ============================================================
// MODALIDADES
// ============================================================
function abrirCriarModalidade() {
    const modal = document.getElementById('globalSuperModal');
    const titulo = document.getElementById('superModalTitulo');
    const corpo = document.getElementById('superModalCorpo');
    
    titulo.innerHTML = '➕ Criar Nova Modalidade';
    corpo.innerHTML = `
        <div style="max-width:400px;margin:0 auto;">
            <div style="margin-bottom:20px;">
                <label style="font-weight:bold;display:block;margin-bottom:8px;">Nome da Nova Modalidade:</label>
                <input type="text" id="novaModalidadeNome" class="search-input-field" style="width:100%;padding:12px;" placeholder="Ex: Natação Competição, Alongamento, etc.">
            </div>
            <div style="margin-bottom:20px;padding:12px;background:#e0f2fe;border-radius:8px;color:#0369a1;">
                💡 A nova modalidade aparecerá em todos os lugares (cadastro de alunos, criação de turmas, filtros).
            </div>
            <div class="form-actions-row" style="display:flex;gap:10px;justify-content:flex-end;">
                <button class="btn-save-modal" onclick="salvarNovaModalidade()" style="background:#006994;">✅ Criar Modalidade</button>
                <button class="btn-discard-modal" onclick="fecharSuperModal()">Cancelar</button>
            </div>
        </div>
    `;
    modal.classList.add('active');
}

function salvarNovaModalidade() {
    const novaModalidade = document.getElementById('novaModalidadeNome').value.trim();
    if (!novaModalidade) {
        alert('⚠️ Digite o nome da nova modalidade!');
        return;
    }
    if (modalidadesDisponiveis.includes(novaModalidade)) {
        alert(`⚠️ A modalidade "${novaModalidade}" já existe!`);
        return;
    }
    
    modalidadesDisponiveis.push(novaModalidade);
    modalidadesDisponiveis.sort();
    atualizarDropdownsModalidade();
    fecharSuperModal();
    mostrarToast(`✅ Modalidade "${novaModalidade}" criada com sucesso!`);
}

function renderModalidadesList() {
    const body = document.getElementById('modalidadesListBody');
    if (!body) return;
    body.innerHTML = modalidadesDisponiveis.map(mod => `
        <tr>
            <td style="padding:10px;">🏊 ${mod}</td>
            <td style="padding:10px;display:flex;gap:6px;flex-wrap:wrap;">
                <button onclick="abrirEditarModalidade('${mod}')" style="background:#e0f2fe;color:#0369a1;border:none;padding:5px 12px;border-radius:6px;cursor:pointer;">✏️ Editar</button>
                <button onclick="excluirModalidade('${mod}')" style="background:#fee2e2;color:#b91c1c;border:none;padding:5px 12px;border-radius:6px;cursor:pointer;">🗑️ Excluir</button>
            </td>
        </tr>
    `).join('');
}

function excluirModalidade(modalidade) {
    if (modalidadesDisponiveis.length <= 1) {
        alert('⚠️ Não é possível excluir a única modalidade!');
        return;
    }
    if (!confirm(`⚠️ Excluir a modalidade "${modalidade}"?\n\nIsso pode afetar turmas e alunos que usam esta modalidade.`)) return;
    const index = modalidadesDisponiveis.indexOf(modalidade);
    if (index !== -1) modalidadesDisponiveis.splice(index, 1);
    atualizarDropdownsModalidade();
    renderModalidadesList();
    mostrarToast(`✅ Modalidade "${modalidade}" excluída!`);
}

function abrirEditarModalidade(modalidadeAntiga) {
    const modal = document.getElementById('globalSuperModal');
    const titulo = document.getElementById('superModalTitulo');
    const corpo = document.getElementById('superModalCorpo');
    
    titulo.innerHTML = `✏️ Editar Modalidade: ${modalidadeAntiga}`;
    corpo.innerHTML = `
        <div style="max-width:400px;margin:0 auto;">
            <div style="margin-bottom:20px;">
                <label style="font-weight:bold;display:block;margin-bottom:8px;">Novo nome da modalidade:</label>
                <input type="text" id="editModalidadeNome" class="search-input-field" style="width:100%;padding:12px;" value="${modalidadeAntiga}">
            </div>
            <div style="margin-bottom:20px;padding:12px;background:#e0f2fe;border-radius:8px;color:#0369a1;">
                ⚠️ Atenção: Isso vai atualizar todas as turmas e alunos que usam esta modalidade.
            </div>
            <div class="form-actions-row" style="display:flex;gap:10px;justify-content:flex-end;">
                <button class="btn-save-modal" onclick="salvarEdicaoModalidade('${modalidadeAntiga}')" style="background:#006994;">💾 Salvar Alterações</button>
                <button class="btn-discard-modal" onclick="fecharSuperModal(); renderModalidadesList();">Cancelar</button>
            </div>
        </div>
    `;
    modal.classList.add('active');
}

function salvarEdicaoModalidade(modalidadeAntiga) {
    const novoNome = document.getElementById('editModalidadeNome').value.trim();
    
    if (!novoNome) {
        alert('⚠️ Digite o novo nome da modalidade!');
        return;
    }
    
    if (modalidadesDisponiveis.includes(novoNome) && novoNome !== modalidadeAntiga) {
        alert(`⚠️ A modalidade "${novoNome}" já existe!`);
        return;
    }
    
    const index = modalidadesDisponiveis.indexOf(modalidadeAntiga);
    if (index !== -1) {
        modalidadesDisponiveis[index] = novoNome;
    }
    
    horariosConfig.forEach(turma => {
        if (turma.modalidade === modalidadeAntiga) {
            turma.modalidade = novoNome;
        }
    });
    
    alunos.forEach(aluno => {
        if (aluno.modalidade === modalidadeAntiga) {
            aluno.modalidade = novoNome;
            salvarAluno(aluno);
        }
    });
    
    salvarTurmas();
    atualizarDropdownsModalidade();
    fecharSuperModal();
    renderModalidadesList();
    renderizarTudo();
    mostrarToast(`✅ Modalidade "${modalidadeAntiga}" alterada para "${novoNome}" com sucesso!`);
}

// ============================================================
// FUNÇÕES DE EXPERIMENTAIS
// ============================================================
function renderExperimentaisFuturos() {
    const body = document.getElementById('experimentaisFuturosBody');
    if (!body) return;
    const hoje = formatarDataISO();
    const busca = document.getElementById('buscarExpFuturo')?.value.toLowerCase() || '';
    
    let futuros = experimentais.filter(e => {
        if (e.status !== 'agendado') return false;
        if (!e.dataAgendada) return false;
        return e.dataAgendada >= hoje;
    });
    
    futuros.sort((a, b) => a.dataAgendada.localeCompare(b.dataAgendada));
    
    if (busca) {
        futuros = futuros.filter(e => e.nome.toLowerCase().includes(busca) || e.telefone.includes(busca));
    }
    
    if (futuros.length === 0) {
        body.innerHTML = '<tr><td colspan="6" style="text-align:center;padding:40px;">📭 Nenhuma aula experimental futura agendada</td></tr>';
        return;
    }
    
    body.innerHTML = futuros.map(exp => {
        const horario = horariosConfig.find(h => h.id === exp.horario_id);
        return `
            <tr style="border-bottom:1px solid #e2e8f0;">
                <td style="padding:12px;"><strong>${formatarDataBR(exp.dataAgendada)}</strong></td>
                <td style="padding:12px;">${horario ? horario.horario : '??'} - ${exp.dia || ''}</td>
                <td style="padding:12px;"><strong>${exp.nome}</strong></td>
                <td style="padding:12px;">${exp.telefone}</td>
                <td style="padding:12px;"><span style="background:#fef3c7;color:#b45309;padding:4px 8px;border-radius:20px;">📅 Agendado</span></td>
                <td style="padding:12px;display:flex;gap:6px;flex-wrap:wrap;">
                    <a href="https://wa.me/55${String(exp.telefone).replace(/\D/g,'')}" target="_blank" style="background:#25d366;color:white;padding:5px 10px;border-radius:6px;text-decoration:none;font-size:0.75rem;">💬 WhatsApp</a>
                    <button onclick="abrirEdicaoExperimental(${exp.id})" style="background:#e0f2fe;color:#0369a1;border:none;padding:5px 10px;border-radius:6px;cursor:pointer;font-size:0.75rem;">✏️ Editar</button>
                    <button onclick="cancelarExperimental(${exp.id})" style="background:#fee2e2;color:#b91c1c;border:none;padding:5px 10px;border-radius:6px;cursor:pointer;font-size:0.75rem;">🗑️ Cancelar</button>
                </td>
            </tr>
        `;
    }).join('');
}

function abrirEdicaoExperimental(expId) {
    const exp = experimentais.find(e => e.id === expId);
    if (!exp) return;
    
    const modal = document.getElementById('globalSuperModal');
    const titulo = document.getElementById('superModalTitulo');
    const corpo = document.getElementById('superModalCorpo');
    
    titulo.innerHTML = '✏️ Editar Aula Experimental';
    corpo.innerHTML = `
        <div style="max-width:500px;margin:0 auto;">
            <div style="margin-bottom:15px;"><label>Nome:</label><input type="text" id="editExpNome" class="search-input-field" value="${exp.nome}"></div>
            <div style="margin-bottom:15px;"><label>Telefone:</label><input type="text" id="editExpTelefone" class="search-input-field" value="${exp.telefone}"></div>
            <div style="margin-bottom:15px;"><label>Data da Aula:</label><input type="date" id="editExpData" class="search-input-field" value="${exp.dataAgendada || ''}"></div>
            <div style="margin-bottom:15px;"><label>Modalidade:</label>
                <select id="editExpModalidade" class="form-select-field" onchange="carregarDiasExpEdicao()">
                    <option value="">-- Selecione --</option>
                    ${[...new Set(horariosConfig.map(h => h.modalidade))].map(m => `<option value="${m}" ${exp.modalidade === m ? 'selected' : ''}>${m}</option>`).join('')}
                </select>
            </div>
            <div style="margin-bottom:15px;"><label>Dia da Semana:</label>
                <select id="editExpDia" class="form-select-field" onchange="carregarHorariosExpEdicao()">
                    <option value="">-- Selecione a modalidade primeiro --</option>
                </select>
            </div>
            <div style="margin-bottom:15px;"><label>Horário:</label>
                <select id="editExpHorario" class="form-select-field">
                    <option value="">-- Selecione o dia --</option>
                </select>
            </div>
            <div class="form-actions-row" style="margin-top:20px;">
                <button class="btn-save-modal" onclick="salvarEdicaoExperimental(${exp.id})">💾 Salvar</button>
                <button class="btn-discard-modal" onclick="fecharSuperModal(); renderExperimentaisFuturos();">Cancelar</button>
            </div>
        </div>
    `;
    
    setTimeout(() => {
        const modalidadeSelect = document.getElementById('editExpModalidade');
        if (modalidadeSelect && exp.modalidade) {
            modalidadeSelect.value = exp.modalidade;
            carregarDiasExpEdicao();
            setTimeout(() => {
                const diaSelect = document.getElementById('editExpDia');
                if (diaSelect && exp.dia) {
                    diaSelect.value = exp.dia;
                    carregarHorariosExpEdicao();
                    setTimeout(() => {
                        const horarioSelect = document.getElementById('editExpHorario');
                        if (horarioSelect && exp.horario_id) {
                            horarioSelect.value = exp.horario_id + '_' + exp.dia;
                        }
                    }, 100);
                }
            }, 100);
        }
    }, 50);
    
    modal.classList.add('active');
}

function carregarDiasExpEdicao() {
    const modalidade = document.getElementById('editExpModalidade').value;
    const diaSelect = document.getElementById('editExpDia');
    if (!modalidade) {
        diaSelect.innerHTML = '<option value="">-- Selecione a modalidade --</option>';
        diaSelect.disabled = true;
        return;
    }
    const dias = [...new Set(horariosConfig.filter(h => h.modalidade === modalidade).flatMap(h => h.dias))];
    const ordem = ['Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
    dias.sort((a, b) => ordem.indexOf(a) - ordem.indexOf(b));
    diaSelect.innerHTML = '<option value="">-- Selecione --</option>' + dias.map(d => `<option value="${d}">${d}</option>`).join('');
    diaSelect.disabled = false;
}

function carregarHorariosExpEdicao() {
    const modalidade = document.getElementById('editExpModalidade').value;
    const dia = document.getElementById('editExpDia').value;
    const horarioSelect = document.getElementById('editExpHorario');
    if (!dia) {
        horarioSelect.innerHTML = '<option value="">-- Selecione o dia --</option>';
        horarioSelect.disabled = true;
        return;
    }
    const horarios = horariosConfig.filter(h => h.modalidade === modalidade && h.dias.includes(dia));
    horarioSelect.innerHTML = '<option value="">-- Selecione --</option>' + horarios.map(h => `<option value="${h.id}_${dia}">${h.horario}</option>`).join('');
    horarioSelect.disabled = false;
}

function salvarEdicaoExperimental(expId) {
    const exp = experimentais.find(e => e.id === expId);
    if (!exp) return;
    
    const novoNome = document.getElementById('editExpNome').value.trim();
    const novoTelefone = document.getElementById('editExpTelefone').value.trim();
    const novaData = document.getElementById('editExpData').value;
    const valorHorario = document.getElementById('editExpHorario').value;
    
    if (!novoNome || !novoTelefone) { alert('⚠️ Nome e telefone são obrigatórios!'); return; }
    if (!novaData) { alert('⚠️ Selecione a data!'); return; }
    if (!valorHorario) { alert('⚠️ Selecione o horário!'); return; }
    
    const [hId, dia] = valorHorario.split('_');
    const modalidade = document.getElementById('editExpModalidade').value;
    
    exp.nome = novoNome;
    exp.telefone = novoTelefone;
    exp.dataAgendada = novaData;
    exp.horario_id = parseInt(hId);
    exp.dia = dia;
    exp.modalidade = modalidade;
    
    salvarExperimental(exp);
    fecharSuperModal();
    renderExperimentaisFuturos();
    renderizarTudo();
    mostrarToast('✅ Experimental atualizada!');
}

function cancelarExperimental(expId) {
    if (!confirm('⚠️ Cancelar esta aula experimental?')) return;
    const exp = experimentais.find(e => e.id === expId);
    if (exp) {
        excluirExperimental(exp.id);
        const index = experimentais.findIndex(e => e.id === expId);
        if (index !== -1) experimentais.splice(index, 1);
    }
    renderExperimentaisFuturos();
    renderizarTudo();
    renderPainelExperimentaisHoje();
    mostrarToast('✅ Experimental cancelada!');
}

// ============================================================
// HISTÓRICO DE EXPERIMENTAIS
// ============================================================
let filtroStatusHistoricoExp = 'todos';

function abrirHistoricoExperimentais() {
    const modal = document.getElementById('globalSuperModal');
    const titulo = document.getElementById('superModalTitulo');
    const corpo = document.getElementById('superModalCorpo');
    
    titulo.innerHTML = '📋 Histórico de Aulas Experimentais';
    
    corpo.innerHTML = `
        <div style="margin-bottom:20px;">
            <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:flex-end;margin-bottom:15px;">
                <div style="flex:1;min-width:150px;">
                    <label style="font-weight:bold;display:block;margin-bottom:5px;">📅 Período:</label>
                    <select id="filtroPeriodoHistorico" class="form-select-field" onchange="renderHistoricoExperimentais()" style="width:100%;padding:10px;">
                        <option value="7">Últimos 7 dias</option>
                        <option value="15">Últimos 15 dias</option>
                        <option value="30" selected>Últimos 30 dias</option>
                        <option value="60">Últimos 60 dias</option>
                        <option value="90">Últimos 90 dias</option>
                        <option value="180">Últimos 180 dias</option>
                        <option value="365">Últimos 365 dias</option>
                        <option value="0">Todos</option>
                    </select>
                </div>
                <div style="flex:1;min-width:150px;">
                    <label style="font-weight:bold;display:block;margin-bottom:5px;">🔍 Buscar:</label>
                    <input type="text" id="buscarHistoricoExp" class="search-input-field" placeholder="Nome ou telefone..." oninput="renderHistoricoExperimentais()" style="width:100%;padding:10px;">
                </div>
                <div>
                    <button onclick="exportarHistoricoExperimentais()" style="background:#10b981;color:white;border:none;padding:10px 15px;border-radius:8px;cursor:pointer;">📊 Exportar CSV</button>
                </div>
            </div>
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:15px;">
                <button class="filter-chip active" onclick="filtrarStatusHistoricoExp('todos', this)" style="padding:6px 14px;border-radius:20px;border:none;cursor:pointer;background:#006994;color:white;">📋 Todos</button>
                <button class="filter-chip" onclick="filtrarStatusHistoricoExp('compareceu', this)" style="padding:6px 14px;border-radius:20px;border:none;cursor:pointer;background:#f1f5f9;">✅ Compareceram</button>
                <button class="filter-chip" onclick="filtrarStatusHistoricoExp('nao_compareceu', this)" style="padding:6px 14px;border-radius:20px;border:none;cursor:pointer;background:#f1f5f9;">❌ Faltaram</button>
                <button class="filter-chip" onclick="filtrarStatusHistoricoExp('matriculados', this)" style="padding:6px 14px;border-radius:20px;border:none;cursor:pointer;background:#f1f5f9;">📋 Efetivaram Matrícula</button>
            </div>
        </div>
        <div class="table-container" style="max-height:500px;overflow-y:auto;">
            <table style="width:100%;border-collapse:collapse;">
                <thead style="position:sticky;top:0;background:#f1f5f9;">
                    <tr>
                        <th style="padding:12px;text-align:left;">Data</th>
                        <th style="padding:12px;text-align:left;">Horário</th>
                        <th style="padding:12px;text-align:left;">Nome</th>
                        <th style="padding:12px;text-align:left;">Telefone</th>
                        <th style="padding:12px;text-align:left;">Status</th>
                        <th style="padding:12px;text-align:left;">Ações</th>
                    </tr>
                </thead>
                <tbody id="historicoExperimentaisBody"></tbody>
            </table>
        </div>
        <div style="margin-top:15px;padding:12px;background:#f1f5f9;border-radius:8px;display:flex;justify-content:space-between;flex-wrap:wrap;font-size:0.85rem;" id="historicoResumo">
            Carregando...
        </div>
    `;
    
    modal.classList.add('active');
    renderHistoricoExperimentais();
}

function filtrarStatusHistoricoExp(status, btn) {
    filtroStatusHistoricoExp = status;
    const container = btn.parentElement;
    container.querySelectorAll('.filter-chip').forEach(b => {
        b.style.background = '#f1f5f9';
        b.style.color = '#334155';
    });
    btn.style.background = '#006994';
    btn.style.color = 'white';
    renderHistoricoExperimentais();
}

async function renderHistoricoExperimentais() {
    const body = document.getElementById('historicoExperimentaisBody');
    if (!body) return;
    
    const periodoDias = parseInt(document.getElementById('filtroPeriodoHistorico')?.value || '30');
    const busca = document.getElementById('buscarHistoricoExp')?.value.toLowerCase() || '';
    
    const hoje = new Date();
    let dataLimite = null;
    if (periodoDias > 0) {
        dataLimite = new Date(hoje);
        dataLimite.setDate(dataLimite.getDate() - periodoDias);
    }
    
    const historicoExp = await carregarHistoricoExperimental();
    
    const hojeStr = formatarDataISO();
    const experimentaisPassados = experimentais.filter(e => {
        if (e.status === 'agendado') return false;
        if (e.dataAgendada && e.dataAgendada < hojeStr) return true;
        return e.status !== 'agendado';
    });
    
    let todos = [];
    
    historicoExp.forEach(item => {
        let dataItem = item.data || item.dataAgendada || '';
        if (item.timestamp) {
            const date = new Date(item.timestamp);
            dataItem = date.toISOString().split('T')[0];
        }
        todos.push({
            id: item.id || item._docId,
            data: dataItem,
            horario: item.horario || '??',
            nome: item.nome || 'Nome não informado',
            telefone: item.telefone || '',
            resultado: item.resultado || 'agendado',
            matriculado: item.matriculado || false,
            timestamp: item.timestamp || dataItem
        });
    });
    
    experimentaisPassados.forEach(e => {
        const horario = horariosConfig.find(h => h.id === e.horario_id);
        todos.push({
            id: e.id,
            data: e.dataAgendada || '',
            horario: horario ? horario.horario : '??',
            nome: e.nome || 'Nome não informado',
            telefone: e.telefone || '',
            resultado: e.status || 'agendado',
            matriculado: false,
            timestamp: e.dataAgendada || new Date().toISOString()
        });
    });
    
    if (dataLimite) {
        todos = todos.filter(item => {
            if (!item.data) return false;
            let dataItem;
            if (item.data.includes('-')) {
                dataItem = new Date(item.data);
            } else {
                const partes = item.data.split('/');
                if (partes.length === 3) {
                    dataItem = new Date(partes[2], partes[1]-1, partes[0]);
                } else {
                    dataItem = new Date(item.data);
                }
            }
            if (isNaN(dataItem.getTime())) return true;
            return dataItem >= dataLimite && dataItem <= hoje;
        });
    }
    
    if (busca) {
        todos = todos.filter(item => 
            (item.nome || '').toLowerCase().includes(busca) || 
            (item.telefone || '').includes(busca)
        );
    }
    
    if (filtroStatusHistoricoExp === 'compareceu') {
        todos = todos.filter(item => item.resultado === 'compareceu');
    } else if (filtroStatusHistoricoExp === 'nao_compareceu') {
        todos = todos.filter(item => item.resultado === 'nao_compareceu');
    } else if (filtroStatusHistoricoExp === 'matriculados') {
        todos = todos.filter(item => item.matriculado === true);
    }
    
    todos.sort((a, b) => {
        if (a.timestamp && b.timestamp) return b.timestamp.localeCompare(a.timestamp);
        return (b.data || '').localeCompare(a.data || '');
    });
    
    const total = todos.length;
    const compareceram = todos.filter(t => t.resultado === 'compareceu').length;
    const faltaram = todos.filter(t => t.resultado === 'nao_compareceu').length;
    const matriculados = todos.filter(t => t.matriculado === true).length;
    const taxaConversao = total > 0 ? Math.round((matriculados / total) * 100) : 0;
    
    const resumo = document.getElementById('historicoResumo');
    if (resumo) {
        resumo.innerHTML = `
            <span>📊 Total: <strong>${total}</strong></span>
            <span>✅ Compareceram: <strong style="color:#15803d;">${compareceram}</strong></span>
            <span>❌ Faltaram: <strong style="color:#b91c1c;">${faltaram}</strong></span>
            <span>📋 Matriculados: <strong style="color:#0369a1;">${matriculados}</strong></span>
            <span>🎯 Taxa de Conversão: <strong style="color:#006994;">${taxaConversao}%</strong></span>
        `;
    }
    
    if (todos.length === 0) {
        body.innerHTML = '<tr><td colspan="7" style="text-align:center;padding:40px;">📭 Nenhuma aula experimental encontrada neste período</td></tr>';
        return;
    }
    
    body.innerHTML = todos.map(item => {
        let statusHtml = '';
        const resultado = item.resultado || '';
        
        if (resultado === 'compareceu') {
            statusHtml = '<span style="background:#dcfce7;color:#15803d;padding:4px 10px;border-radius:20px;font-size:0.75rem;">✅ Compareceu</span>';
        } else if (resultado === 'nao_compareceu') {
            statusHtml = '<span style="background:#fee2e2;color:#b91c1c;padding:4px 10px;border-radius:20px;font-size:0.75rem;">❌ Faltou</span>';
        } else {
            statusHtml = '<span style="background:#fef3c7;color:#b45309;padding:4px 10px;border-radius:20px;font-size:0.75rem;">📅 Agendado</span>';
        }
        
        if (item.matriculado) {
            statusHtml += ' <span style="background:#dbeafe;color:#1e40af;padding:4px 10px;border-radius:20px;font-size:0.75rem;">📋 Matriculado</span>';
        }
        
        const dataFormatada = item.data && item.data.includes('-') ? formatarDataBR(item.data) : (item.data || '—');
        const telefone = item.telefone || '';
        
        return `
            <tr style="border-bottom:1px solid #e2e8f0;">
                <td style="padding:12px;">${dataFormatada}</td>
                <td style="padding:12px;">${item.horario}</td>
                <td style="padding:12px;"><strong>${item.nome}</strong></td>
                <td style="padding:12px;">${telefone}</td>
                <td style="padding:12px;">${statusHtml}</td>
                <td style="padding:12px;display:flex;gap:4px;flex-wrap:wrap;">
                    <button onclick="editarStatusExperimental('${item.id}', 'compareceu')" style="background:#10b981;color:white;border:none;padding:4px 10px;border-radius:6px;cursor:pointer;font-size:0.7rem;">✅ Compareceu</button>
                    <button onclick="editarStatusExperimental('${item.id}', 'nao_compareceu')" style="background:#ef4444;color:white;border:none;padding:4px 10px;border-radius:6px;cursor:pointer;font-size:0.7rem;">❌ Faltou</button>
                    <button onclick="editarMatriculaExperimental('${item.id}')" style="background:#006994;color:white;border:none;padding:4px 10px;border-radius:6px;cursor:pointer;font-size:0.7rem;">📋 Matricular</button>
                    ${telefone ? `<a href="https://wa.me/55${String(telefone).replace(/\D/g,'')}" target="_blank" style="background:#25d366;color:white;padding:4px 10px;border-radius:6px;text-decoration:none;font-size:0.7rem;">💬 WhatsApp</a>` : ''}
                </td>
            </tr>
        `;
    }).join('');
}

// ============================================================
// EDITAR STATUS DO EXPERIMENTAL NO HISTÓRICO
// ============================================================
async function editarStatusExperimental(id, novoStatus) {
    if (!id) {
        mostrarToast('❌ ID do experimental não encontrado!', 'erro');
        return;
    }
    
    // Verificar se é do histórico ou do experimentais
    let encontrado = false;
    
    // Tentar encontrar no histórico
    try {
        const { data, error } = await supabaseClient
            .from('historico_experimentais')
            .update({ resultado: novoStatus })
            .eq('id', id);
        
        if (!error) {
            encontrado = true;
            mostrarToast(`✅ Status alterado para ${novoStatus === 'compareceu' ? 'Compareceu' : 'Faltou'}!`);
            renderHistoricoExperimentais();
            return;
        }
    } catch (e) {}
    
    // Se não encontrou no histórico, tentar nos experimentais
    const exp = experimentais.find(e => e.id == id);
    if (exp) {
        exp.status = novoStatus;
        await salvarExperimental(exp);
        encontrado = true;
        mostrarToast(`✅ Status alterado para ${novoStatus === 'compareceu' ? 'Compareceu' : 'Faltou'}!`);
        renderHistoricoExperimentais();
        renderizarTudo();
        renderPainelExperimentaisHoje();
        return;
    }
    
    if (!encontrado) {
        mostrarToast('❌ Experimental não encontrado!', 'erro');
    }
}

// ============================================================
// EDITAR MATRÍCULA DO EXPERIMENTAL NO HISTÓRICO
// ============================================================
async function editarMatriculaExperimental(id) {
    if (!id) {
        mostrarToast('❌ ID do experimental não encontrado!', 'erro');
        return;
    }
    
    // Tentar encontrar no histórico
    try {
        const { data, error } = await supabaseClient
            .from('historico_experimentais')
            .select('*')
            .eq('id', id)
            .single();
        
        if (!error && data) {
            const novoStatus = data.matriculado ? false : true;
            const { error: updateError } = await supabaseClient
                .from('historico_experimentais')
                .update({ matriculado: novoStatus })
                .eq('id', id);
            
            if (!updateError) {
                mostrarToast(`✅ ${novoStatus ? 'Matrícula efetivada' : 'Matrícula removida'}!`);
                renderHistoricoExperimentais();
                return;
            }
        }
    } catch (e) {}
    
    // Se não encontrou no histórico, tentar nos experimentais
    const exp = experimentais.find(e => e.id == id);
    if (exp) {
        // Se o experimental existe, efetivar matrícula
        matricularExperimentalInSuper(exp.id);
        return;
    }
    
    mostrarToast('❌ Experimental não encontrado!', 'erro');
}

function exportarHistoricoExperimentais() {
    const body = document.getElementById('historicoExperimentaisBody');
    if (!body) return;
    
    const rows = [];
    const cabecalho = ['Data', 'Horário', 'Nome', 'Telefone', 'Status', 'Matriculado'];
    rows.push(cabecalho);
    
    document.querySelectorAll('#historicoExperimentaisBody tr').forEach(tr => {
        const cells = tr.querySelectorAll('td');
        if (cells.length >= 5) {
            const data = cells[0]?.innerText || '';
            const horario = cells[1]?.innerText || '';
            const nome = cells[2]?.innerText || '';
            const telefone = cells[3]?.innerText || '';
            const status = cells[4]?.innerText?.replace(/\n/g, ' ').trim() || '';
            const matriculado = status.includes('Matriculado') ? 'Sim' : 'Não';
            rows.push([data, horario, nome, telefone, status, matriculado]);
        }
    });
    
    const csv = rows.map(row => row.join(',')).join('\n');
    const blob = new Blob(["\uFEFF" + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const dataAtual = formatarData().replace(/\//g, '-');
    a.href = url;
    a.download = `historico_experimentais_${dataAtual}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    mostrarToast('✅ Histórico exportado!');
}

// ============================================================
// FUNÇÕES DE LISTAS (ALUNOS)
// ============================================================
let listaAlunosFiltro = 'todos';

function filtrarListaAlunos(tipo, btn) {
    listaAlunosFiltro = tipo;
    const container = btn.parentElement;
    container.querySelectorAll('.filter-chip').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderStudentTableSuper();
}

function renderStudentTableSuper() {
    const body = document.getElementById('superStudentTableBody');
    if (!body) return;
    const txt = document.getElementById('superStudentSearch')?.value.toLowerCase() || '';
    let filtrados = alunos.filter(a => {
        const match = String(a.nome).toLowerCase().includes(txt) || String(a.telefone).includes(txt) || String(a.codigo).includes(txt);
        if (listaAlunosFiltro === 'pausados') return match && a.status === 'PAUSADO';
        if (listaAlunosFiltro === 'trancados') return match && a.status === 'TRANCADO';
        return match;
    });
    body.innerHTML = filtrados.map(a => {
        const fin = verificarVencimento(a.vencimento);
        const dateClean = limparData(a.vencimento);
        let dParticipa = [];
        if (a.seg) dParticipa.push("Seg"); if (a.ter) dParticipa.push("Ter");
        if (a.qua) dParticipa.push("Qua"); if (a.qui) dParticipa.push("Qui");
        if (a.sex) dParticipa.push("Sex"); if (a.sab) dParticipa.push("Sáb");
        return `
            <tr>
                <td style="padding:8px;">#${a.codigo}</td>
                <td style="padding:8px;"><strong>${a.nome}</strong></td>
                <td style="padding:8px;">${a.telefone}</td>
                <td style="padding:8px;"><span class="badge ${fin.vencido ? 'badge-vencido' : 'badge-emdia'}">${dateClean}</span></td>
                <td style="padding:8px;">${badgeStatus(a.status)}</td>
                <td style="padding:8px;">${dParticipa.join(', ') || 'Nenhum'}</td>
                <td style="padding:8px;display:flex;gap:6px;flex-wrap:wrap;">
                    <a href="https://wa.me/55${String(a.telefone).replace(/\D/g,'')}" target="_blank" class="btn-whatsapp-speed" style="padding:5px 8px;font-size:0.7rem;">💬 WA</a>
                    <button onclick="abrirEdicaoCompletaInline(${a.id},null)" style="background:#e0f2fe;color:#0369a1;border:none;padding:5px 8px;border-radius:6px;font-weight:bold;font-size:0.7rem;cursor:pointer;">✏️ Editar</button>
                    <button onclick="abrirModalObs(${a.id},null)" style="background:#fef9c3;color:#854d0e;border:none;padding:5px 8px;border-radius:6px;font-weight:bold;font-size:0.7rem;cursor:pointer;">📝 Obs</button>
                    <button onclick="excluirAlunoPermanente(${a.id},null)" style="background:#fee2e2;color:#b91c1c;border:none;padding:5px 8px;border-radius:6px;font-weight:bold;font-size:0.7rem;cursor:pointer;">🗑️ Excluir</button>
                </td>
            </tr>
        `;
    }).join('');
}

function renderVencidosSuper() {
    const body = document.getElementById('superVencidosBody');
    if (!body) return;
    const vencidos = alunos.filter(a => {
        if (a.status === 'TRANCADO' || a.status === 'PAUSADO') return false;
        return verificarVencimento(a.vencimento).vencido;
    });
    if (vencidos.length === 0) { body.innerHTML = '<tr><td colspan="7" style="text-align:center;padding:30px;">✅ Nenhum aluno vencido!</td></tr>'; return; }
    body.innerHTML = vencidos.map(a => {
        const fin = verificarVencimento(a.vencimento);
        const dateClean = limparData(a.vencimento);
        let dParticipa = [];
        if (a.seg) dParticipa.push("Seg"); if (a.ter) dParticipa.push("Ter");
        if (a.qua) dParticipa.push("Qua"); if (a.qui) dParticipa.push("Qui");
        if (a.sex) dParticipa.push("Sex"); if (a.sab) dParticipa.push("Sáb");
        return `<tr><td>#${a.codigo}</td><td><strong>${a.nome}</strong></td><td><a href="https://wa.me/55${String(a.telefone).replace(/\D/g,'')}" target="_blank" style="color:#25d366;">💬 ${a.telefone}</a></td><td><span class="badge badge-vencido">${dateClean}</span></td><td>${badgeStatus(a.status)}</td><td>${dParticipa.join(', ') || 'Nenhum'}</td><td><button onclick="abrirEdicaoCompletaInline(${a.id},null)" style="background:#e0f2fe;color:#0369a1;border:none;padding:5px 8px;border-radius:6px;cursor:pointer;">✏️ Editar</button><button onclick="abrirModalObs(${a.id},null)" style="background:#fef9c3;color:#854d0e;border:none;padding:5px 8px;border-radius:6px;cursor:pointer;">📝 Obs</button><button onclick="excluirAlunoPermanente(${a.id},null)" style="background:#fee2e2;color:#b91c1c;border:none;padding:5px 8px;border-radius:6px;cursor:pointer;">🗑️ Excluir</button></td></tr>`;
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
            return `<div style="display:flex;align-items:center;gap:5px;"><span style="font-size:0.7rem;width:40px;">${dia.substring(0,3)}:</span><select class="inc-select-${a.id}-${campo}" style="flex:1;"><option value="">--</option>${turmasCompativeis.map(h => `<option value="${h.id}">${h.horario}</option>`).join('')}</select></div>`;
        }).join('');
        return `<tr><td>${a.nome}</td><td><div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:4px;">${gradeHtml}</div></td><td><button class="btn-save" data-id="${a.id}">💾 Salvar</button></td></tr>`;
    }).join('');
    document.querySelectorAll('.btn-save').forEach(btn => btn.addEventListener('click', function() { vincularIncompleto(this.getAttribute('data-id')); }));
}

function vincularIncompleto(id) {
    const al = alunos.find(a => a.id == id);
    if (!al) return;
    ['seg','ter','qua','qui','sex','sab'].forEach(campo => {
        const select = document.querySelector(`.inc-select-${al.id}-${campo}`);
        if (select && select.value) al[campo] = parseInt(select.value);
    });
    al.status = 'ATIVO';
    salvarAluno(al);
    abrirSuperModal('incompletos');
}

function fecharSuperModal(e) { if (e && e.target !== e.currentTarget) return; document.getElementById('globalSuperModal').classList.remove('active'); }

// ============================================================
// FAB + FORMULÁRIOS
// ============================================================
function toggleFabMenu() { document.getElementById('fabContainer')?.classList.toggle('active'); }

function abrirFormularioSobreposto(tipo) {
    const modal = document.getElementById('globalSuperModal');
    const titulo = document.getElementById('superModalTitulo');
    const corpo = document.getElementById('superModalCorpo');
    if (!modal) return;
    document.getElementById('fabContainer')?.classList.remove('active');
    modal.classList.add('active');

    if (tipo === 'cadastro') {
        titulo.innerHTML = '📋 Matricular Novo Aluno';
        const diasSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
        const diasMapLocal = { 'Segunda': 'seg', 'Terça': 'ter', 'Quarta': 'qua', 'Quinta': 'qui', 'Sexta': 'sex', 'Sábado': 'sab' };
        const selectGradeHtml = diasSemana.map(dia => `<div><label>${dia}:</label><select id="cadGrade${diasMapLocal[dia]}" class="form-select-field" onchange="atualizarCardsCadastro()"><option value="">[ Não treina ]</option></select><div id="cardDisponibilidade${diasMapLocal[dia]}" style="font-size:0.7rem;"></div></div>`).join('');
        corpo.innerHTML = `
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;"><div><label>Código:</label><input type="number" id="fabCodigo" class="search-input-field"></div><div><label>Nome:</label><input type="text" id="fName" class="search-input-field"></div><div><label>Telefone:</label><input type="text" id="fPhone" class="search-input-field"></div><div><label>Vencimento:</label><input type="text" id="fVenc" class="search-input-field" value="${formatarData()}"></div><div style="grid-column:1/-1;"><label>Modalidade:</label><select id="fMod" class="form-select-field modalidade-select" onchange="filtrarTurmasPorModalidade()">${modalidadesDisponiveis.map(m => `<option value="${m}">${m}</option>`).join('')}</select></div></div>
            <div style="background:#edf2f7;padding:15px;border-radius:8px;margin:15px 0;"><span style="font-weight:bold;">🗓️ Vincular Turmas:</span><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:10px;margin-top:10px;">${selectGradeHtml}</div></div>
            <div class="form-actions-row"><button class="btn-save-modal" onclick="salvarMatriculaFab()">💾 Matricular</button><button class="btn-discard-modal" onclick="fecharSuperModal()">Cancelar</button></div>
        `;
        filtrarTurmasPorModalidade();
    } else if (tipo === 'experimental') {
        titulo.innerHTML = '🧪 Agendar Experimental';
        const modalidades = [...new Set(horariosConfig.map(h => h.modalidade))];
        corpo.innerHTML = `
            <div><div><label>Nome:</label><input type="text" id="fExpN" class="search-input-field"></div>
            <div style="margin-top:12px;"><label>Telefone:</label><input type="text" id="fExpP" class="search-input-field"></div>
            <div style="margin-top:12px;"><label>Data da Aula:</label><input type="date" id="fExpData" class="search-input-field" value="${formatarDataISO()}"></div>
            <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-top:12px;">
                <div><label>Modalidade:</label><select id="fExpMod" class="form-select-field" onchange="filtrarExpDias()"><option value="">-- Selecione --</option>${modalidades.map(m => `<option value="${m}">${m}</option>`).join('')}</select></div>
                <div><label>Dia:</label><select id="fExpDia" class="form-select-field" onchange="filtrarExpHorarios()" disabled><option value="">-- Selecione --</option></select></div>
                <div><label>Horário:</label><select id="fExpH" class="form-select-field" disabled><option value="">-- Selecione --</option></select></div>
            </div>
            <div id="expOcupacaoInfo" style="margin-top:12px;padding:10px;border-radius:8px;display:none;"></div>
            <div class="form-actions-row" style="margin-top:20px;"><button class="btn-save-modal" style="background:#b45309;" onclick="salvarExpFab()">💾 Agendar</button><button class="btn-discard-modal" onclick="fecharSuperModal()">Cancelar</button></div>
        `;
    }
}

function atualizarCardsCadastro() {
    const mod = document.getElementById('fMod').value;
    const dias = ['seg','ter','qua','qui','sex','sab'];
    const diasNomes = ['Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
    dias.forEach((campo, idx) => {
        const select = document.getElementById('cadGrade' + campo);
        const cardDiv = document.getElementById('cardDisponibilidade' + campo);
        if (select && select.value && cardDiv) {
            const horarioId = parseInt(select.value);
            const horario = horariosConfig.find(h => h.id === horarioId);
            if (horario) {
                const ocupacao = getOcupacaoHorarioDia(horarioId, [diasNomes[idx]]);
                const capacidade = horario.capacidade;
                let cor = '#10b981';
                if (ocupacao >= capacidade) cor = '#ef4444';
                else if (ocupacao >= capacidade * 0.7) cor = '#f59e0b';
                cardDiv.innerHTML = `<span style="color:${cor};">📊 ${ocupacao}/${capacidade}</span>`;
                if (ocupacao >= capacidade) cardDiv.innerHTML += ` <span style="color:#ef4444;">⚠️ Lotada!</span>`;
            }
        } else if (cardDiv) cardDiv.innerHTML = '';
    });
}

function filtrarTurmasPorModalidade() {
    const mod = document.getElementById('fMod').value;
    const dias = ['seg','ter','qua','qui','sex','sab'];
    const diasNomes = ['Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
    dias.forEach((campo, idx) => {
        const select = document.getElementById('cadGrade' + campo);
        if (!select) return;
        const turmas = horariosConfig.filter(hc => hc.dias.includes(diasNomes[idx]) && hc.modalidade === mod);
        select.innerHTML = '<option value="">[ Não treina ]</option>' + turmas.map(hc => `<option value="${hc.id}">${hc.horario}</option>`).join('');
        select.onchange = () => atualizarCardsCadastro();
    });
}

function filtrarExpDias() {
    const mod = document.getElementById('fExpMod').value;
    const selectDia = document.getElementById('fExpDia');
    const selectH = document.getElementById('fExpH');
    selectDia.innerHTML = '<option value="">-- Selecione --</option>';
    selectH.innerHTML = '<option value="">-- Selecione o dia --</option>';
    selectH.disabled = true;
    if (!mod) { selectDia.disabled = true; return; }
    const dias = [...new Set(horariosConfig.filter(h => h.modalidade === mod).flatMap(h => h.dias))];
    const ordem = ['Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
    dias.sort((a, b) => ordem.indexOf(a) - ordem.indexOf(b));
    dias.forEach(dia => selectDia.innerHTML += `<option value="${dia}">${dia}</option>`);
    selectDia.disabled = false;
}

function filtrarExpHorarios() {
    const mod = document.getElementById('fExpMod').value;
    const dia = document.getElementById('fExpDia').value;
    const selectH = document.getElementById('fExpH');
    selectH.innerHTML = '<option value="">-- Selecione --</option>';
    if (!dia) { selectH.disabled = true; return; }
    horariosConfig.filter(h => h.modalidade === mod && h.dias.includes(dia)).forEach(h => selectH.innerHTML += `<option value="${h.id}_${dia}">${h.horario}</option>`);
    selectH.disabled = false;
    selectH.onchange = () => {
        const valor = selectH.value;
        const infoDiv = document.getElementById('expOcupacaoInfo');
        if (!valor || !infoDiv) return;
        const [hId, diaSel] = valor.split('_');
        const horario = horariosConfig.find(h => h.id == parseInt(hId));
        if (horario) {
            const ocupacao = getOcupacaoHorarioDia(parseInt(hId), [diaSel]);
            infoDiv.style.display = 'block';
            infoDiv.style.background = '#e0f2fe';
            infoDiv.innerHTML = `📊 Ocupação: ${ocupacao}/${horario.capacidade}`;
            if (ocupacao >= horario.capacidade) infoDiv.innerHTML += ` ⚠️ Turma LOTADA!`;
        }
    };
}

function salvarMatriculaFab() {
    const codigo = document.getElementById('fabCodigo').value;
    const nome = document.getElementById('fName').value.trim();
    const telefone = document.getElementById('fPhone').value.trim();
    const modalidade = document.getElementById('fMod').value;
    const vencimento = document.getElementById('fVenc').value;
    
    const seg = document.getElementById('cadGradeseg')?.value ? parseInt(document.getElementById('cadGradeseg').value) : '';
    const ter = document.getElementById('cadGradeter')?.value ? parseInt(document.getElementById('cadGradeter').value) : '';
    const qua = document.getElementById('cadGradequa')?.value ? parseInt(document.getElementById('cadGradequa').value) : '';
    const qui = document.getElementById('cadGradequi')?.value ? parseInt(document.getElementById('cadGradequi').value) : '';
    const sex = document.getElementById('cadGradesex')?.value ? parseInt(document.getElementById('cadGradesex').value) : '';
    const sab = document.getElementById('cadGradesab')?.value ? parseInt(document.getElementById('cadGradesab').value) : '';
    
    if (!codigo) { alert('⚠️ Digite o código do aluno!'); return; }
    if (!nome) { alert('⚠️ Digite o nome do aluno!'); return; }
    if (!telefone) { alert('⚠️ Digite o telefone do aluno!'); return; }
    
    const codigoNumero = parseInt(codigo);
    if (isNaN(codigoNumero)) {
        alert('⚠️ Código inválido! Digite apenas números.');
        return;
    }
    
    const codigoExistente = alunos.find(a => a.codigo === codigoNumero);
    if (codigoExistente) { 
        alert(`⚠️ Código ${codigoNumero} já está em uso por ${codigoExistente.nome}!`); 
        return; 
    }
    
    const statusDef = (!seg && !ter && !qua && !qui && !sex && !sab) ? 'PENDENTE' : 'ATIVO';
    const novoAluno = { 
        codigo: codigoNumero,
        nome: nome,
        telefone: telefone,
        vencimento: vencimento,
        modalidade: modalidade,
        seg: seg,
        ter: ter,
        qua: qua,
        qui: qui,
        sex: sex,
        sab: sab,
        status: statusDef,
        observacao: ''
    };
    
    console.log("Salvando aluno:", novoAluno);
    
    alunos.push(novoAluno);
    salvarAluno(novoAluno);
    renderizarTudo();
    renderPainelExperimentaisHoje();
    fecharSuperModal();
    mostrarToast(`✅ ${nome} matriculado com sucesso!`);
}

function salvarExpFab() {
    const nome = document.getElementById('fExpN').value.trim();
    const telefone = document.getElementById('fExpP').value.trim();
    const data = document.getElementById('fExpData').value;
    const valor = document.getElementById('fExpH').value;
    if (!nome || !telefone || !valor) { alert('⚠️ Preencha todos os campos!'); return; }
    if (!data) { alert('⚠️ Selecione a data!'); return; }
    const [hId, dia] = valor.split('_');
    const modalidade = document.getElementById('fExpMod').value;
    const novoExp = { 
        id: ++expIdCounter, 
        nome, 
        telefone, 
        dataAgendada: data, 
        horario_id: parseInt(hId), 
        dia, 
        status: 'agendado', 
        modalidade 
    };
    experimentais.push(novoExp);
    salvarExperimental(novoExp);
    renderizarTudo();
    renderPainelExperimentaisHoje();
    fecharSuperModal();
    mostrarToast(`✅ Experimental agendada para ${formatarDataBR(data)}!`);
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
        if (exp.id) excluirExperimental(exp.id);
        renderizarTudo();
        renderPainelExperimentaisHoje();
    }, 250);
}

// ============================================================
// FUNÇÕES DE EXPORTAÇÃO
// ============================================================
function exportarCSV() {
    const header = [
        'Código',
        'Nome',
        'Telefone',
        'Modalidade Principal',
        'Vencimento',
        'Status',
        'Segunda',
        'Terça',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sábado',
        'Observação'
    ];
    
    const rows = alunos.map(a => {
        const dias = ['seg','ter','qua','qui','sex','sab'];
        const diasNomes = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
        
        let diasInfo = dias.map((campo, idx) => {
            const hId = a[campo];
            if (hId) {
                const horario = horariosConfig.find(h => h.id == hId);
                return horario ? `${diasNomes[idx]}: ${horario.horario} (${horario.modalidade})` : '';
            }
            return '';
        });
        
        return [
            a.codigo || '',
            a.nome || '',
            a.telefone || '',
            a.modalidade || '',
            a.vencimento || '',
            a.status || 'ATIVO',
            diasInfo[0] || '',
            diasInfo[1] || '',
            diasInfo[2] || '',
            diasInfo[3] || '',
            diasInfo[4] || '',
            diasInfo[5] || '',
            (a.observacao || '').replace(/,/g, ';')
        ];
    });
    
    const csv = [header, ...rows].map(r => r.join(',')).join('\n');
    const blob = new Blob(["\uFEFF" + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const dataAtual = formatarData().replace(/\//g, '-');
    a.href = url;
    a.download = `aquacontrol_completo_${dataAtual}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    mostrarToast('✅ CSV completo exportado com ' + alunos.length + ' alunos!');
}

function exportarRelatorioResumido() {
    const totalAlunos = contarAlunosUnicos();
    const matriculas = contarMatriculasPorTurno();
    const vencidos = alunos.filter(a => a.status !== 'TRANCADO' && a.status !== 'PAUSADO' && verificarVencimento(a.vencimento).vencido).length;
    const emDia = totalAlunos - vencidos;
    
    const resumo = [
        ['RELATÓRIO AQUACONTROL'],
        ['Data:', formatarData()],
        [''],
        ['RESUMO GERAL'],
        ['Total de Alunos Únicos:', totalAlunos],
        ['Alunos em Dia:', emDia],
        ['Alunos Vencidos:', vencidos],
        ['Matrículas Manhã:', matriculas.manha],
        ['Matrículas Tarde:', matriculas.tarde],
        ['Matrículas Noite:', matriculas.noite],
        ['Matrículas Sábado:', matriculas.sabado],
        ['Total de Matrículas:', matriculas.manha + matriculas.tarde + matriculas.noite + matriculas.sabado],
        [''],
        ['ALUNOS DETALHADOS'],
        ['Código', 'Nome', 'Telefone', 'Modalidade', 'Vencimento', 'Status', 'Dias']
    ];
    
    alunos.forEach(a => {
        const dias = ['seg','ter','qua','qui','sex','sab'];
        const diasNomes = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
        let diasParticipa = dias.map((campo, idx) => {
            if (a[campo]) {
                const horario = horariosConfig.find(h => h.id == a[campo]);
                return horario ? `${diasNomes[idx]}(${horario.horario})` : '';
            }
            return '';
        }).filter(d => d).join(' | ');
        
        resumo.push([
            a.codigo || '',
            a.nome || '',
            a.telefone || '',
            a.modalidade || '',
            a.vencimento || '',
            a.status || 'ATIVO',
            diasParticipa || 'Nenhum'
        ]);
    });
    
    const csv = resumo.map(r => r.join(',')).join('\n');
    const blob = new Blob(["\uFEFF" + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const dataAtual = formatarData().replace(/\//g, '-');
    a.href = url;
    a.download = `relatorio_aquacontrol_${dataAtual}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    mostrarToast('✅ Relatório exportado com sucesso!');
}

async function verificarSalvamento() {
    console.log("🔍 VERIFICANDO SALVAMENTO...");
    console.log("📊 Alunos na memória:", alunos.length);
    console.log("📊 Turmas na memória:", horariosConfig.length);
    
    try {
        const { data: alunosDB, error: errAlunos, count } = await supabaseClient
            .from('alunos')
            .select('*', { count: 'exact', head: true });
        
        const alunosFirebase = errAlunos ? 0 : count;
        console.log("📊 Alunos no Supabase:", alunosFirebase);
        
        const { data: configDB, error: errConfig } = await supabaseClient
            .from('config')
            .select('valor')
            .eq('chave', 'turmas')
            .single();
        
        let turmasFirebase = 0;
        if (configDB && configDB.valor) {
            const turmas = typeof configDB.valor === 'string' ? JSON.parse(configDB.valor) : configDB.valor;
            turmasFirebase = turmas.length;
        }
        console.log("📊 Turmas no Supabase:", turmasFirebase);
        
        let msg = `📊 Alunos: ${alunos.length} (memória) vs ${alunosFirebase} (Supabase)`;
        if (alunos.length === alunosFirebase) {
            msg += ' ✅ OK';
            mostrarToast(msg, 'sucesso');
        } else {
            msg += ' ⚠️ DIFERENÇA!';
            mostrarToast(msg, 'erro');
        }
        
        let msgTurmas = `📊 Turmas: ${horariosConfig.length} (memória) vs ${turmasFirebase} (Supabase)`;
        if (horariosConfig.length === turmasFirebase) {
            msgTurmas += ' ✅ OK';
            mostrarToast(msgTurmas, 'sucesso');
        } else {
            msgTurmas += ' ⚠️ DIFERENÇA!';
            mostrarToast(msgTurmas, 'erro');
        }
        
        console.log("✅ Verificação concluída!");
        
    } catch (erro) {
        console.error("❌ Erro ao verificar:", erro);
        mostrarToast('❌ Erro ao verificar dados!', 'erro');
    }
}

async function salvarTudo() {
    const btn = document.getElementById('btnSalvarTudo');
    if (btn) {
        btn.textContent = '⏳ Salvando...';
        btn.classList.add('salvando');
    }
    
    //mostrarToast('🔄 Salvando todas as informações...', 'info');
    
    let sucesso = true;
    const turmasOk = await salvarTurmas();
    if (!turmasOk) sucesso = false;
    
    try {
        for (const aluno of alunos) {
            await salvarAluno(aluno);
        }
        console.log("✅ Alunos salvos com sucesso!");
    } catch (erro) {
        console.error("❌ Erro ao salvar alunos:", erro);
        sucesso = false;
    }
    
    if (btn) {
        btn.textContent = '💾 SALVAR TUDO';
        btn.classList.remove('salvando');
        if (sucesso) btn.classList.add('salvo');
    }
    
    //if (sucesso) {
      //  mostrarToast('✅ Todas as informações foram salvas com sucesso!', 'sucesso');
    //} else {
      //  mostrarToast('⚠️ Alguns dados podem não ter sido salvos. Verifique o console.', 'erro');
    //}
}

function corrigirAlunosComCodigoInvalido() {
    let corrigidos = 0;
    
    alunos.forEach(aluno => {
        if (isNaN(aluno.codigo) || aluno.codigo === null || aluno.codigo === undefined || aluno.codigo === '') {
            const novoCodigo = 2000 + corrigidos;
            aluno.codigo = novoCodigo;
            corrigidos++;
            console.log(`Corrigido: ${aluno.nome} recebeu código ${novoCodigo}`);
            salvarAluno(aluno);
        }
    });
    
    if (corrigidos > 0) {
        mostrarToast(`✅ Corrigidos ${corrigidos} alunos com código inválido!`);
        renderizarTudo();
        renderStudentTableSuper();
    } else {
        console.log("Nenhum aluno com código inválido encontrado");
    }
}

function toggleTheme() {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('aqua_theme', isDark ? 'dark' : 'light');
    document.getElementById('themeIcon').textContent = isDark ? '☀️' : '🌙';
}

(function() { 
    if (localStorage.getItem('aqua_theme') === 'dark') document.body.classList.add('dark'); 
})();

// ============================================================
// INICIALIZAÇÃO
// ============================================================
window.onload = function() {
    if (localStorage.getItem("aqua_authenticated") === "true") {
        document.getElementById("loginScreen").style.display = "none";
        document.getElementById("appContainer").style.display = "block";
        carregarDados();
    }
    
    setInterval(() => {
        console.log("🔄 Auto-save executado em:", new Date().toLocaleTimeString());
        salvarTudo();
    }, 60000);
    
    setInterval(() => { 
        renderPainelExperimentaisHoje(); 
        renderizarTudo(); 
    }, 30000);
};