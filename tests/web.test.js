const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

// TEST 1: Estructura HTML
test('El HTML contiene la estructura principal', () => {
  assert.match(html, /<!doctype html>/i);
  assert.match(html, /<html\b[^>]*lang="es"/i);
  assert.match(html, /<title>[^<]+<\/title>/i);
  assert.match(html, /<main\b/i);
  assert.match(html, /<footer\b/i);
});

// TEST 2: Secciones principales
test('Existen las secciones principales', () => {
  for (const id of ['inicio', 'proyectos', 'estudio', 'esto-va-a-fallar']) {
    assert.match(html, new RegExp(`\\bid="${id}"`));
  }
});

// TEST 3: Enlaces internos
test('Los enlaces internos apuntan a secciones existentes', () => {
  const ids = new Set(
    [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1])
  );

  const anchors = [...html.matchAll(/\bhref="#([^"]+)"/g)];

  assert.ok(anchors.length > 0, 'Debe haber enlaces internos');

  for (const [, target] of anchors) {
    assert.ok(ids.has(target), `No existe el destino #${target}`);
  }
});

// TEST 4: Sintaxis JavaScript
test('El JavaScript no contiene errores de sintaxis', () => {
  assert.doesNotThrow(() => {
    execFileSync(process.execPath, [
      '--check',
      path.join(root, 'script.js')
    ]);
  });
});

// TEST 5: Menú móvil y reloj
test('Existen los elementos del menú móvil y del reloj', () => {
  const elementos = [
    'site-nav',
    'analog-clock',
    'clock-time',
    'clock-hour',
    'clock-minute',
    'clock-second',
    'current-year'
  ];

  for (const id of elementos) {
    assert.match(html, new RegExp(`\\bid="${id}"`));
  }

  assert.match(html, /class="menu-toggle"/);
});
