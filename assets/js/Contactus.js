const firebaseConfig = {
  apiKey: 'AIzaSyDrzmRMSQcFvd3N7tqMx0FbT26VYpzQ8Ts',
  authDomain: 'contact-us-glamfit.firebaseapp.com',
  databaseURL: 'https://contact-us-glamfit-default-rtdb.firebaseio.com',
  projectId: 'contact-us-glamfit',
  storageBucket: 'contact-us-glamfit.appspot.com',
  messagingSenderId: '842686115111',
  appId: '1:842686115111:web:a08e137e7cabc154c90d02',
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);

// Referência para a coleção contactForm
var contatoFormularioDB = firebase.database().ref('contactForm');

// Adiciona um ouvinte para o envio do formulário
document
  .getElementById('contactForm')
  .addEventListener('submit', enviarFormulario);

function enviarFormulario(e) {
  e.preventDefault();

  // Obtém os valores dos campos
  var nome = obterValorElemento('name');
  var email = obterValorElemento('emailid');
  var mensagem = obterValorElemento('msgContent');

  console.log(nome, email, mensagem);
  salvarMensagens(nome, email, mensagem);

  // Exibe o alerta
  document.querySelector('.alert').style.display = 'block';

  // Remove o alerta após 3 segundos
  setTimeout(() => {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  // Reseta o formulário
  document.getElementById('contactForm').reset();
}

const salvarMensagens = (nome, email, mensagem) => {
  var novoFormularioContato = contatoFormularioDB.push();

  novoFormularioContato.set({
    nome: nome,
    email: email,
    mensagem: mensagem,
  });
};

const obterValorElemento = (id) => {
  return document.getElementById(id).value;
};
