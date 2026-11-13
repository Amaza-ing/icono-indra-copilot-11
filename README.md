# Norte Studio

Landing page estática y responsive para un estudio creativo independiente. El proyecto presenta una identidad visual minimalista, una narrativa clara para la marca y una estructura de una sola página pensada para comunicar servicios, proyectos recientes y contacto.

## Descripción del proyecto

Norte Studio es una web de presentación enfocada en transmitir una estética sobria, moderna y cálida. La página incluye:

- Cabecera con navegación principal y menú móvil
- Hero section con propuesta de marca y llamada a la acción
- Sección de proyectos recientes con tarjetas visuales
- Presentación del estudio y su enfoque de trabajo
- Área de contacto y CTA directa por correo
- Reloj analógico dinámico con la hora local
- Animaciones de entrada al hacer scroll

## Tecnologías

Este proyecto está desarrollado con tecnologías front-end básicas:

- HTML5
- CSS3
- JavaScript vanilla

No requiere dependencias ni compilación adicional.

## Estructura del proyecto

```text
mi-web/
├── index.html
├── styles.css
├── script.js
├── .github/
│   ├── agents/
│   │   ├── web-lead.agent.md
│   │   ├── ux-ui.agent.md
│   │   ├── front-end.agent.md
│   │   └── code-review.agent.md
│   └── copilot-instructions.md
└── README.md
```

## Cómo ejecutar el proyecto

### Opción 1: abrir directamente

Puedes abrir el archivo `index.html` en cualquier navegador moderno.

### Opción 2: servir la web localmente

Desde la raíz del proyecto ejecuta:

```bash
cd "C:\Documentos\Icono\Copilot-GitHub-Copilot-12\mi-web"
python -m http.server 8000
```

Después abre la siguiente URL en el navegador:

```text
http://localhost:8000
```

También puedes usar extensiones como Live Server en VS Code para visualizar cambios en tiempo real.

## Agentes de GitHub Copilot en VS Code

Los archivos de `.github/agents/` están configurados para sesiones **Copilot**, con `target: github-copilot`. Abre esta carpeta como proyecto, inicia un chat nuevo con Copilot y selecciona `web-lead` en el selector de agentes.

`web-lead` puede leer, buscar y editar archivos, y delegar en los especialistas. `ux-ui` propone el diseño, `front-end` aplica los cambios y `code-review` revisa el resultado. Los tres especialistas usan `user-invocable: false`: quedan ocultos en el selector, pero el coordinador puede invocarlos como subagentes.

Para comprobar el acceso a los archivos sin modificar la web, pide:

```text
Lee index.html y styles.css con tus herramientas. Dime qué clase tiene
la cabecera y qué reglas CSS la afectan. No modifiques ningún archivo.
```

Comprueba que la actividad del chat muestra lecturas reales y que la respuesta coincide con el código. Después puedes pedir a `web-lead` que mejore la cabecera y aplique los cambios en los archivos.

Si responde que no puede acceder al proyecto:

1. Comprueba que la sesión usa Copilot y está asociada a esta carpeta. Adjuntar un `.agent.md` como contexto no sustituye a seleccionar el agente.
2. Abre **Chat: Open Customizations** y revisa que los cuatro agentes aparecen sin errores. En **Tools**, comprueba las capacidades disponibles; `web-lead` necesita `read`, `search`, `edit` y `agent`.
3. Tras modificar los agentes, inicia un chat nuevo. Si los cambios no aparecen, ejecuta **Developer: Reload Window** y vuelve a seleccionar `web-lead`.
4. Si falla una herramienta, revisa el error de esa llamada y los permisos que solicite. Para aislar el problema, repite la prueba de lectura con el agente integrado **Agent**: si también falla, el problema afecta a la sesión o al acceso al proyecto.

La configuración anterior usaba `target: vscode`, grupos de herramientas propios de Local y un coordinador limitado a `tools: [agent]`. La configuración actual utiliza los alias de Copilot y define los encargos a los especialistas en las instrucciones. El campo `agents` de Local no se admite en el esquema de Copilot. Consulta la [referencia de agentes de VS Code](https://code.visualstudio.com/docs/agents/reference/custom-agent-file-reference) y la [guía de migración de herramientas](https://code.visualstudio.com/docs/agent-customization/migrate-customizations#why-does-an-agent-fail-with-a-tool-discovery-capability-error) para ampliar las herramientas.

## Personalización

Los principales puntos de edición están en:

- `index.html`: estructura del contenido y secciones
- `styles.css`: diseño visual, tipografías, colores y responsive
- `script.js`: comportamiento del menú, reloj y animaciones

## Objetivo

La web busca comunicar una marca creativa con un tono cercano, claro y profesional, y sirve como base para presentar trabajos o servicios de diseño, estrategia y branding.

## Autor

Proyecto de ejemplo para una marca de estudio creativo.
