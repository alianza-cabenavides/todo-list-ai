# Tecnologías y Estándares Técnicos: To-Do App Ultra Simple

Este documento detalla las tecnologías que se utilizarán para construir la "To-Do App Ultra Simple", así como los estándares técnicos básicos que se deben seguir.

---

## 1. Tecnologías Base

* **HTML5**: Para la estructura semántica de la página web (`public/index.html`).
* **CSS3**: Para estilizar la interfaz de usuario (`public/css/style.css`).
* **JavaScript (ES6+)**: Para toda la lógica de la aplicación (`public/js/app.js`).
    * **Exclusivamente "Vanilla JavaScript"**: No se permite el uso de frameworks, librerías de UI (ej. React, Vue, Angular, jQuery), o bundlers (ej. Webpack, Rollup). Todo el código JavaScript debe ser escrito directamente sin dependencias externas.
    * **API del Navegador `localStorage`**: Se utilizará para la persistencia de datos del lado del cliente.
    * **API del Navegador `DOM`**: Toda la manipulación de elementos HTML se realizará directamente utilizando las APIs nativas del Document Object Model (ej. `document.getElementById`, `element.appendChild`, `element.addEventListener`).

## 2. Herramientas de Desarrollo (Ninguna Externa Requiere Instalación)

Para esta versión simplificada, **no se requieren herramientas de desarrollo externas como Node.js, npm/Yarn, ESLint, Prettier o Jest**.

* La **revisión de código** y el cumplimiento de estándares de calidad se basarán en la **revisión manual de pares** y la adherencia a las directrices de codificación descritas a continuación.
* Las **pruebas** se realizarán de forma **manual** por el desarrollador para verificar la funcionalidad.

## 3. Estándares de Codificación (Basados en Convenios y Buenas Prácticas)

Aunque no hay herramientas automatizadas para aplicar estos estándares, es crucial que Copilot los tenga en cuenta al generar el código:

* **Semántica HTML**:
    * Utilizar etiquetas HTML apropiadas para su propósito (`<header>`, `<main>`, `<footer>`, `<button>`, `<input>`, `<ul>`, `<li>`).
    * Usar `id`s y `class`es descriptivos para facilitar la manipulación del DOM y el estilado.
* **CSS Limpio y Organizado**:
    * Nombres de clases descriptivos y significativos.
    * Evitar el uso de selectores CSS excesivamente específicos o `!important` a menos que sea absolutamente necesario.
    * Considerar la organización básica de reglas CSS (ej. por componente o por tipo de elemento).
* **JavaScript (ES6+ Vanilla)**:
    * **Organización Interna de `app.js`**: Aunque es un solo archivo, la lógica debe estar modularizada internamente en **funciones claras y con un único propósito**. Se pueden agrupar funciones relacionadas (ej. funciones para manejar el modelo de datos, funciones para renderizar la UI, funciones para manejar eventos).
    * **Variables**: Preferir `const` y `let` sobre `var` para la declaración de variables.
    * **Funciones Flecha (Arrow Functions)**: Utilizar para funciones anónimas y para mantener el contexto `this` de forma más predecible.
    * **Manejo de Eventos**: Delegar eventos cuando sea apropiado para mejorar el rendimiento (ej. adjuntar un solo listener a la lista de tareas en lugar de a cada tarea individual).
    * **Manipulación del DOM Eficiente**: Minimizar el número de manipulaciones directas del DOM para mejorar el rendimiento. Por ejemplo, construir fragmentos de DOM y añadirlos de una sola vez.
    * **Validación de Entrada**: Realizar validaciones básicas en la entrada del usuario antes de procesarla (ej. verificar que el texto de la tarea no esté vacío).
    * **Comentarios**: Añadir comentarios concisos y significativos donde la lógica no sea inmediatamente obvia o para explicar partes complejas del código.
    * **Nombres de Funciones y Variables**: Usar nombres descriptivos y camelCase para funciones y variables.

## 4. Desarrollo y Despliegue

* **No se requiere un servidor web**: La aplicación se puede ejecutar simplemente abriendo el archivo `public/index.html` en cualquier navegador moderno.
* **Despliegue**: Simplemente consiste en subir la carpeta `public/` a cualquier servicio de hosting estático (ej. GitHub Pages, Netlify).