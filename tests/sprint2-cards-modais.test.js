import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import fs from 'fs';
import path from 'path';
import { SERVICES_DATA } from '../src/js/services-data.js';
import { initCardsRenderer } from '../src/js/cards-renderer.js';
import { openModal, closeModal, initModalController } from '../src/js/modal-controller.js';

describe('Sprint 02: Validação do Catálogo dos 15 Cards, Modais e Fallback', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="services-grid" class="services-grid"></div>
      <div id="modals-root"></div>
      <button type="button" class="footer-link-btn" id="btn-modal-sobre" data-modal="sobre">Sobre</button>
      <button type="button" class="footer-link-btn" id="btn-modal-termos" data-modal="termos">Termos</button>
      <button type="button" class="footer-link-btn" id="btn-modal-privacidade" data-modal="privacidade">Privacidade</button>
    `;
  });

  afterEach(() => {
    document.body.className = '';
    const backdrop = document.getElementById('modal-backdrop-global');
    if (backdrop) backdrop.remove();
  });

  it('deve renderizar exatamente 15 cards no container do grid', () => {
    initCardsRenderer();
    const cards = document.querySelectorAll('.service-card');
    expect(cards.length).toBe(15);
  });

  it('cada card deve possuir elementos semânticos e atributos acessíveis', () => {
    initCardsRenderer();
    const cards = document.querySelectorAll('.service-card');

    cards.forEach((card, index) => {
      const service = SERVICES_DATA[index];
      expect(card.getAttribute('role')).toBe('button');
      expect(card.getAttribute('tabindex')).toBe('0');
      expect(card.querySelector('.card-title')?.textContent).toBe(service.title);
      expect(card.querySelector('.card-description')?.textContent).toBe(service.description);
      expect(card.querySelector('.card-order-badge')?.textContent).toBe(`#${String(service.order).padStart(2, '0')}`);
    });
  });

  it('ao clicar em um card em homologação, deve abrir o modal de aviso com opção de retorno', () => {
    initCardsRenderer();
    const firstCard = document.querySelector('.service-card');
    expect(firstCard).not.toBeNull();

    firstCard?.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    const modalDialog = document.querySelector('.modal-dialog');
    expect(modalDialog).not.toBeNull();
    expect(modalDialog?.classList.contains('is-active')).toBe(true);
    expect(document.body.classList.contains('modal-open')).toBe(true);

    const returnBtn = modalDialog?.querySelector('.btn-modal-return');
    expect(returnBtn).not.toBeNull();
    expect(returnBtn?.textContent).toContain('Retornar à página principal');

    // Ao clicar em retornar, fecha o modal
    returnBtn?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(document.body.classList.contains('modal-open')).toBe(false);
  });

  it('deve abrir e fechar os modais institucionais de Sobre, Termos e Privacidade', () => {
    initModalController();

    // Testa modal Sobre
    openModal('sobre');
    let dialog = document.querySelector('.modal-dialog');
    expect(dialog?.textContent).toContain('Sobre o Projeto de Extensão');
    expect(dialog?.textContent).toContain('Engenharia de Software');
    closeModal();

    // Testa modal Termos
    openModal('termos');
    dialog = document.querySelector('.modal-dialog');
    expect(dialog?.textContent).toContain('Termos de Uso');
    closeModal();

    // Testa modal Privacidade
    openModal('privacidade');
    dialog = document.querySelector('.modal-dialog');
    expect(dialog?.textContent).toContain('Lei Geral de Proteção de Dados');
    closeModal();
  });

  it('o arquivo css/cards.css deve conter a regra de grid de 3 colunas (5x3 no desktop)', () => {
    const cssPath = path.resolve(__dirname, '../src/css/cards.css');
    const cssContent = fs.readFileSync(cssPath, 'utf-8');

    expect(cssContent).toContain('grid-template-columns: repeat(3, 1fr)');
    expect(cssContent).toContain('@media (min-width: 1024px)');
  });
});
