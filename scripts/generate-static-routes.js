import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
    'servizi',
    'preventivo',
    'contatti',
    'privacy'
];

const distPath = path.resolve(__dirname, '../dist');
const indexPath = path.join(distPath, 'index.html');

if (!fs.existsSync(indexPath)) {
    console.error('Error: dist/index.html not found. Run build first.');
    process.exit(1);
}

routes.forEach(route => {
    const routeDir = path.join(distPath, route);
    if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
    }
    fs.copyFileSync(indexPath, path.join(routeDir, 'index.html'));
    console.log(`Generated static route: ${route}/index.html`);
});

console.log('✅ Static routes generation complete.');
