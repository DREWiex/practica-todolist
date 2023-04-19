# Práctica TodoList

#### Autores: *Kevin Escobar y Andrés León*

En esta práctica hemos desarrollado una aplicación que permite añadir y eliminar tareas a través de un formulario, además de marcarla como finalizada si así lo decidiera el usuario.

La versión 1.0.0 ha sido desplegada en Netlify: https://proyecto-todolist-fbw.netlify.app/

---

## Inicialización

Pasos para iniciar la aplicación desde la terminal:

1. Clonar el repositorio:

~~~
git clone https://github.com/DREWiex/practica-todolist.git
~~~

2. Instalar módulos:

~~~
yarn
~~~

3. Iniciar el proyecto:

~~~
yarn dev
~~~

La ruta local del proyecto es: http://localhost:5173/

---

## Tecnologías

* **Yarn:** versión 3.5.0
* **React:** versión 18.2.0
* **Vite:** versión 4.2.0

---

## Funcionalidades

Para desarrollar la aplicación hemos utilizado como herramientas React y Vite, lo que nos permitió trabajar con componentes para las distintas funcionalidades de una forma organizada, ágil y más limpia.

A continuación, explicamos las distintas funcionalidades:

* **ToDoList**
Es el componente principal. En él invocamos el hook personalizado ```useTodoList()``` donde se encuentran las funciones que gestionan el ```useReducer```.

* **Form**
Hereda del componente ```ToDoList``` la función ```handleNewTask```, la cual se encarga de recibir el nuevo estado declarado como objeto en la constante ```newTask```. Dicho objeto, el cual se obtiene del formulario, está compuesto por las siguientes propiedades:
    * *id:* el método ```Date.now()``` del objeto ```Date```.
    * *newTask:* el nombre de la tarea.
    * *description:* la descripción de la tarea.
    * *done:* se inicializa en ```false```.
    * *date*: el constructor ```new Date()``` del objeto ```Date```.

* **Tareas**
Hereda del componente ```ToDoList``` el estado (```tasks```) y las funciones del hook personalizado ```useToDoList``` que se encargan de eliminar las tareas (```handleDeleteTask```) y modificar el botón que especifica si la tarea está pendiente o finalizada (```handleToggleTask```). A su vez, todos estos argumentos se envían a través del objeto props al componente ```Table```.

* **Table**
Hereda del componente ```Tareas``` tanto el estado como las funciones del hook que gestionan el ```useReducer```, en este caso en concreto el ```handleDeleteTask``` y ```handleToggleTask```. Devuelve los elementos html de la tabla que se renderizarán de forma dinámica con los datos del objeto del estado.
