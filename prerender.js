import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {render} from './dist/server/main.server.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const routesToPrerender = ['/home', '/app/all', '/share'];

(async () => {
  const template = fs.readFileSync(
    toAbsolute('dist/client/index.html'),
    'utf-8'
  );

  for (const url of routesToPrerender) {
    const request = new Request(`http://localhost${url}`);
    const appHtml = await render(request);
    const html = template.replace('<!--app-html-->', appHtml);

    const filePath = `dist/client${url === '/' ? '/index' : url}.html`;
    fs.mkdirSync(path.dirname(toAbsolute(filePath)), {recursive: true});
    fs.writeFileSync(toAbsolute(filePath), html);
    console.log('pre-rendered:', filePath);
  }
})();
