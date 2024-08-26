'use strict';

/**
 * Adiciona um evento em um elemento
 * @param {HTMLElement | NodeList} elem - O elemento ou a lista de elementos onde o evento será adicionado
 * @param {string} tipo - O tipo de evento (ex: 'click', 'scroll')
 * @param {Function} callback - A função a ser executada quando o evento ocorre
 */
const adicionarEventoNoElem = function (elem, tipo, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(tipo, callback);
    }
  } else {
    elem.addEventListener(tipo, callback);
  }
};

/**
 * Alterna o estado da barra de navegação
 */
const barraNavegacao = document.querySelector('[data-navbar]');
const botõesAlternarNavegacao = document.querySelectorAll('[data-nav-toggler]');
const linksNavegacao = document.querySelectorAll('[data-nav-link]');

const alternarBarraNavegacao = function () {
  barraNavegacao.classList.toggle('active');
};

adicionarEventoNoElem(botõesAlternarNavegacao, 'click', alternarBarraNavegacao);

const fecharBarraNavegacao = function () {
  barraNavegacao.classList.remove('active');
};

adicionarEventoNoElem(linksNavegacao, 'click', fecharBarraNavegacao);

/**
 * Ativa o cabeçalho e o botão de voltar ao topo
 */
const cabeçalho = document.querySelector('[data-header]');
const botãoVoltarTopo = document.querySelector('[data-back-top-btn]');

window.addEventListener('scroll', function () {
  if (window.scrollY >= 100) {
    cabeçalho.classList.add('active');
    botãoVoltarTopo.classList.add('active');
  } else {
    cabeçalho.classList.remove('active');
    botãoVoltarTopo.classList.remove('active');
  }
});
