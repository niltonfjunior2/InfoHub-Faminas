import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { initPWA } from '../src/js/pwa.js';

describe('Sprint 03: Validação do PWA, Service Worker e Configurações de Deploy Vercel', () => {
  it('o manifesto PWA (manifest.json) deve conter metadados e ícones válidos', () => {
    const manifestPath = path.resolve(__dirname, '../public/manifest.json');
    expect(fs.existsSync(manifestPath)).toBe(true);

    const manifestContent = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
    expect(manifestContent.name).toBeDefined();
    expect(manifestContent.short_name).toBe('InfoHub FAMINAS');
    expect(manifestContent.display).toBe('standalone');
    expect(manifestContent.theme_color).toBe('#0B1B29');
    expect(manifestContent.background_color).toBe('#0B1B29');
    expect(manifestContent.icons.length).toBeGreaterThanOrEqual(2);

    const sizes = manifestContent.icons.map((icon) => icon.sizes);
    expect(sizes).toContain('192x192');
    expect(sizes).toContain('512x512');
  });

  it('o Service Worker (sw.js) deve implementar ciclo de vida e pré-cache de ativos', () => {
    const swPath = path.resolve(__dirname, '../sw.js');
    expect(fs.existsSync(swPath)).toBe(true);

    const swContent = fs.readFileSync(swPath, 'utf-8');
    expect(swContent).toContain('CACHE_NAME');
    expect(swContent).toContain("addEventListener('install'");
    expect(swContent).toContain("addEventListener('activate'");
    expect(swContent).toContain("addEventListener('fetch'");
    expect(swContent).toContain('/manifest.json');
    expect(swContent).toContain('/index.html');
  });

  it('o arquivo vercel.json deve conter headers de segurança e controle de cache para sw.js', () => {
    const vercelPath = path.resolve(__dirname, '../vercel.json');
    expect(fs.existsSync(vercelPath)).toBe(true);

    const vercelConfig = JSON.parse(fs.readFileSync(vercelPath, 'utf-8'));
    expect(vercelConfig.version).toBe(2);
    expect(vercelConfig.headers).toBeDefined();

    const headersText = JSON.stringify(vercelConfig.headers);
    expect(headersText).toContain('nosniff');
    expect(headersText).toContain('SAMEORIGIN');
    expect(headersText).toContain('strict-origin-when-cross-origin');
    expect(headersText).toContain('no-cache');
  });

  it('o index.html deve conter a tag do manifesto e o botão de instalação PWA', () => {
    const htmlPath = path.resolve(__dirname, '../index.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

    expect(htmlContent).toContain('rel="manifest"');
    expect(htmlContent).toContain('href="/manifest.json"');
    expect(htmlContent).toContain('id="btn-install-pwa"');
  });

  it('o módulo pwa.js deve exportar a função initPWA', () => {
    expect(typeof initPWA).toBe('function');
  });
});
