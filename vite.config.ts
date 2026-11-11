import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { resolve, sep } from 'node:path';

export default defineConfig({
  plugins: [react(), tailwindcss(), {
    name: 'portfolio-preview-404',
    // Vite's SPA preview otherwise sends the homepage HTML for an unknown URL.
    // Preview the same static 404 document that is shipped to the hosting provider.
    configurePreviewServer(server) {
      const output = resolve(server.config.root, server.config.build.outDir);
      server.middlewares.use((request, response, next) => {
        let target: string;
        try {
          const path = decodeURIComponent(new URL(request.url || '/', 'http://localhost').pathname);
          target = resolve(output, `.${path}`);
        } catch { response.statusCode = 400; response.end('Invalid URL'); return; }
        const contained = target === output || target.startsWith(output + sep);
        if (contained && existsSync(target)) {
          if (statSync(target).isFile() || existsSync(resolve(target, 'index.html'))) { next(); return; }
        }
        const missing = resolve(output, '404.html');
        if (!existsSync(missing)) { next(); return; }
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html; charset=utf-8');
        response.end(readFileSync(missing));
      });
    },
  }],
  build: { target: 'es2022', sourcemap: false },
});
