/**
 * Aplicação Principal - Página Setorial FAMINAS
 * Extensão Universitária • Engenharia de Software • ADS
 */

import { initModalController } from './modal-controller.js';

document.addEventListener('DOMContentLoaded', () => {
  // Inicializa o gerenciador de modais institucionais (Sobre, Termos, Privacidade)
  initModalController();

  console.log('[InfoHub Setorial] Template institucional inicializado com sucesso.');

  /* ==========================================================================
     ESPAÇO PARA LÓGICA ESPECÍFICA DOS ESTUDANTES (OPCIONAL):
     Exemplos de funcionalidades que vocês podem adicionar:
     - Copiar telefone/e-mail para a área de transferência ao clicar em um botão
     - Filtragem de dúvidas frequentes ou cálculo de prazos
     - Alternância de visualizações ou accordions interativos
     ========================================================================== */
});
