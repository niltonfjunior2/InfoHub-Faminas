import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Sprint 01: Validação do Header, Hero e Footer Institucional', () => {
  const htmlPath = path.resolve(__dirname, '../index.html');
  const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

  it('deve conter o link em destaque para o portal oficial com texto Portal FAMINAS e atributos seguros', () => {
    expect(htmlContent).toContain('https://www.unifaminas.edu.br/principal');
    expect(htmlContent).toContain('target="_blank"');
    expect(htmlContent).toContain('rel="noopener noreferrer"');
    expect(htmlContent).toContain('Portal FAMINAS');
  });

  it('deve conter a logomarca da FAMINAS com texto alternativo apropriado', () => {
    expect(htmlContent).toContain('/assets/images/logo-faminas.png');
    expect(htmlContent).toContain('alt="Logomarca Oficial FAMINAS"');
  });

  it('deve identificar o projeto de extensão e o curso de ADS no cabeçalho e no Hero', () => {
    expect(htmlContent).toContain('Extensão Acadêmica • ADS');
    expect(htmlContent).toContain('Engenharia de Software • ADS FAMINAS');
  });

  it('o rodapé deve conter os botões de acesso aos três modais institucionais', () => {
    expect(htmlContent).toContain('id="btn-modal-sobre"');
    expect(htmlContent).toContain('Sobre o Projeto');
    expect(htmlContent).toContain('id="btn-modal-termos"');
    expect(htmlContent).toContain('Termos de Uso');
    expect(htmlContent).toContain('id="btn-modal-privacidade"');
    expect(htmlContent).toContain('Política de Privacidade');
  });

  it('o rodapé deve conter o link de destaque para o curso de ADS com atributos seguros', () => {
    expect(htmlContent).toContain('https://www.unifaminas.edu.br/cursos/analise-e-desenvolvimento-de-sistemas');
    expect(htmlContent).toContain('id="link-curso-ads"');
    expect(htmlContent).toContain('Análise e Desenvolvimento de Sistemas');
  });

  it('deve carregar as folhas de estilo obrigatórias de layout e variáveis', () => {
    expect(htmlContent).toContain('/src/css/variables.css');
    expect(htmlContent).toContain('/src/css/base.css');
    expect(htmlContent).toContain('/src/css/layout.css');
  });
});
