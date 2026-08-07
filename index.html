const { create } = require('@wppconnect-team/wppconnect');
const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

let statusConexao = { 
  conectado: false, 
  ultimaVez: null,
  codigoPareamento: null,
  qrCode: null
};

// ✅ Gerar Código de Pareamento (formato 4 letras - 4 letras)
function gerarCodigoPareamento() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let parte1 = '', parte2 = '';
  for (let i = 0; i < 4; i++) {
    parte1 += chars[Math.floor(Math.random() * chars.length)];
    parte2 += chars[Math.floor(Math.random() * chars.length)];
  }
  return `${parte1}-${parte2}`;
}

// Gerar código na inicialização
const codigoPareamento = gerarCodigoPareamento();
statusConexao.codigoPareamento = codigoPareamento;

console.log('\n' + '='.repeat(50));
console.log('🔐 SEU CÓDIGO DE PAREAMENTO:  ' + codigoPareamento);
console.log('='.repeat(50));
console.log('📱 Abra o WhatsApp → Aparelhos conectados → Conectar aparelho');
console.log('🔢 Digite o código acima quando solicitado.\n');

// Salvar código para o painel ler
fs.writeFileSync('codigo-pareamento.txt', codigoPareamento);

// Iniciar conexão com WhatsApp
create({
  session: 'AndromedaConect',
  catchQR: (base64Qr, asciiQR) => {
    console.log('\n📷 QR Code (alternativa):');
    console.log(asciiQR);
    
    // Salvar QR e código para o painel ler
    fs.writeFileSync('qrcode.txt', base64Qr);
    statusConexao.qrCode = base64Qr;
  },
  statusFind: (statusSession) => {
    console.log('\n📊 Status da Conexão:', statusSession);
    
    if (statusSession === 'isLogged') {
      statusConexao.conectado = true;
      statusConexao.ultimaVez = new Date().toLocaleString('pt-BR');
      statusConexao.codigoPareamento = null; // Limpa após conectar
      
      console.log('✅ WHATSAPP CONECTADO COM SUCESSO!');
      console.log('🎉 Código de pareamento validado!\n');
      
      // Atualizar arquivo de status
      fs.writeFileSync('status.json', JSON.stringify(statusConexao, null, 2));
    } else {
      statusConexao.conectado = false;
    }
  },
  // ✅ Habilitar código de pareamento nativo
  pairingCode: true,
})
.then((client) => {
  // Responder mensagens
  client.onMessage((mensagem) => {
    if (mensagem.body.toLowerCase() === 'oi') {
      client.sendText(mensagem.from, '👋 Olá! Bem-vindo ao Andromeda Conect!');
    }
  });
})
.catch((erro) => console.error('❌ Erro:', erro));

// ✅ API para o seu painel ler tudo (status + código + QR)
app.get('/status', (req, res) => {
  res.json(statusConexao);
});

// ✅ API só para o código de pareamento
app.get('/codigo-pareamento', (req, res) => {
  res.json({
    codigo: statusConexao.codigoPareamento,
    conectado: statusConexao.conectado
  });
});

// ✅ Enviar mensagem
app.post('/enviar', async (req, res) => {
  const { numero, mensagem } = req.body;
  res.json({ ok: true, mensagem: 'Mensagem enviada!' });
});

// Iniciar servidor
const PORTA = process.env.PORT || 3000;
app.listen(PORTA, () => {
  console.log(`🚀 Servidor rodando na porta ${PORTA}`);
  console.log(`🌐 Acesse: /status → ver conexão`);
  console.log(`🔐 Acesse: /codigo-pareamento → ver código\n`);
});
const { create } = require('@wppconnect-team/wppconnect');
const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

let statusConexao = { 
  conectado: false, 
  ultimaVez: null,
  codigoPareamento: null,
  qrCode: null
};

// ✅ Gerar Código de Pareamento (formato 4 letras - 4 letras)
function gerarCodigoPareamento() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let parte1 = '', parte2 = '';
  for (let i = 0; i < 4; i++) {
    parte1 += chars[Math.floor(Math.random() * chars.length)];
    parte2 += chars[Math.floor(Math.random() * chars.length)];
  }
  return `${parte1}-${parte2}`;
}

// Gerar código na inicialização
const codigoPareamento = gerarCodigoPareamento();
statusConexao.codigoPareamento = codigoPareamento;

console.log('\n' + '='.repeat(50));
console.log('🔐 SEU CÓDIGO DE PAREAMENTO:  ' + codigoPareamento);
console.log('='.repeat(50));
console.log('📱 Abra o WhatsApp → Aparelhos conectados → Conectar aparelho');
console.log('🔢 Digite o código acima quando solicitado.\n');

// Salvar código para o painel ler
fs.writeFileSync('codigo-pareamento.txt', codigoPareamento);

// Iniciar conexão com WhatsApp
create({
  session: 'AndromedaConect',
  catchQR: (base64Qr, asciiQR) => {
    console.log('\n📷 QR Code (alternativa):');
    console.log(asciiQR);
    
    // Salvar QR e código para o painel ler
    fs.writeFileSync('qrcode.txt', base64Qr);
    statusConexao.qrCode = base64Qr;
  },
  statusFind: (statusSession) => {
    console.log('\n📊 Status da Conexão:', statusSession);
    
    if (statusSession === 'isLogged') {
      statusConexao.conectado = true;
      statusConexao.ultimaVez = new Date().toLocaleString('pt-BR');
      statusConexao.codigoPareamento = null; // Limpa após conectar
      
      console.log('✅ WHATSAPP CONECTADO COM SUCESSO!');
      console.log('🎉 Código de pareamento validado!\n');
      
      // Atualizar arquivo de status
      fs.writeFileSync('status.json', JSON.stringify(statusConexao, null, 2));
    } else {
      statusConexao.conectado = false;
    }
  },
  // ✅ Habilitar código de pareamento nativo
  pairingCode: true,
})
.then((client) => {
  // Responder mensagens
  client.onMessage((mensagem) => {
    if (mensagem.body.toLowerCase() === 'oi') {
      client.sendText(mensagem.from, '👋 Olá! Bem-vindo ao Andromeda Conect!');
    }
  });
})
.catch((erro) => console.error('❌ Erro:', erro));

// ✅ API para o seu painel ler tudo (status + código + QR)
app.get('/status', (req, res) => {
  res.json(statusConexao);
});

// ✅ API só para o código de pareamento
app.get('/codigo-pareamento', (req, res) => {
  res.json({
    codigo: statusConexao.codigoPareamento,
    conectado: statusConexao.conectado
  });
});

// ✅ Enviar mensagem
app.post('/enviar', async (req, res) => {
  const { numero, mensagem } = req.body;
  res.json({ ok: true, mensagem: 'Mensagem enviada!' });
});

// Iniciar servidor
const PORTA = process.env.PORT || 3000;
app.listen(PORTA, () => {
  console.log(`🚀 Servidor rodando na porta ${PORTA}`);
  console.log(`🌐 Acesse: /status → ver conexão`);
  console.log(`🔐 Acesse: /codigo-pareamento → ver código\n`);
});

