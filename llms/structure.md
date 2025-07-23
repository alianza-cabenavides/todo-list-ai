# Estructura del Proyecto: To-Do App Ultra Simple

Este documento describe la estructura de carpetas y archivos del proyecto "To-Do App Ultra Simple". Su propósito es guiar el desarrollo y asegurar una organización clara para una aplicación puramente cliente-side.

---

## 1. /todo-app-ultra-simple/

Esta es la carpeta raíz del proyecto.

### 1.1. `/public/`
Contiene todos los archivos accesibles directamente por el navegador web, que son los únicos archivos necesarios para que la aplicación funcione.

* **`public/index.html`**:
    * **Propósito**: Es el único archivo HTML de la aplicación. Define la estructura de la página principal: título, metadatos, enlace a CSS y carga del JavaScript principal.
    * **Contenido clave**: Debe incluir un campo de entrada para nuevas tareas, un botón para añadir, y un contenedor (`<ul>` o `<div>`) donde se listarán las tareas.

* **`public/css/`**:
    * **`public/css/style.css`**:
        * **Propósito**: Contiene todos los estilos CSS para la interfaz de usuario de la aplicación.
        * **Contenido clave**: Estilos para el contenedor principal, los elementos de tarea (normal y completada), el formulario de entrada, y cualquier otro componente visual necesario para una experiencia de usuario clara.

* **`public/js/`**:
    * **`public/js/app.js`**:
        * **Propósito**: Es el único archivo JavaScript de la aplicación. Contiene toda la lógica de negocio, la manipulación del DOM y el manejo de eventos.
        * **Responsabilidades clave**:
            * Inicialización de la aplicación al cargar el DOM.
            * Funciones para **añadir una tarea**.
            * Funciones para **listar/renderizar tareas** en la interfaz.
            * Funciones para **marcar una tarea como completada** (toggle).
            * Manejo de la **persistencia de datos** (usando `localStorage`).
            * Manejo de eventos del usuario (clics en botones, envíos de formularios, etc.).

### 1.2. `/docs/`
Contiene la documentación relevante del proyecto.

* **`docs/how-to-use.md`**:
    * **Propósito**: Proporciona instrucciones claras sobre cómo abrir y usar la aplicación (simplemente abrir `index.html` en un navegador).
* **`docs/architecture.md`**:
    * **Propósito**: Describe la organización lógica interna del archivo `public/js/app.js`, destacando cómo se separan conceptualmente las responsabilidades de datos, vista e interacción dentro de un único archivo JavaScript.

### 1.3. Archivos de Configuración Raíz (Mínimos)

* **`README.md`**:
    * **Propósito**: Descripción general del proyecto y cómo configurarlo (simplemente abrir el archivo `index.html`).
* **`CHANGELOG.md`**:
    * **Propósito**: Registro cronológico de cambios y versiones de la aplicación (opcional pero recomendado para el seguimiento manual).