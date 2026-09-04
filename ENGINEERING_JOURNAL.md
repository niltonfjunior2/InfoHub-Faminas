# ENGINEERING_JOURNAL.md — DIÁRIO DE ENGENHARIA E LIÇÕES APRENDIDAS

---

## 1. PROBLEMAS ENCONTRADOS E RESOLUÇÕES

### Problema 1: Impossibilidade Técnica de Health Check de URLs Externas
* **Descrição:** A verificação dinâmica em tempo real (via `fetch` ou ping HTTP no navegador) da disponibilidade dos sites dos 15 grupos discentes hospedados no GitHub Pages foi impedida por restrições de segurança do navegador.
* **Causa:** Política de *Cross-Origin Resource Sharing* (CORS) e proteção contra port scanning imposta pelos navegadores modernos em chamadas client-side para domínios de terceiros.
* **Solução Adotada:** Implementação de governança puramente declarativa no arquivo `src/js/services-data.js`. O status (`"active"` ou `"coming_soon"`) e a URL são mantidos de forma estática. Ao clicar em um card em homologação, o hub abre um modal institucional com botão de retorno seguro à tela inicial, sem disparar erros 404 externos.

### Problema 2: Invalidação de Cache de PWA após Atualização de Links
* **Descrição:** Risco de discentes ou professores atualizarem links de seus setores no repositório, mas usuários que instalaram o PWA no celular continuarem visualizando a versão antiga em cache.
* **Causa:** Service Workers com cache estático agressivo mantêm arquivos locais até que uma nova versão do script seja detectada e ativada.
* **Solução Adotada:**
  1. Configuração no `vercel.json` de cabeçalho `Cache-Control: no-cache, no-store, must-revalidate` exclusivamente para o arquivo `sw.js`.
  2. Implementação de `self.skipWaiting()` na instalação e limpeza automática de caches legados no evento `activate`.
  3. Estratégia *Stale-While-Revalidate* e versionamento explícito (`CACHE_NAME = 'infohub-faminas-v1.0.0'`).

---

## 2. RESTRIÇÕES DESCOBERTAS E IMPACTOS

* **Restrição 1: Zero Banco de Dados / Zero Backend com Estado:**
  * *Impacto:* Exige que toda alteração de catálogo passe por um commit no arquivo `src/js/services-data.js`. O impacto é altamente positivo para este contexto acadêmico: custo financeiro zero, imunidade contra invasões de backend e velocidade extrema de carregamento.
* **Restrição 2: Isolamento de Aplicações PWA:**
  * *Impacto:* Quando um usuário clica em um link com `target="_blank"` em um PWA instalado em modo `standalone`, o sistema operacional abre o navegador externo (Chrome/Safari). Para manter o estudante imerso no app, todas as páginas informativas institucionais (Sobre, Termos, Privacidade e Avisos) foram obrigatoriamente construídas como gavetas/modais internos.

---

## 3. LIÇÕES APRENDIDAS

* **Simplicidade de Vanilla Web Standards:** A dispensa de frameworks pesados (React, Angular, Vue) eliminou problemas de versionamento de pacotes, resultando em um bundle de build de apenas **105ms** e pontuação de performance próxima de 100.
* **Desacoplamento Orientado a Dados:** Isolar os dados dos 15 setores em um único arquivo JS permitiu que o HTML permanecesse limpo e sem duplicações, facilitando a manutenção por professores sem conhecimento de frontend avançado.
* **Design System Institucional com CSS Moderno:** O uso de CSS Custom Properties (`var(--...)`) e CSS Grid permitiu replicar a identidade visual do *EducaHub* e garantir a matriz 5x3 no desktop e 1 coluna no mobile de forma elegante.

---

## 4. DÉBITOS TÉCNICOS MAPEADOS

| Débito Técnico | Motivo | Prioridade | Plano de Tratamento |
| :--- | :--- | :---: | :--- |
| **Povoamento das URLs finais dos 15 grupos** | As páginas externas dos alunos ainda estão em desenvolvimento no semestre letivo. | Média | À medida que os grupos entregarem seus protótipos e obtiverem validação dos gestores, atualizar as propriedades `url` e `status: "active"` em `src/js/services-data.js`. |
| **Ícones PWA específicos para iOS (Apple Touch)** | Foi utilizado o ícone PNG oficial da FAMINAS com padding padrão. | Baixa | Gerar variante com fundo sólido quadrado de 180x180 sem transparência caso haja exigência visual específica em aparelhos Apple antigos. |
