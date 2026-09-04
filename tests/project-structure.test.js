import { describe, it, expect } from 'vitest';
import { SERVICES_DATA } from '../src/js/services-data.js';

describe('Validação da Estrutura e Catálogo do Projeto InfoHub FAMINAS', () => {
  it('deve conter exatamente 15 setores institucionais', () => {
    expect(SERVICES_DATA).toHaveLength(15);
  });

  it('deve ter todos os setores numerados de 1 a 15 em ordem sequencial', () => {
    const orders = SERVICES_DATA.map((s) => s.order);
    expect(orders).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  });

  it('cada setor deve possuir todos os campos obrigatórios válidos', () => {
    SERVICES_DATA.forEach((service) => {
      expect(service.id).toBeDefined();
      expect(typeof service.id).toBe('string');
      expect(service.title).toBeDefined();
      expect(typeof service.title).toBe('string');
      expect(service.description).toBeDefined();
      expect(typeof service.description).toBe('string');
      expect(service.icon).toBeDefined();
      expect(typeof service.icon).toBe('string');
      expect(['active', 'coming_soon']).toContain(service.status);
    });
  });

  it('os 15 temas devem coincidir com os temas do Guia de Extensão', () => {
    const titles = SERVICES_DATA.map((s) => s.title);
    expect(titles).toContain('Acesso Institucional Perdido');
    expect(titles).toContain('Achados e Perdidos');
    expect(titles).toContain('CPA (Comissão Própria de Avaliação)');
    expect(titles).toContain('Estágios');
    expect(titles).toContain('Formatura e Colação de Grau');
    expect(titles).toContain('Funcionamento das Dependências');
    expect(titles).toContain('Consultas nas Clínicas-Escola');
    expect(titles).toContain('Horas Complementares');
    expect(titles).toContain('Iniciação Científica na FAMINAS');
    expect(titles).toContain('Matrícula e Renovação de Matrícula');
    expect(titles).toContain('Revista Científica da FAMINAS');
    expect(titles).toContain('Apoio Psicopedagógico (NAP)');
    expect(titles).toContain('Carteirinha Estudantil (1ª e 2ª via)');
    expect(titles).toContain('Trabalho de Conclusão de Curso (TCC)');
    expect(titles).toContain('Uso do Complexo Esportivo');
  });
});
