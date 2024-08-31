# TaskCLI - Simple Task Manager

## Características
### *Agregar Tareas:*
Crea nuevas tareas con una descripción y un estado inicial de "todo".
### *Listar Tareas:*
Muestra todas las tareas, o filtra por estado (todo, in-progress, done).
### *Actualizar Tareas:*
Modifica la descripción de una tarea existente.
### *Eliminar Tareas:* 
Elimina una tarea de la lista.
### *Marcar Tareas:* 
Cambia el estado de una tarea a "in-progress" o "done".
### *Persistencia:*
Guarda y carga automáticamente las tareas desde un archivo JSON.


## Comandos Disponibles

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

https://roadmap.sh/projects/task-tracker
