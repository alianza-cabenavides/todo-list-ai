# Diseño de Producto: To-Do App Ultra Simple

Este documento describe la lógica de negocio y las funcionalidades principales de la "To-Do App Ultra Simple".

---

## 1. Propósito de la Aplicación

La aplicación es una herramienta básica para gestionar tareas pendientes. Permite a los usuarios añadir nuevas tareas, ver una lista de sus tareas y marcar tareas como completadas. Es una aplicación web estática que se ejecuta directamente en el navegador.

## 2. Lógica de Negocio y Funcionalidades

### 2.1. Gestión de Tareas

* **Creación de Tareas**:
    * Un usuario debe poder introducir texto en un campo de entrada (input text).
    * Al hacer clic en un botón "Añadir" (o presionar la tecla Enter), el texto se debe validar y, si es válido, se convierte en una nueva tarea.
    * Cada nueva tarea debe tener un **estado inicial de "pendiente" (no completada)**.
    * Las tareas vacías (cadenas de texto vacías o que solo contengan espacios) **no deben ser creadas**. Se puede dar una alerta simple al usuario si intenta añadir una tarea vacía.

* **Listado de Tareas**:
    * Todas las tareas (pendientes y completadas) deben mostrarse en una lista en la interfaz de usuario.
    * Las tareas deben mostrarse en el orden en que fueron añadidas.

* **Marcado de Tareas como Completadas**:
    * Un usuario debe poder **alternar el estado** de una tarea entre "pendiente" y "completada". Esto se implementará típicamente haciendo clic en el elemento de la tarea o un checkbox asociado.
    * Cuando una tarea se marca como completada, debe haber una **indicación visual clara** (ej. tachado del texto de la tarea, cambio de color del texto o del fondo).
    * Al desmarcar una tarea completada, debe volver a su estado "pendiente" y la indicación visual debe desaparecer.

* **Limpieza de Tareas Completadas**:
    * El usuario debe poder eliminar todas las tareas que estén marcadas como completadas mediante un botón específico ("Limpiar completadas").
    * Al hacer clic en este botón, todas las tareas completadas se eliminan de la lista y del almacenamiento.
    * La interfaz debe actualizarse inmediatamente para reflejar la eliminación de las tareas.

### 2.2. Persistencia de Datos

* Las tareas deben **guardarse en el navegador** utilizando **`localStorage`** para que persistan incluso si el usuario cierra y vuelve a abrir la aplicación o refresca la página.
* Las tareas se almacenarán en `localStorage` como una cadena JSON.
* Al cargar la aplicación (`public/index.html`), las tareas guardadas deben ser recuperadas de `localStorage` y mostradas en la interfaz.

## 3. Experiencia de Usuario (UX) Básica

* La interfaz debe ser **simple, clara y fácil de usar**.
* Debe haber **retroalimentación visual inmediata** para las acciones del usuario (ej. una tarea se tacha visiblemente al ser marcada como completada).
* Se recomienda un diseño limpio y minimalista.

## 4. Requisitos No Funcionales (Contexto para Calidad)

* **Usabilidad**: Interfaz intuitiva para las funcionalidades básicas.
* **Rendimiento**: La aplicación debe ser reactiva y no mostrar lentitud en la interacción con pocas tareas (hasta ~50 tareas). Dado que no hay frameworks, la manipulación del DOM debe ser eficiente.
* **Mantenibilidad**: Aunque es un solo archivo JavaScript, el código debe ser legible, bien estructurado internamente con funciones claras, y comentado donde sea necesario para futuras modificaciones manuales.