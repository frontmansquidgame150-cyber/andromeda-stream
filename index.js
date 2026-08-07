const wppconnect = require('@wppconnect-team/wppconnect');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let statusConexao = { conectado: false, codigoPareamento: null };

// Gerar código de pareamento
function gerarCodigoPareamento() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let p1 = '', p2 = '';
  for (let i = 0; i < 4; i++) {
    p1 += chars[Math.floor(Math.random() * chars.length)];
    p2 += chars[Math.floor(Math.random() * chars.length)];
  }
  return `${p1}-${p2}`;
}

const codigo = gerarCodigoPareamento();
statusConexao.codigoPareamento = codigo;

console.log('\n========================================');
console.log('🔐 CÓDIGO DE PAREAMENTO: ' + codigo);
console.log('========================================');
console.log('📱 Abra WhatsApp → Aparelhos conectados → Conectar aparelho\n');

// Iniciar conexão SEM precisar de navegador
wppconnect.create({
  session: 'AndromedaConect',
  pairingCode: true,
  useChrome: false, // ✅ Funciona sem Chrome!
  statusFind: (status) => {
    console.log('📊 Status:', status);
    if (status === 'isLogged') {
      statusConexao.conectado = true;
      statusConexao.codigoPareamento = null;
      console.log('✅ WHATSAPP CONECTADO COM SUCESSO!');
    }
  },
})
.then((client) => {
  console.log('🎉 Pronto! Conectado!');
  client.onMessage((mensagem) => {
    if (mensagem.body.toLowerCase() === 'oi') {
      client.sendText(mensagem.from, '👋 Olá! Bem-vindo ao Andromeda Conect!');
    }
  });
})
.catch((erro) => console.error('❌ Erro:', erro));

// API para o painel
app.get('/status', (req, res) => res.json(statusConexao));

const PORTA = process.env.PORT || 3000;
app.listen(PORTA, () => console.log(`🚀 Servidor na porta ${PORTA}`));
