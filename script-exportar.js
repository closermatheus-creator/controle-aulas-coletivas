// ============================================================
// SCRIPT DE EXPORTAÇÃO - FIREBASE → JSON
// ============================================================

// ============================================================
// CONFIGURAÇÃO DO FIREBASE
// ============================================================
const firebaseConfig = {
    apiKey: "AIzaSyCMGMg8ITNtDK7J0ZFxAxkcot5PmU3znt0",
    authDomain: "aquacontrol-453ab.firebaseapp.com",
    projectId: "aquacontrol-453ab",
    storageBucket: "aquacontrol-453ab.firebasestorage.app",
    messagingSenderId: "519539395936",
    appId: "1:519539395936:web:61a37956c32bc24d506205"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ============================================================
// VARIÁVEIS GLOBAIS
// ============================================================
const MASTER_PASSWORD = "aqua123";

// ============================================================
// FUNÇÃO DE LOGIN
// ============================================================
function checkPassword() {
    console.log("🔑 Tentando login...");
    const input = document.getElementById("passwordInput");
    if (!input) {
        console.error("❌ Campo de senha não encontrado!");
        return;
    }
    
    if (input.value === MASTER_PASSWORD) {
        console.log("✅ Senha correta!");
        localStorage.setItem("aqua_authenticated", "true");
        document.getElementById("loginScreen").style.display = "none";
        document.getElementById("appContainer").style.display = "block";
        carregarDados();
    } else {
        console.log("❌ Senha incorreta!");
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
// FORMATAR DATA
// ============================================================
function formatarData() {
    const h = new Date();
    return `${String(h.getDate()).padStart(2,'0')}/${String(h.getMonth()+1).padStart(2,'0')}`;
}

// ============================================================
// MOSTRAR TOAST
// ============================================================
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
    t.style.display = 'block';
    setTimeout(() => t.classList.add('show'), 10);
    setTimeout(() => {
        t.classList.remove('show');
        setTimeout(() => t.style.display = 'none', 400);
    }, 4000);
}

// ============================================================
// CARREGAR DADOS DO FIREBASE
// ============================================================
let alunos = [];
let experimentais = [];
let historico = [];
let turmas = [];
let modalidades = [];

async function carregarDados() {
    const statusEl = document.getElementById('googleStatus');
    if (statusEl) statusEl.innerText = '🔄 Carregando...';
    document.getElementById('loadingBanner').style.display = 'block';

    try {
        console.log("📥 Carregando dados do Firebase...");

        // Carregar alunos
        const snapAlunos = await db.collection('alunos').get();
        alunos = snapAlunos.docs.map(doc => ({ ...doc.data(), _docId: doc.id }));
        console.log(`✅ Alunos carregados: ${alunos.length}`);

        // Carregar experimentais
        const snapExp = await db.collection('experimentais').get();
        experimentais = snapExp.docs.map(doc => ({ ...doc.data(), _docId: doc.id }));
        console.log(`✅ Experimentais carregados: ${experimentais.length}`);

        // Carregar histórico
        try {
            const snapHist = await db.collection('historico_experimentais').get();
            historico = snapHist.docs.map(doc => ({ ...doc.data(), _docId: doc.id }));
            console.log(`✅ Histórico carregados: ${historico.length}`);
        } catch (e) {
            console.log('ℹ️ Nenhum histórico encontrado');
            historico = [];
        }

        // Carregar turmas
        try {
            const doc = await db.collection('config').doc('turmas').get();
            if (doc.exists) {
                turmas = doc.data().turmas || [];
                console.log(`✅ Turmas carregadas: ${turmas.length}`);
            }
        } catch (e) {
            console.log('ℹ️ Nenhuma turma encontrada');
            turmas = [];
        }

        // Modalidades padrão
        modalidades = [
            "Natação Adulto",
            "Hidroginástica",
            "Natação Infantil Nível 1",
            "Natação Infantil Nível 2",
            "Natação Infantil Nível 3",
            "Natação Baby",
            "Personal Class"
        ];

        // Atualizar status
        if (statusEl) {
            statusEl.innerText = `✅ ${alunos.length} alunos, ${experimentais.length} exp, ${turmas.length} turmas`;
            statusEl.classList.add('online');
        }

        document.getElementById('loadingBanner').style.display = 'none';
        
        // Habilitar botão de exportar
        const btn = document.getElementById('btnExportar');
        if (btn) {
            btn.disabled = false;
            btn.textContent = `📥 Exportar (${alunos.length} alunos)`;
        }

        mostrarToast('✅ Dados carregados! Clique em "Exportar"');

    } catch (erro) {
        console.error("❌ Erro ao carregar dados:", erro);
        if (statusEl) statusEl.innerText = '⚠️ Erro ao carregar';
        document.getElementById('loadingBanner').style.display = 'none';
        mostrarToast('❌ Erro ao carregar dados!', 'erro');
    }
}

// ============================================================
// EXPORTAR TODOS OS DADOS
// ============================================================
function exportarTodosDados() {
    try {
        console.log("📤 Exportando dados...");
        
        const dadosCompletos = {
            dataExportacao: new Date().toISOString(),
            versao: "1.0",
            alunos: alunos,
            experimentais: experimentais,
            historico: historico,
            turmas: turmas,
            modalidades: modalidades,
            totalAlunos: alunos.length,
            totalExperimentais: experimentais.length,
            totalHistorico: historico.length,
            totalTurmas: turmas.length,
            totalModalidades: modalidades.length
        };

        const json = JSON.stringify(dadosCompletos, null, 2);
        const blob = new Blob([json], { type: 'application/json;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        const dataFormatada = formatarData().replace(/\//g, '-');
        a.href = url;
        a.download = `aquacontrol_export_${dataFormatada}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        const statusDiv = document.getElementById('statusExport');
        if (statusDiv) {
            statusDiv.style.display = 'block';
            statusDiv.className = 'status-export sucesso';
            statusDiv.innerHTML = `
                ✅ Exportação concluída!<br>
                📊 Alunos: ${alunos.length} | Experimentais: ${experimentais.length} | Histórico: ${historico.length} | Turmas: ${turmas.length}<br>
                📁 Arquivo: aquacontrol_export_${dataFormatada}.json
            `;
        }

        mostrarToast(`✅ ${alunos.length} alunos exportados com sucesso!`);

    } catch (erro) {
        console.error("❌ Erro ao exportar:", erro);
        const statusDiv = document.getElementById('statusExport');
        if (statusDiv) {
            statusDiv.style.display = 'block';
            statusDiv.className = 'status-export erro';
            statusDiv.innerHTML = `❌ Erro ao exportar: ${erro.message}`;
        }
        mostrarToast('❌ Erro ao exportar!', 'erro');
    }
}

// ============================================================
// INICIALIZAÇÃO
// ============================================================
console.log("🚀 Script de exportação carregado!");

window.onload = function() {
    console.log("📄 Página carregada!");
    
    // Verificar se o usuário já está autenticado
    if (localStorage.getItem("aqua_authenticated") === "true") {
        console.log("🔓 Usuário já autenticado");
        document.getElementById("loginScreen").style.display = "none";
        document.getElementById("appContainer").style.display = "block";
        carregarDados();
    } else {
        console.log("🔒 Aguardando login...");
    }
};