# Proyecto-Integrador
Modulo 1 Cohorte 5
💫 Rick and Morty Characters – Web App

Esta es una aplicación web que consume la API pública de Rick and Morty para mostrar personajes, permitir buscarlos por nombre y cambiar entre modo claro/oscuro.
El proyecto está desarrollado con HTML, CSS y JavaScript puro, sin frameworks.

🚀 Características principales

🔎 Búsqueda de personajes por nombre.

🧩 Resultados dinámicos generados desde JavaScript.

🌙 Modo oscuro / modo claro con guardado automático en localStorage.

📱 Diseño totalmente responsivo con CSS Grid y Flexbox.

⚡ Consumo de API en tiempo real usando fetch().

🛡️ Manejo de errores cuando no se encuentran personajes.

📂 Estructura del proyecto
📁 Proyecto
 ├── index.html
 ├── styles.css
 ├── index.js
 └── README.md

🧠 Tecnologías utilizadas

HTML5 – estructura del sitio

CSS3 – estilos, variables CSS, responsividad

JavaScript (ES6+) – lógica del tema, consumo de API, render dinámico

Rick and Morty API – fuente de datos (https://rickandmortyapi.com/
)

🖼️ Vista previa del proyecto

(Puedes agregar screenshots aquí si quieres)

![Preview](ruta-de-tu-imagen.png)

⚙️ Cómo usar el proyecto

Clona este repositorio:

git clone https://github.com/tuusuario/tu-repositorio.git


Entra al proyecto:

cd tu-repositorio


Abre el archivo:

index.html


¡Y ya puedes usar la aplicación!

🧩 Funcionamiento interno
🔗 Consumo de API

El proyecto utiliza la URL:

https://rickandmortyapi.com/api/character/?name=TU_BUSQUEDA

🎨 Sistema de temas

El modo oscuro/claro funciona con una clase:

body.dark-mode { ... }


Y las variables CSS se actualizan automáticamente.

🔎 Búsqueda

La búsqueda se hace sin recargar la página gracias al evento:

searchForm.addEventListener('submit', ...)

📌 Mejoras futuras

Agregar paginación

Mostrar más información de cada personaje

Implementar búsqueda en tiempo real (mientras se escribe)

Añadir una pantalla de carga (loader)

👨‍💻 Autor

Proyecto creado por Juan David Garcia Olaya
