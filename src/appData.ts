import fotoPerfil from './assets/Imagenes/fotoPerfil.jpg'
import imagenReact from './assets/Imagenes/react.png'
import imagenCss from './assets/Imagenes/css.png'
import imagenExpress from './assets/Imagenes/express.png'
import imagenHtml from './assets/Imagenes/html.png'
import imagenMysql from './assets/Imagenes/mysql.png'
import imagenNode from './assets/Imagenes/node.png'
import imagenWebTresEnRaya from './assets/Imagenes/webTresEnRaya.png'
import imagenWebEmpresaElectrica from './assets/Imagenes/webEmpresaElectrica.png'
import imagenWebRestaurante from './assets/Imagenes/webRestaurante.png'
import imagenCarritoCompra from './assets/Imagenes/webCarritoCompra.png'
import imagenApiEcommerce from './assets/Imagenes/ApiEcommerce.png'
import type { AppData } from './types/types'
import { getRandomId } from './utils/utils'

export const appData: AppData = {
  navbar: {
    name: "Michael",
    menu: ["Inicio", "Servicios", "Skills", "Portafolio", "Contacto"]
  },
  sectionProfile: {
    name: "Michael",
    role: "Full Stack Developer",
    description:
      "Como profesional puedo ofrecer soluciones rápidas y eficientes siguiendo las mejores prácticas de desarrollo, además me mantengo en constante aprendizaje y mejora mis habilidades técnicas. Tengo experiencia como programador freelancer, he trabajado en diversos proyectos de desarrollo web, como la creación de landing pages para empresas o sistemas más complejos como Ecommerce, gestor de citas médicas y software para reservaciones en restaurantes.",
    link: "https://github.com/LightKra",
    image: {
      id: getRandomId(),
      src: fotoPerfil,
      alt: "Foto de perfil"
    }
  },
  sectionServices: [
    {
      id: getRandomId(),
      name: "Desarrollo Frontend",
      description:
        "Un desarrollador frontend es el profesional responsable de crear la parte visual e interactiva de una aplicación o sitio web, es decir, lo que los usuarios ven y con lo que interactúan directamente. Su trabajo incluye diseñar y construir interfaces de usuario atractivas, accesibles y funcionales, asegurándose de que el sitio web o aplicación sea amigable, rápido y adaptable a diferentes dispositivos y tamaños de pantalla."
    },
    {
      id: getRandomId(),
      name: "Desarrollo Backend",
      description:
        "Un desarrollador backend es el profesional encargado de la parte del servidor y la lógica detrás de una aplicación o sitio web. A diferencia del frontend, el backend es la capa que no se ve directamente, pero es esencial para que el sitio funcione correctamente, ya que gestiona las bases de datos, los servidores, la lógica de negocio y el procesamiento de datos."
    },
    {
      id: getRandomId(),
      name: "Diseño UI/UX",
      description:
        "Un diseñador UI/UX es el profesional encargado de crear experiencias de usuario atractivas y eficientes, así como interfaces visualmente agradables e intuitivas para aplicaciones o sitios web. Aunque UI y UX son roles diferentes, el diseñador UI/UX a menudo combina ambas disciplinas, logrando que un producto no solo sea visualmente atractivo sino también funcional y fácil de usar. El objetivo principal de un diseñador UI/UX es que los usuarios tengan una experiencia agradable, sin fricciones, y que logren sus objetivos de manera efectiva."
    }
  ],
  sectionSkills: [
    {
      id: getRandomId(),
      name: "HTML",
      image: { id: "html", src: imagenHtml, alt: "Imagen de la skill" }
    },
    {
      id: getRandomId(),
      name: "CSS",
      image: { id: "css", src: imagenCss, alt: "Imagen de la skill" }
    },
    {
      id: getRandomId(),
      name: "React",
      image: { id: "react", src: imagenReact, alt: "Imagen de la skill" }
    },
    {
      id: getRandomId(),
      name: "Node",
      image: { id: "node", src: imagenNode, alt: "Imagen de la skill" }
    },
    {
      id: getRandomId(),
      name: "Express",
      image: { id: "express", src: imagenExpress, alt: "Imagen de la skill" }
    },
    {
      id: getRandomId(),
      name: "Mysql",
      image: { id: "mysql", src: imagenMysql, alt: "Imagen de la skill" }
    }
  ],
  sectionProject: [
    {
      id: getRandomId(),
      name: "Web Para Restaurante",
      link: "https://github.com/LightKra/Pagina-Web-Restaurante",
      image: [
        {
          id: getRandomId(),
          src: imagenWebRestaurante,
          alt: "portada del proyecto"
        }
      ]
    },
    {
      id: getRandomId(),
      name: "Web Empresa Electricidad",
      link: "https://github.com/LightKra/Instalacion-Electrica",
      image: [
        {
          id: getRandomId(),
          src: imagenWebEmpresaElectrica,
          alt: "portada del proyecto"
        }
      ]
    },
    {
      id: getRandomId(),
      name: "Juego Tres En Raya",
      link: "https://github.com/LightKra/TicToc-Juego",
      image: [
        {
          id: getRandomId(),
          src: imagenWebTresEnRaya,
          alt: "portada del proyecto"
        }
      ]
    },
    {
      id: getRandomId(),
      name: "Carrito De Compras",
      link: "https://github.com/LightKra/Carrito-Ecommerce",
      image: [
        {
          id: getRandomId(),
          src: imagenCarritoCompra,
          alt: "portada del proyecto"
        }
      ]
    },
    {
      id: getRandomId(),
      name: "Api Para Ecommerce",
      link: "https://github.com/LightKra/Api-Ecommerce",
      image: [
        {
          id: getRandomId(),
          src: imagenApiEcommerce,
          alt: "portada del proyecto"
        }
      ]
    }
  ]
};

