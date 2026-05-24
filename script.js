// ============================================================
// CONFIGURAÇÕES GLOBAIS E LINKS DE INTEGRAÇÃO
// ============================================================
const MASTER_PASSWORD = "aqua123";

// Firebase Config
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
// GRADE HORÁRIA COMPLETA DA ACADEMIA (73 HORÁRIOS ORIGINAIS)
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
// ESTADOS DA APLICAÇÃO (VARIÁVEIS GLOBAIS PERSISTENTES)
// ============================================================
let alunos = [];
let experimentais = [];
let studentIdCounter = 1000;
let expIdCounter = 1000;
let historicoFaltasExperimentais = {};

// Controle de Multi-Filtros do Hub Eterno
let activeFilters = { modalidade: 'TODAS', turno: 'TODOS', ocupacao: 'TODOS' };
const diasMap = { 'Segunda': 'seg', 'Terça': 'ter', 'Quarta': 'qua', 'Quinta': 'qui', 'Sexta': 'sex', 'Sábado': 'sab' };

// ============================================================
// LOGIN E CONEXÃO ASYNCRONA (GOOGLE SCRIPT PAYLOAD)
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
    }
}
// ============================================================
// RELATÓRIOS E COMPILADORES DE CAPACIDADE
// ============================================================
function getAlunosPorHorario(horarioId) {
    const horario = horariosConfig.find(h => h.id == horarioId);
    if (!horario) return [];
    return alunos.filter(aluno => {
        for (const dia of horario.dias) {
            if (aluno[diasMap[dia]] == horarioId) return true;
        }
        return false;
    });
}

function getOcupacaoHorario(horarioId) { return getAlunosPorHorario(horarioId).length; }
function formatarData() { const h = new Date(); return `${String(h.getDate()).padStart(2,'0')}/${String(h.getMonth()+1).padStart(2,'0')}`; }

