import fotoPerfil from './assets/Imagenes/fotoPerfil.jpg'
import imagenReact from './assets/Imagenes/react.png'
import imagenCss from './assets/Imagenes/css.png'
import imagenExpress from './assets/Imagenes/express.png'
import imagenHtml from './assets/Imagenes/html.png'
import imagenMysql from './assets/Imagenes/mysql.png'
import imagenNode from './assets/Imagenes/node.png'
import imagenApiMusica from './assets/Imagenes/ApiMusica.png'
import imagenWebTresEnRaya from './assets/Imagenes/webTresEnRaya.png'
import imagenWebEmpresaElectrica from './assets/Imagenes/webEmpresaElectrica.png'
import imagenWebRestaurante from './assets/Imagenes/webRestaurante.png'
import imagenCarritoCompra from './assets/Imagenes/webCarritoCompra.png'

export const appData = {
    navbar : {
      nombrePerfil: "Michael",
      menu: ["Inicio", "Servicios", "Skills", "Portafolio", "Contacto"]
    },
    seccionPerfil: {
      imagen: fotoPerfil,
      imagenAlt: "Foto de perfil",
      nombrePerfil: "Michael",
      rol: "Full Stack Developer",
      descripcionPerfil: "Como profesional puedo ofrecer soluciones rapidas y eficientes siguiendo las mejores practicas de desarrollo, ademas me mantengo en constante aprendizaje y mejora mis habilidades técnicas. Tengo experiencia como programador freelancer, he trabajo en diversos proyecto de desarrollo web, como la creacion de landing pages para empresas o sistemas mas complejos como Ecommerce, Gestor de citas medicas y Software para reservaciones en restaurantes.",
      boton: {textoBoton: "GITHUB", url: "https://github.com/LightKra"}
    },
    seccionServicios: {
      listaServicios: [
        {nombre:"Desarrollo Frontend", descripcion: "Un desarrollador frontend es el profesional responsable de crear la parte visual e interactiva de una aplicación o sitio web, es decir, lo que los usuarios ven y con lo que interactúan directamente. Su trabajo incluye diseñar y construir interfaces de usuario atractivas, accesibles y funcionales, asegurándose de que el sitio web o aplicación sea amigable, rápido y adaptable a diferentes dispositivos y tamaños de pantalla."},
        {nombre:"Desarrollo Backend", descripcion: "Un desarrollador backend es el profesional encargado de la parte del servidor y la lógica detrás de una aplicación o sitio web. A diferencia del frontend, el backend es la capa que no se ve directamente, pero es esencial para que el sitio funcione correctamente, ya que gestiona las bases de datos, los servidores, la lógica de negocio y el procesamiento de datos."},
        {nombre:"Diseño UI/UX", descripcion: "Un diseñador UI/UX es el profesional encargado de crear experiencias de usuario atractivas y eficientes, así como interfaces visualmente agradables e intuitivas para aplicaciones o sitios web. Aunque UI y UX son roles diferentes, el diseñador UI/UX a menudo combina ambas disciplinas, logrando que un producto no solo sea visualmente atractivo sino también funcional y fácil de usar. El objetivo principal de un diseñador UI/UX es que los usuarios tengan una experiencia agradable, sin fricciones, y que logren sus objetivos de manera efectiva."}
      ]
    },
    seccionSkills: {
      listaSkills: [
        {nombre: "HTML", imagen: imagenHtml, imagenAlt: "Imagen de la skills"},
        {nombre: "CSS", imagen: imagenCss, imagenAlt: "Imagen de la skills"},
        {nombre: "React", imagen: imagenReact, imagenAlt: "Imagen de la skills"},
        {nombre: "Node", imagen: imagenNode, imagenAlt: "Imagen de la skills"},
        {nombre: "Express", imagen: imagenExpress, imagenAlt: "Imagen de la skills"},
        {nombre: "Mysql", imagen: imagenMysql, imagenAlt: "Imagen de la skills"}
      ]
    },
    seccionPortafolio: {
      listaPortafolio: [
        {imagen: imagenWebRestaurante, imagenAlt: "portada del proyecto", titulo: "Web Para Restaurante", textoBoton: "Abrir", url: "https://github.com/LightKra/Pagina-Web-Restaurante"},
        {imagen: imagenWebEmpresaElectrica, imagenAlt: "portada del proyecto", titulo: "Web Empresa Electricidad", textoBoton: "Abrir", url: "https://github.com/LightKra/Instalacion-Electrica"},
        {imagen: imagenWebTresEnRaya, imagenAlt: "portada del proyecto", titulo: "Juego Tres En Raya", textoBoton: "Abrir", url: "https://github.com/LightKra/TicToc-Juego"},
        {imagen: imagenApiMusica, imagenAlt: "portada del proyecto", titulo: "Api De Musica", textoBoton: "Abrir", url: "https://github.com/LightKra/Api-Musica"},
        {imagen: imagenCarritoCompra, imagenAlt: "portada del proyecto", titulo: "Carrito De Compras", textoBoton: "Abrir", url: "https://github.com/LightKra/Carrito-Ecommerce"}
      ]
    }
  }