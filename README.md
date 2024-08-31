TaskCLI - Simple Task Manager
TaskCLI es una aplicación de línea de comandos (CLI) escrita en Node.js que te permite gestionar tareas de manera sencilla. Con TaskCLI, puedes agregar, listar, actualizar, y eliminar tareas, así como marcar tareas como "en progreso" o "completadas". Este proyecto es ideal para aprender sobre manejo de archivos, manipulación de JSON, y desarrollo de aplicaciones CLI en Node.js.

Características
Agregar Tareas: Crea nuevas tareas con una descripción y un estado inicial de "todo".
Listar Tareas: Muestra todas las tareas, o filtra por estado (todo, in-progress, done).
Actualizar Tareas: Modifica la descripción de una tarea existente.
Eliminar Tareas: Elimina una tarea de la lista.
Marcar Tareas: Cambia el estado de una tarea a "in-progress" o "done".
Persistencia: Guarda y carga automáticamente las tareas desde un archivo JSON.
Requisitos
Node.js (v12.0.0 o superior)

Uso
Comandos Disponibles

Agregar una tarea
node index.js add "Descripción de la tarea"

Listar todas las tareas
node index.js list

Listar tareas por estado
node index.js list todo
node index.js list in-progress
node index.js list done

Actualizar una tarea
node index.js update <ID> "Nueva descripción"

Eliminar una tarea
node index.js delete <ID>

Marcar una tarea como "en progreso"
node index.js mark-in-progress <ID>

Marcar una tarea como "completada"
node index.js mark-done <ID>