function verificarVencimento(dataVenc) {
    if (!dataVenc) return { vencido: false, texto: "Sem data" };
    
    let dataStr = String(dataVenc);
    
    // Limpa formato ISO: "2026-07-10T03:00:00.000Z" → "10/07"
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

// ============================================================
// INTEGRAÇÃO DOS MULTI-FILTROS NO HUB ETERNO
// ============================================================
function filtrarTurnoHub(t, b) { activeFilters.turno = t; b.parentElement.querySelectorAll('button').forEach(x => x.classList.remove('active')); b.classList.add('active'); renderizarTudo(); }
function filtrarModalidadeHub(m, b) { activeFilters.modalidade = m; b.parentElement.querySelectorAll('button').forEach(x => x.classList.remove('active')); b.classList.add('active'); renderizarTudo(); }
function filtrarOcupacaoHub(o, b) { activeFilters.ocupacao = o; b.parentElement.querySelectorAll('button').forEach(x => x.classList.remove('active')); b.classList.add('active'); renderizarTudo(); }
// ============================================================
// WIDGETS GLOBAIS: CONVERSÃO DOS 8 MARCADORES DE FLUXO
// ============================================================
function atualizarWidgets() {
    const totalAlunos = alunos.length;
    let vencidos = 0;
    let emDia = 0;
    
    alunos.forEach(a => {
        if (verificarVencimento(a.vencimento).vencido) vencidos++;
        else emDia++;
    });

    let manha = 0, tarde = 0, noite = 0, sabado = 0;
    alunos.forEach(a => {
        const dias = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab'];
        dias.forEach(d => {
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
        <div class="widget aluno-counter">
            <div class="val">${totalAlunos}</div>
            <div class="lbl">🎯 Total Alunos</div>
            <div class="sub">No Sistema</div>
        </div>
        <div class="widget vencidos-border">
            <div class="val" style="color: #ef4444;">${vencidos}</div>
            <div class="lbl">⚠️ Vencidos</div>
            <div class="sub">Planos Atrasados</div>
        </div>
        <div class="widget emdia-border">
            <div class="val" style="color: #10b981;">${emDia}</div>
            <div class="lbl">✅ Em Dia</div>
            <div class="sub">Planos Ativos</div>
        </div>
        <div class="widget">
            <div class="val">${manha}</div>
            <div class="lbl">🌅 Manhã</div>
            <div class="sub">Matrículas</div>
        </div>
        <div class="widget">
            <div class="val">${tarde}</div>
            <div class="lbl">☀️ Tarde</div>
            <div class="sub">Matrículas</div>
        </div>
        <div class="widget">
            <div class="val">${noite}</div>
            <div class="lbl">🌙 Noite</div>
            <div class="sub">Matrículas</div>
        </div>
        <div class="widget">
            <div class="val">${sabado}</div>
            <div class="lbl">📅 Sábados</div>
            <div class="sub">Matrículas</div>
        </div>
        <div class="widget">
            <div class="val">${pctOcupacao}%</div>
            <div class="lbl">📊 Ocupação</div>
            <div class="progress-mini"><div class="progress-mini-fill" style="width: ${pctOcupacao}%"></div></div>
        </div>
    `;
}

function mostrarToast(msg, tipo = 'sucesso') {
    let t = document.getElementById('toastGlobal');
    if (!t) {
        t = document.createElement('div');
        t.id = 'toastGlobal';
        t.className = 'toast';
        document.body.appendChild(t);
    }
    t.textContent = msg;
    t.className = `toast ${tipo === 'erro' ? 'erro' : ''}`;
    setTimeout(() => t.classList.add('show'), 10);
    setTimeout(() => t.classList.remove('show'), 3000);
}

// ============================================================
// DESIGN DO APP: RENDERIZAÇÃO DA HOME PRINCIPAL (CARDS)
// ============================================================
// ============================================================
// DESIGN DO APP: RENDERIZAÇÃO DA HOME PRINCIPAL (CARDS)
// ============================================================
function renderizarTudo() {
    const grid = document.getElementById('cardsGrid');
    if (!grid) return;

    atualizarWidgets();

    const diaFiltro = document.getElementById('filtroDiaSemana')?.value || 'TODOS';
    const query = document.getElementById('searchBar')?.value.toLowerCase() || '';

    let filtrados = horariosConfig.filter(h => {
        const matchTurno = activeFilters.turno === 'TODOS' || h.turno === activeFilters.turno;
        const matchMod = activeFilters.modalidade === 'TODAS' || h.modalidade === activeFilters.modalidade;
        
        let matchOcup = true;
        const qtd = getOcupacaoHorario(h.id);
        if (activeFilters.ocupacao === 'COM_ALUNOS') matchOcup = qtd > 0;
        else if (activeFilters.ocupacao === 'VAZIAS') matchOcup = qtd === 0;
        else if (activeFilters.ocupacao === 'LOTADAS') matchOcup = qtd >= h.capacidade;
        else if (activeFilters.ocupacao === 'COM_VAGAS') matchOcup = qtd < h.capacidade;
        else if (activeFilters.ocupacao === 'VENCIDOS') matchOcup = getAlunosPorHorario(h.id).some(a => verificarVencimento(a.vencimento).vencido);
        else if (activeFilters.ocupacao === 'COM_EXPERIMENTAIS') matchOcup = experimentais.some(e => e.horario_id === h.id && e.status === 'agendado');

        return matchTurno && matchMod && matchOcup;
    });

    if (diaFiltro !== 'TODOS') {
        filtrados = filtrados.filter(h => h.dias.includes(diaFiltro));
    }

    if (query) {
        filtrados = filtrados.filter(h => {
            const matchHor = h.horario.includes(query) || h.modalidade.toLowerCase().includes(query);
            const matchAl = getAlunosPorHorario(h.id).some(a => String(a.nome).toLowerCase().includes(query));
            return matchHor || matchAl;
        });
    }

    if (filtrados.length === 0) {
        grid.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:40px; color:#94a3b8; font-weight:600;">🔍 Nenhum horário atende aos filtros aplicados.</div>';
        return;
    }

    grid.innerHTML = filtrados.map(h => {
        const qtd = getOcupacaoHorario(h.id);
        const pct = Math.min((qtd / h.capacidade) * 100, 100);
        const corBarra = pct >= 100 ? '#ef4444' : (pct >= 70 ? '#f59e0b' : '#10b981');
        // experimentais agendados neste horario
        const expQtd = experimentais.filter(e => e.horario_id === h.id && e.status === 'agendado').length;

      return `
            <div class="card" onclick="abrirModalHorario(${h.id})" style="border-top: 4px solid ${corBarra};">
                <div class="card-header">
                    <h3><span>${h.modalidade}</span> <span class="horario">${h.horario}</span></h3>
                    <div class="dias">📅 ${h.dias.join(' • ')}</div>
                </div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:12px; font-size:0.9rem; font-weight:700; color:#475569;">
                    <span>👥 Alunos: ${qtd}/${h.capacidade}</span>
                    ${expQtd > 0 ? `<span style="background:#b45309; color:white; padding:2px 6px; border-radius:4px; font-size:0.75rem;">🧪 ${expQtd} exp</span>` : ''}
                </div>
                <div class="progress-bar"><div class="progress-fill" style="width: ${pct}%; background: ${corBarra};"></div></div>
            </div>
        `;
    }).join('');

    atualizarMonitorTempoReal();
}

// ============================================================
// ACESSIBILIDADE: SOBRETELA DO CARD DA TURMA E CENTRAL DE ALUNOS
// ============================================================
function abrirModalHorario(horarioId) {
    const horario = horariosConfig.find(h => h.id === horarioId);
    if (!horario) return;

    const alunosMatriculados = getAlunosPorHorario(horarioId);
    const listaExp = experimentais.filter(e => e.horario_id === horarioId);

    const modal = document.getElementById('globalSuperModal');
    const titulo = document.getElementById('superModalTitulo');
    const corpo = document.getElementById('superModalCorpo');
    if (!modal || !corpo || !titulo) return;

    titulo.innerHTML = `🏊‍♂️ Turma: ${horario.modalidade} (${horario.horario})`;

    corpo.innerHTML = `
        <div style="margin-bottom: 20px; font-size: 1.1rem; background: #e0f2fe; padding: 15px; border-radius: 10px; border-left: 5px solid #006994; color:#0369a1; font-weight:600;">
            📅 Dias Fixos: ${horario.dias.join(', ')} | 👥 Lotação: ${alunosMatriculados.length}/${horario.capacidade} Matrículas
        </div>
        
        <div id="centralFormEdicaoContainer" style="display:none; background:#f8fafc; padding:22px; border-radius:12px; margin-bottom:25px; border:2px dashed #006994;"></div>

        <div style="display: flex; gap: 25px; flex-wrap: wrap; align-items: flex-start;">
            <div style="flex: 1; min-width: 320px; background: white; border: 1px solid #cbd5e1; border-radius: 12px; padding: 20px;">
                <h3 style="font-size: 1.25rem; color: #006994; border-bottom: 3px solid #006994; padding-bottom: 8px; margin-bottom: 15px;">👥 Alunos Fixos (${alunosMatriculados.length})</h3>
                <div style="max-height: 450px; overflow-y: auto;">
                    ${alunosMatriculados.map(a => {
                        const fin = verificarVencimento(a.vencimento);
                        let dateClean = a.vencimento || '—';
                        if (String(dateClean).includes('T')) {
                            const p = String(dateClean).split('T')[0].split('-');
                            if (p.length === 3) dateClean = `${p[2]}/${p[1]}`;
                        }

                        let dParticipa = [];
                        if (a.seg) dParticipa.push("Seg"); if (a.ter) dParticipa.push("Ter");
                        if (a.qua) dParticipa.push("Qua"); if (a.qui) dParticipa.push("Qui");
                        if (a.sex) dParticipa.push("Sex"); if (a.sab) dParticipa.push("Sáb");

                        return `
                            <div class="aluno-box-item" style="flex-direction: column; align-items: stretch; gap: 10px;">
                                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                                    <div>
                                        <div style="font-size:1.25rem; font-weight:bold; color:var(--text-primary);">${a.nome}</div>

                                        <div style="font-size:0.95rem; color:var(--text-secondary); margin-top:3px;">>📞 Fone: <strong>${a.telefone}</strong> | Venc: <strong>${dateClean}</strong></div>
                                        <div style="font-size:0.9rem; color:#0284c7; font-weight:bold; margin-top:4px;">🗓️ Dias: ${dParticipa.join(' • ') || 'Nenhum'}</div>
                                    </div>
                                    <span class="badge ${fin.vencido ? 'badge-vencido' : 'badge-emdia'}">${fin.texto}</span>
                                </div>
                                <div style="display: flex; gap: 8px; justify-content: flex-end; border-top: 1px solid #f1f5f9; padding-top: 8px;">
                                    <a href="https://wa.me/55${String(a.telefone).replace(/\D/g,'')}" target="_blank" class="btn-whatsapp-speed">💬 WhatsApp</a>
                                    <button onclick="abrirEdicaoCompletaInline(${a.codigo}, ${horarioId})" style="background:#e0f2fe; color:#0369a1; border:none; padding:8px 14px; border-radius:6px; font-weight:bold; font-size:0.85rem; cursor:pointer;">✏️ Editar Aluno</button>
                                </div>
                            </div>
                        `;
                    }).join('') || '<p style="text-align:center; padding:20px; color:#64748b;">Nenhum aluno matriculado.</p>'}
                </div>
            </div>
            
            <div style="flex: 1; min-width: 320px; background: #fffbeb; border: 1px solid #fde68a; border-radius: 12px; padding: 20px;">
                <h3 style="font-size: 1.25rem; color: #b45309; border-bottom: 3px solid #b45309; padding-bottom: 8px; margin-bottom: 15px;">🧪 Experimentais Hoje (${listaExp.length})</h3>
                <div style="max-height: 450px; overflow-y: auto;">
                    ${listaExp.map(exp => {
                        const faltas = historicoFaltasExperimentais[exp.telefone] || 0;
                        const alerta = faltas >= 2 ? `<div style="background:#fee2e2; color:#b91c1c; font-size:0.9rem; font-weight:bold; padding:6px; border-radius:6px; margin-top:5px;">⚠️ ALERTA: Faltou ${faltas} vezes anteriores!</div>` : '';
                        let ind = '', btns = '';

                        if (exp.status === 'agendado') {
                            ind = '<span class="badge" style="background:#fef3c7; color:#b45309;">📅 Agendado</span>';
                            btns = `
                                <button onclick="marcarPresencaExp(${exp.id}, 'compareceu', ${horarioId})" style="background:#10b981; color:white; border:none; padding:10px 14px; border-radius:6px; font-weight:bold; cursor:pointer;">✔️ Veio</button>
                                <button onclick="marcarPresencaExp(${exp.id}, 'nao_compareceu', ${horarioId})" style="background:#ef4444; color:white; border:none; padding:10px 14px; border-radius:6px; font-weight:bold; cursor:pointer;">❌ Faltou</button>
                            `;
                        } else if (exp.status === 'compareceu') {
                            ind = '<span class="badge" style="background:#dcfce7; color:#15803d;">✅ Veio</span>';
                            btns = `<button onclick="matricularExperimentalInSuper(${exp.id})" style="background:#006994; color:white; border:none; padding:10px; border-radius:6px; font-weight:bold; width:100%; cursor:pointer;">📋 Efetivar Matrícula</button>`;
                        } else if (exp.status === 'nao_compareceu') {
                            ind = '<span class="badge" style="background:#fee2e2; color:#b91c1c;">❌ Faltou</span>';
                            btns = `<button onclick="marcarPresencaExp(${exp.id}, 'agendado', ${horarioId})" style="background:#64748b; color:white; border:none; padding:6px 12px; border-radius:6px; cursor:pointer;">🔄 Refazer</button>`;
                        }

                        return `
                            <div style="background:white; padding:14px; border-radius:10px; border:1px solid #fde68a; margin-bottom:10px;">
                                <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                                    <div>
                                        <strong style="font-size:1.15rem; color:#78350f;">${exp.nome}</strong>
                                        <div style="font-size:0.9rem; color:#b45309; margin-top:2px;">📞 ${exp.telefone}</div>
                                        ${alerta}
                                    </div>
                                    <div>${ind}</div>
                                </div>
                                <div style="display:flex; gap:8px; justify-content:flex-end; margin-top:10px;">
                                    <a href="https://wa.me/55${String(exp.telefone).replace(/\D/g, '')}" target="_blank" class="btn-whatsapp-speed">💬 WhatsApp</a>
                                    ${btns}
                                </div>
                            </div>
                        `;
                    }).join('') || '<p style="text-align:center; padding:20px; color:#b45309;">Nenhuma experimental agendada hoje.</p>'}
                </div>
            </div>
        </div>
    `;
    modal.classList.add('active');
}

function marcarPresencaExp(id, st, hId) {
    const exp = experimentais.find(e => e.id === id);
    if (!exp) return;
    if (st === 'nao_compareceu' && exp.status !== 'nao_compareceu') historicoFaltasExperimentais[exp.telefone] = (historicoFaltasExperimentais[exp.telefone] || 0) + 1;
    else if (st === 'agendado' && exp.status === 'nao_compareceu' && historicoFaltasExperimentais[exp.telefone] > 0) historicoFaltasExperimentais[exp.telefone]--;
    exp.status = st;
    renderizarTudo();
    abrirModalHorario(hId);
}

// ============================================================
// 🧠 CENTRAL DE EDIÇÃO COMPLETA (FUNCIONAL NO CARD E NA BUSCA)
// ============================================================
function abrirEdicaoCompletaInline(cod, hId) {
    const a = alunos.find(al => al.codigo == cod);
    if (!a) return;

    // Se hId existir, estamos no Modal da Turma. Se for null, estamos na Busca Central de Alunos
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
            <div style="display:flex; flex-direction:column; gap:4px;">
                <label style="font-size:0.85rem; font-weight:bold; color:#475569;">${dia}:</label>
                <select id="editGrade${campo}" class="form-select-field" style="width:100%; min-width:100%; padding:8px; font-size:0.85rem;">
                    <option value="">[ -- Não treina -- ]</option>
                    ${opcoesDoDia.map(hc => `<option value="${hc.id}" ${valorAtual == hc.id ? 'selected' : ''}>${hc.modalidade} (${hc.horario})</option>`).join('')}
                </select>
            </div>
        `;
    }).join('');

    const btnVoltarHtml = hId 
        ? `<button onclick="document.getElementById('${divId}').style.display='none'" class="btn-discard-modal" style="padding:10px 22px; font-size:0.95rem;">⬅️ Voltar para a Turma</button>`
        : `<button onclick="document.getElementById('${divId}').style.display='none'" class="btn-discard-modal" style="padding:10px 22px; font-size:0.95rem;">⬅️ Cancelar Edição</button>`;

    div.innerHTML = `
        <h3 style="color:#006994; margin-bottom:15px; font-size:1.3rem; font-weight:bold; border-left:4px solid #006994; padding-left:8px;">✏️ Editar Ficha: #${a.codigo} - ${a.nome}</h3>
        
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap:15px; margin-bottom:20px;">
            <div><label style="font-size:0.85rem; font-weight:bold; color:#334155;">Nome Completo:</label><input type="text" id="editFullN" class="search-input-field" style="padding:10px;" value="${a.nome}"></div>
            <div><label style="font-size:0.85rem; font-weight:bold; color:#334155;">Telefone:</label><input type="text" id="editFullP" class="search-input-field" style="padding:10px;" value="${a.telefone}"></div>
            <div><label style="font-size:0.85rem; font-weight:bold; color:#334155;">Vencimento:</label><input type="text" id="editFullV" class="search-input-field" style="padding:10px;" value="${a.vencimento || ''}"></div>
        </div>

        <div style="background:#edf2f7; padding:15px; border-radius:8px; margin-bottom:15px;">
            <span style="font-weight:bold; font-size:0.9rem; color:#1e293b; display:block; margin-bottom:10px;">🗓️ Remanejamento de Grade Semanal:</span>
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap:12px;">
                ${selectGradeHtml}
            </div>
        </div>

        <div style="display:flex; gap:12px; justify-content:flex-end;">
            <button onclick="salvarEdicaoCompleta(${a.codigo}, ${hId})" class="btn-save-modal" style="padding:10px 22px; font-size:0.95rem;">💾 Salvar Alterações</button>
            ${btnVoltarHtml}
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

    a.seg = document.getElementById('editGradeseg').value ? parseInt(document.getElementById('editGradeseg').value) : '';
    a.ter = document.getElementById('editGradeter').value ? parseInt(document.getElementById('editGradeter').value) : '';
    a.qua = document.getElementById('editGradequa').value ? parseInt(document.getElementById('editGradequa').value) : '';
    a.qui = document.getElementById('editGradequi').value ? parseInt(document.getElementById('editGradequi').value) : '';
    a.sex = document.getElementById('editGradesex').value ? parseInt(document.getElementById('editGradesex').value) : '';
    a.sab = document.getElementById('editGradesab').value ? parseInt(document.getElementById('editGradesab').value) : '';

    salvarNoGoogle(a); // ← LINHA ADICIONADA
    
    const divId = hId ? 'centralFormEdicaoContainer' : 'superFormEdicaoContainer';
    document.getElementById(divId).style.display = 'none';
    renderizarTudo();
    if (hId) { abrirModalHorario(hId); } else { renderStudentTableSuper(); }
    alert(`✅ Ficha de ${a.nome} atualizada com sucesso!`);
}

// ============================================================
// OUTRAS ABAS DO SUPER MODAL (ALUNOS, RESUMO, INCOMPLETOS)
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
            <input type="text" id="superStudentSearch" class="search-input-field" style="margin-bottom:15px;" placeholder="🔍 Digite o nome, código ou telefone..." oninput="renderStudentTableSuper()">
            
            <div id="superFormEdicaoContainer" style="display:none; background:#f8fafc; padding:20px; border-radius:12px; margin-bottom:20px; border:2px dashed #006994;"></div>
            
            <div class="table-container">
                <table>
                    <thead>
                        <tr><th>Código</th><th>Nome</th><th>Telefone</th><th>Vencimento</th><th>Dias de Treino</th><th>Ações</th></tr>
                    </thead>
                    <tbody id="superStudentTableBody"></tbody>
                </table>
            </div>
        `;
        renderStudentTableSuper();
    }
    else if (tipo === 'incompletos') {
        titulo.innerHTML = '⚠️ Alunos sem Dias de Treino Vinculados';
        corpo.innerHTML = `
            <div class="table-container">
                <table>
                    <thead>
                        <tr><th>Código</th><th>Nome</th><th>Telefone</th><th>Vincular a uma Turma</th><th>Ação</th></tr>
                    </thead>
                    <tbody id="superIncompletosBody"></tbody>
                </table>
            </div>
        `;
        renderIncompletosSuper();
    }
}

function fecharSuperModal(e) { if (e && e.target !== e.currentTarget) return; document.getElementById('globalSuperModal').classList.remove('active'); }

function renderStudentTableSuper() {
    const body = document.getElementById('superStudentTableBody');
    if (!body) return;
    const txt = document.getElementById('superStudentSearch')?.value.toLowerCase() || '';
    let filtrados = alunos.filter(a => String(a.nome).toLowerCase().includes(txt) || String(a.telefone).includes(txt) || String(a.codigo).includes(txt));
    
    body.innerHTML = filtrados.map(a => {
        const fin = verificarVencimento(a.vencimento);
        
        // CORREÇÃO: Limpando a data feia de banco de dados
        let dateClean = a.vencimento || '—';
        if (String(dateClean).includes('T')) {
            const p = String(dateClean).split('T')[0].split('-');
            if (p.length === 3) dateClean = `${p[2]}/${p[1]}`;
        }

        let dParticipa = [];
        if (a.seg) dParticipa.push("Seg"); if (a.ter) dParticipa.push("Ter");
        if (a.qua) dParticipa.push("Qua"); if (a.qui) dParticipa.push("Qui");
        if (a.sex) dParticipa.push("Sex"); if (a.sab) dParticipa.push("Sáb");
        
        // CORREÇÃO: Botão de WhatsApp E Botão de Editar alinhados
        return `
            <tr>
                <td>#${a.codigo}</td>
                <td><strong>${a.nome}</strong></td>
                <td>${a.telefone}</td>
                <td><span class="badge ${fin.vencido ? 'badge-vencido' : 'badge-emdia'}">${dateClean}</span></td>
                <td style="font-size:0.9rem; font-weight:bold; color:#006994;">${dParticipa.join(', ') || 'Nenhum'}</td>
                <td style="display: flex; gap: 8px;">
                    <a href="https://wa.me/55${String(a.telefone).replace(/\D/g, '')}" target="_blank" class="btn-whatsapp-speed" style="padding:6px 10px; font-size:0.8rem;">💬 WA</a>
                    <button onclick="abrirEdicaoCompletaInline(${a.codigo}, null)" style="background:#e0f2fe; color:#0369a1; border:none; padding:6px 10px; border-radius:6px; font-weight:bold; font-size:0.8rem; cursor:pointer;">✏️ Editar</button>
                </td>
            </tr>
        `;
    }).join('');
}

// RENDERIZAÇÃO DA TELA DE INCOMPLETOS COM GRADE DE VINCULAÇÃO
// RENDERIZAÇÃO DA TELA DE INCOMPLETOS COM GRADE DE VINCULAÇÃO
// RENDERIZAÇÃO DA TELA DE INCOMPLETOS COM GRADE DE VINCULAÇÃO E BOTÃO DE TESTE
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
                <div style="display:flex; align-items:center; gap:6px;">
                    <span style="font-size:0.7rem; font-weight:700; color:var(--text-muted); width:50px; flex-shrink:0;">${dia.substring(0,3)}:</span>
                    <select class="inc-select-${a.codigo}-${campo}" style="flex:1; padding:4px 6px; border-radius:6px; border:1px solid var(--border); background:var(--bg-surface-2); color:var(--text-primary); font-size:0.75rem;">
                        <option value="">--</option>
                        ${turmasCompativeis.map(h => `<option value="${h.id}">${h.horario}</option>`).join('')}
                    </select>
                </div>
            `;
        }).join('');

        return `
            <tr>
                <td style="font-weight:700; color:var(--text-primary); white-space:nowrap;">${a.nome}</td>
                <td>
                    <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:5px;">
                        ${gradeHtml}
                    </div>
                </td>
                <td><button id="btn-save-${a.codigo}" class="btn-save" data-codigo="${a.codigo}">💾 Salvar</button></td>
            </tr>
        `;
    }).join('');

    document.querySelectorAll('.btn-save').forEach(btn => {
        btn.addEventListener('click', function() {
            const cod = this.getAttribute('data-codigo');
            vincularIncompleto(cod);
        });
    });
}

// LÓGICA DE SALVAMENTO QUE ATUALIZA A PLANILHA E MUDA O STATUS
ffunction vincularIncompleto(cod) {
    const al = alunos.find(a => a.codigo == cod);
    if (!al) { alert("Aluno não encontrado!"); return; }

    ['seg', 'ter', 'qua', 'qui', 'sex', 'sab'].forEach(campo => {
        const select = document.querySelector(`.inc-select-${al.codigo}-${campo}`);
        if(select) al[campo] = select.value ? parseInt(select.value) : '';
    });

    al.status = 'ATIVO';
    salvarNoGoogle(al);
    abrirSuperModal('incompletos');
}

function renderTurmasSuper() {
    const grid = document.getElementById('superTurmasGrid');
    if (!grid) return;
    grid.innerHTML = horariosConfig.map(h => {
        const q = getOcupacaoHorario(h.id);
        const p = Math.min((q / h.capacidade) * 100, 100);
        return `
            <div class="card" style="border-top-color: ${p>=100?'#ef4444':'#006994'}">
                <h3>${h.modalidade} <span style="color:#006994;">${h.horario}</span></h3>
                <p style="font-size:0.8rem; color:#64748b; margin-bottom:10px;">${h.dias.join(', ')}</p>
                <div style="background:#e2e8f0; height:10px; border-radius:5px; overflow:hidden;"><div style="width:${p}%; background:${p>=100?'#ef4444':'#006994'}; height:100%;"></div></div>
                <div style="text-align:right; font-weight:bold; font-size:0.9rem; margin-top:5px;">${q} de ${h.capacidade} vagas</div>
            </div>
        `;
    }).join('');
}

// Exemplo de como preparar os dados antes de enviar
function enviarParaGoogle(aluno) {
    const dados = {
        codigo: aluno.codigo,
        seg: aluno.seg || "", // Se estiver vazio, envia vazio
        ter: aluno.ter || "",
        qua: aluno.qua || "",
        qui: aluno.qui || "",
        sex: aluno.sex || "",
        sab: aluno.sab || "",
        status: "ATIVO" // Ou o status que desejar
    };
    
    // ... aqui vai o seu fetch usando a URL nova
}

function toggleTheme() {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('aqua_theme', isDark ? 'dark' : 'light');
    document.getElementById('themeIcon').textContent = isDark ? '☀️' : '🌙';
}
 
/// Aplica tema salvo ao carregar
(function() {
    const saved = localStorage.getItem('aqua_theme');
    if (saved === 'dark') {
        document.body.classList.add('dark');
    }
})();

async function salvarNoGoogle(dadosAluno) {
    try {
        if (dadosAluno._docId) {
            // Aluno já existe — atualiza
            await db.collection('alunos').doc(dadosAluno._docId).set(dadosAluno);
        } else {
            // Aluno novo — cria
            const docRef = await db.collection('alunos').add(dadosAluno);
            dadosAluno._docId = docRef.id;
        }
        mostrarToast('✅ Salvo com sucesso no Firebase!');
    } catch (erro) {
        mostrarToast('❌ Erro ao salvar: ' + erro, 'erro');
        console.error(erro);
    }
}

// ============================================================
// ➕ FORMULÁRIO COMPLETO DO BOTÃO FLUTUANTE DE CADASTRO
// ============================================================
function toggleFabMenu() { document.getElementById('fabContainer')?.classList.toggle('active'); }

function filtrarExpDias() {
    const mod = document.getElementById('fExpMod').value;
    const selectDia = document.getElementById('fExpDia');
    const selectH = document.getElementById('fExpH');

    selectDia.innerHTML = '<option value="">-- Selecione o dia --</option>';
    selectH.innerHTML = '<option value="">-- Primeiro selecione o dia --</option>';
    selectH.disabled = true;

    if (!mod) { selectDia.disabled = true; return; }

    const dias = [...new Set(horariosConfig.filter(h => h.modalidade === mod).flatMap(h => h.dias))];
    const ordem = ['Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
    dias.sort((a, b) => ordem.indexOf(a) - ordem.indexOf(b));

    dias.forEach(dia => {
        selectDia.innerHTML += `<option value="${dia}">${dia}</option>`;
    });
    selectDia.disabled = false;
}

function filtrarExpHorarios() {
    const mod = document.getElementById('fExpMod').value;
    const dia = document.getElementById('fExpDia').value;
    const selectH = document.getElementById('fExpH');

    selectH.innerHTML = '<option value="">-- Selecione o horário --</option>';

    if (!dia) { selectH.disabled = true; return; }

    const turmas = horariosConfig.filter(h => h.modalidade === mod && h.dias.includes(dia));
    turmas.forEach(h => {
        selectH.innerHTML += `<option value="${h.id}_${dia}">${h.horario}</option>`;
    });
    selectH.disabled = false;
}

function abrirFormularioSobreposto(tipo) {
    const modal = document.getElementById('globalSuperModal');
    const titulo = document.getElementById('superModalTitulo');
    const corpo = document.getElementById('superModalCorpo');
    if (!modal || !corpo || !titulo) return;
    document.getElementById('fabContainer')?.classList.remove('active');
    modal.classList.add('active');
    
    if (tipo === 'cadastro') {
        titulo.innerHTML = '📋 Matricular Novo Aluno Definitivo';
        
        // CORREÇÃO: Construindo a mini grade dos 6 dias também para o Cadastro!
        const diasSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
        const selectGradeHtml = diasSemana.map(dia => {
            const campo = diasMap[dia];
            const opcoesDoDia = horariosConfig.filter(hc => hc.dias.includes(dia));
            return `
                <div style="display:flex; flex-direction:column; gap:4px;">
                    <label style="font-size:0.85rem; font-weight:bold; color:#475569;">${dia}:</label>
                    <select id="cadGrade${campo}" class="form-select-field" style="width:100%; padding:8px; font-size:0.85rem;">
                        <option value="">[ Não treina neste dia ]</option>
                        ${opcoesDoDia.map(hc => `<option value="${hc.id}">${hc.modalidade} (${hc.horario})</option>`).join('')}
                    </select>
                </div>
            `;
        }).join('');

        corpo.innerHTML = `
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px; font-size:1.1rem; margin-bottom:20px;">
                <div><label style="font-weight:bold; display:block; margin-bottom:5px;">Nome do Aluno *</label><input type="text" id="fName" class="search-input-field"></div>
                <div><label style="font-weight:bold; display:block; margin-bottom:5px;">Telefone *</label><input type="text" id="fPhone" class="search-input-field" placeholder="(00) 00000-0000"></div>
                <div><label style="font-weight:bold; display:block; margin-bottom:5px;">Vencimento Plano</label><input type="text" id="fVenc" class="search-input-field" value="${formatarData()}"></div>
                <div><label style="font-weight:bold; display:block; margin-bottom:5px;">Modalidade Principal *</label>
                    <select id="fMod" class="form-select-field" style="width:100%; height:48px;">
                        <option value="Natação Adulto">Natação Adulto</option><option value="Hidroginástica">Hidroginástica</option><option value="Natação Infantil Nível 1">Natação Infantil Nível 1</option><option value="Natação Infantil Nível 2">Natação Infantil Nível 2</option><option value="Natação Infantil Nível 3">Natação Infantil Nível 3</option><option value="Natação Baby">Natação Baby</option><option value="Personal Class">Personal Class</option>
                    </select>
                </div>
            </div>
            
            <div style="background:#edf2f7; padding:15px; border-radius:8px; margin-bottom:15px;">
                <span style="font-weight:bold; font-size:0.9rem; color:#1e293b; display:block; margin-bottom:10px;">🗓️ Vincular Turmas (Opcional - Pode deixar em branco e definir depois):</span>
                <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap:12px;">
                    ${selectGradeHtml}
                </div>
            </div>

            <div class="form-actions-row"><button class="btn-save-modal" onclick="salvarMatriculaFab()">💾 Efetivar Matrícula</button><button class="btn-discard-modal" onclick="fecharSuperModal()">Cancelar</button></div>
        `;
    } else if (tipo === 'experimental') {
        titulo.innerHTML = '🧪 Agendar Nova Aula Experimental';

        const modalidades = [...new Set(horariosConfig.map(h => h.modalidade))];

        corpo.innerHTML = `
            <div style="font-size:1rem;">
                <div style="margin-bottom:12px;">
                    <label style="font-weight:bold; display:block; margin-bottom:5px;">Nome do Visitante *</label>
                    <input type="text" id="fExpN" class="search-input-field">
                </div>
                <div style="margin-bottom:12px;">
                    <label style="font-weight:bold; display:block; margin-bottom:5px;">Telefone (WhatsApp) *</label>
                    <input type="text" id="fExpP" class="search-input-field" placeholder="(00) 00000-0000">
                </div>

                <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px; margin-bottom:12px;">
                    <div>
                        <label style="font-weight:bold; display:block; margin-bottom:5px;">1. Modalidade *</label>
                        <select id="fExpMod" class="form-select-field" style="width:100%;" onchange="filtrarExpDias()">
                            <option value="">-- Selecione --</option>
                            ${modalidades.map(m => `<option value="${m}">${m}</option>`).join('')}
                        </select>
                    </div>
                    <div>
                        <label style="font-weight:bold; display:block; margin-bottom:5px;">2. Dia *</label>
                        <select id="fExpDia" class="form-select-field" style="width:100%;" onchange="filtrarExpHorarios()" disabled>
                            <option value="">-- Primeiro selecione a modalidade --</option>
                        </select>
                    </div>
                    <div>
                        <label style="font-weight:bold; display:block; margin-bottom:5px;">3. Horário *</label>
                        <select id="fExpH" class="form-select-field" style="width:100%;" disabled>
                            <option value="">-- Primeiro selecione o dia --</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="form-actions-row">
                <button class="btn-save-modal" style="background:#b45309;" onclick="salvarExpFab()">💾 Confirmar Agendamento</button>
                <button class="btn-discard-modal" onclick="fecharSuperModal()">Cancelar</button>
            </div>
        `;
    }
}
function salvarMatriculaFab() {
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

    if (!nome || !telefone) { alert('⚠️ Nome e Telefone são obrigatórios!'); return; }
    
    const novoAluno = { codigo: gerarCodigo(), nome, telefone, vencimento, modalidade, seg, ter, qua, qui, sex, sab, status: 'ATIVO' };
    alunos.push(novoAluno);
    salvarNoGoogle(novoAluno);
    renderizarTudo(); 
    fecharSuperModal();
    alert(`✅ Aluno ${nome} matriculado e turmas vinculadas com sucesso!`);
}
function salvarExpFab() {
    const nome = document.getElementById('fExpN').value.trim();
    const telefone = document.getElementById('fExpP').value.trim();
    const valor = document.getElementById('fExpH').value;
    if (!nome || !telefone) { alert('⚠️ Preencha os campos obrigatórios!'); return; }
    const [hId, diaExp] = valor.split('_');
    experimentais.push({ id: ++expIdCounter, nome, telefone, data: formatarData(), horario_id: parseInt(hId), dia: diaExp, status: 'agendado' });
    renderizarTudo(); fecharSuperModal();
    mostrarToast('✅ Aula experimental reservada com sucesso!');
}

function matricularExperimentalInSuper(id) {
    const exp = experimentais.find(e => e.id === id);
    if (!exp) return;
    fecharSuperModal();
    abrirFormularioSobreposto('cadastro');
    setTimeout(() => {
        document.getElementById('fName').value = exp.nome;
        document.getElementById('fPhone').value = exp.telefone;
        experimentais = experimentais.filter(e => e.id !== id);
        renderizarTudo();
    }, 250);
}

// ============================================================
// CLASSE RELÓGIO: MONITORAMENTO PRESENCIAL EM TEMPO REAL (2 HORAS)
// ============================================================
function atualizarMonitorTempoReal() {
    const agora = new Date();
    const dias = ["Sábado", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const hojeStr = dias[agora.getDay()];
    const minAtuais = (agora.getHours() * 60) + agora.getMinutes();

    document.querySelectorAll('.card').forEach(card => {
        card.querySelector('.badge-andamento')?.remove();
    });

    horariosConfig.forEach(h => {
        if (!h.dias.includes(hojeStr)) return;
        const partes = h.horario.split('-');
        if (partes.length !== 2) return;
        const [hIn, mIn] = partes[0].split(':').map(Number);
        const minIn = (hIn * 60) + mIn;
        const diff = minIn - minAtuais;

        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const txtMod = card.querySelector('h3 span')?.innerText;
            const txtHor = card.querySelector('.horario')?.innerText;
            
            if (txtMod === h.modalidade && txtHor === h.horario) {
                if (minAtuais >= minIn && minAtuais <= (minIn + 45)) {
                    card.style.borderColor = "#f59e0b";
                    if (!card.querySelector('.badge-andamento')) {
                        const b = document.createElement('span'); b.className = 'badge badge-andamento'; b.innerText = '🚀 EM ANDAMENTO';
                        card.querySelector('h3').appendChild(b);
                    }
                } 
                else if (diff > 0 && diff <= 120) {
                    card.style.borderColor = "#0284c7";
                    if (!card.querySelector('.badge-andamento')) {
                        const b = document.createElement('span'); b.className = 'badge'; b.style.background='#0284c7'; b.style.color='white'; b.innerText = '⏱️ PRÓX. 2H';
                        card.querySelector('h3').appendChild(b);
                    }
                }
            }
        });
    });
}

window.onload = function() {
    if (localStorage.getItem("aqua_authenticated") === "true") {
        document.getElementById("loginScreen").style.display = "none";
        document.getElementById("appContainer").style.display = "block";
        carregarDados();
    }
    setInterval(atualizarMonitorTempoReal, 30000); 
};