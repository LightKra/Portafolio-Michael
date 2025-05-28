import fotoPerfil from '../assets/Imagenes/fotoPerfil.jpg'
import imagenReact from '../assets/Imagenes/react.png'
import imagenCss from '../assets/Imagenes/css.png'
import imagenExpress from '../assets/Imagenes/express.png'
import imagenHtml from '../assets/Imagenes/html.png'
import imagenMysql from '../assets/Imagenes/mysql.png'
import imagenNode from '../assets/Imagenes/node.png'
import imagenEmpresaElectrica1 from '../assets/Imagenes/EmpresaElectrica1.png'
import imagenEmpresaElectrica2 from '../assets/Imagenes/EmpresaElectrica2.png'
import imagenEmpresaElectrica3 from '../assets/Imagenes/EmpresaElectrica3.png'
import imagenEmpresaElectrica4 from '../assets/Imagenes/EmpresaElectrica4.png'
import imagenApiEcommerce1 from '../assets/Imagenes/ApiEcommerce1.png'
import imagenApiEcommerce2 from '../assets/Imagenes/ApiEcommerce2.png'
import imagenApiEcommerce3 from '../assets/Imagenes/ApiEcommerce3.png'
import imagenWorldAppFrontend1 from '../assets/Imagenes/worldAppFrontend1.png'
import imagenWorldAppFrontend2 from '../assets/Imagenes/worldAppFrontend2.png'
import imagenWorldAppfrontend3 from '../assets/Imagenes/worldAppFrontend3.png'
import imagenWorldAppFrontend4 from '../assets/Imagenes/worldAppFrontend4.png'
import imagenWorldAppFrontend5 from '../assets/Imagenes/worldAppFrontend5.png'
import imagenWorldAppApi1 from '../assets/Imagenes/worldAppApi1.png'
import imagenWorldAppApi2 from '../assets/Imagenes/worldAppApi2.png'
import imagenWorldAppApi3 from '../assets/Imagenes/worldAppApi3.png'
import imagenWorldAppApi4 from '../assets/Imagenes/worldAppApi4.png'
import imagenWorldAppApi5 from '../assets/Imagenes/worldAppApi5.png'
import imagenTiendaMia1 from '../assets/Imagenes/ClonTiendaMia1.png'
import imagenTiendaMia2 from '../assets/Imagenes/ClonTiendaMia2.png'
import imagenTiendaMia3 from '../assets/Imagenes/ClonTiendaMia3.png'
import imagenTiendaMia4 from '../assets/Imagenes/ClonTiendaMia4.png'
import imagenTiendaMia5 from '../assets/Imagenes/ClonTiendaMia5.png'
import imagenTiendaMia6 from '../assets/Imagenes/ClonTiendaMia6.png'
import imagenTiendaMia7 from '../assets/Imagenes/ClonTiendaMia7.png'
import imagenRoboFlow1 from '../assets/Imagenes/ClonRoboflow1.png'
import imagenRoboFlow2 from '../assets/Imagenes/ClonRoboflow2.png'
import imagenRoboFlow3 from '../assets/Imagenes/ClonRoboflow3.png'
import imagenRoboFlow4 from '../assets/Imagenes/ClonRoboflow4.png'
import imagenRoboFlow5 from '../assets/Imagenes/ClonRoboflow5.png'
import imagenRoboFlow6 from '../assets/Imagenes/ClonRoboflow6.png'
import imagenRoboFlow7 from '../assets/Imagenes/ClonRoboflow7.png'
import imagenRoboFlow8 from '../assets/Imagenes/ClonRoboflow8.png'
import imagenRoboFlow9 from '../assets/Imagenes/ClonRoboflow9.png'
import type { AppData } from '../types/types'
import { getRandomId } from '../utils/utils'

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
      name: "World App Frontend",
      link: "https://github.com/LightKra/Frontend-Miniapp-Worldapp",
      image: [
        {
          id: getRandomId(),
          src: imagenWorldAppFrontend1,
          alt: "Imagen de mini aplicacion de World App Frontend"
        },
        {
          id: getRandomId(),
          src: imagenWorldAppFrontend2,
          alt: "Imagen de mini aplicacion de World App Frontend"
        },
        {
          id: getRandomId(),
          src: imagenWorldAppfrontend3,
          alt: "Imagen de mini aplicacion de World App Frontend"
        },
        {
          id: getRandomId(),
          src: imagenWorldAppFrontend4,
          alt: "Imagen de mini aplicacion de World App Frontend"
        },
        {
          id: getRandomId(),
          src: imagenWorldAppFrontend5,
          alt: "Imagen de mini aplicacion de World App Frontend"
        }
      ]
    },
    {
      id: getRandomId(),
      name: "World App Api",
      link: "https://github.com/LightKra/Api-Miniapp-WorldAPP",
      image: [
        {
          id: getRandomId(),
          src: imagenWorldAppApi1,
          alt: "Imagen de mini aplicacion de World App Api"
        },
        {
          id: getRandomId(),
          src: imagenWorldAppApi2,
          alt: "Imagen de mini aplicacion de World App Api"
        },
        {
          id: getRandomId(),
          src: imagenWorldAppApi3,
          alt: "Imagen de mini aplicacion de World App Api"
        },
        {
          id: getRandomId(),
          src: imagenWorldAppApi4,
          alt: "Imagen de mini aplicacion de World App Api"
        },
        {
          id: getRandomId(),
          src: imagenWorldAppApi5,
          alt: "Imagen de mini aplicacion de World App Api"
        }
      ]
    },
    {
      id: getRandomId(),
      name: "Landing Page Empresa Electricidad",
      link: "https://github.com/LightKra/Instalacion-Electrica",
      image: [
        {
          id: getRandomId(),
          src: imagenEmpresaElectrica1,
          alt: "imagen de landing page para empresa de electricidad"
        },
        {
          id: getRandomId(),
          src: imagenEmpresaElectrica2,
          alt: "imagen de landing page para empresa de electricidad"
        },
        {
          id: getRandomId(),
          src: imagenEmpresaElectrica3,
          alt: "imagen de landing page para empresa de electricidad"
        },
        {
          id: getRandomId(),
          src: imagenEmpresaElectrica4,
          alt: "imagen de landing page para empresa de electricidad"
        }
      ]
    },
    {
      id: getRandomId(),
      name: "Clon Tienda Mia",
      link: "https://github.com/LightKra/Tienda-Mia-Web",
      image: [
        {
          id: getRandomId(),
          src: imagenTiendaMia1,
          alt: "Imagen de clon de tienda Mia"
        },
        {
          id: getRandomId(),
          src: imagenTiendaMia2,
          alt: "Imagen de clon de tienda Mia"
        },
        {
          id: getRandomId(),
          src: imagenTiendaMia3,
          alt: "Imagen de clon de tienda Mia"
        },
        {
          id: getRandomId(),
          src: imagenTiendaMia4,
          alt: "Imagen de clon de tienda Mia"
        },
        {
          id: getRandomId(),
          src: imagenTiendaMia5,
          alt: "Imagen de clon de tienda Mia"
        },
        {
          id: getRandomId(),
          src: imagenTiendaMia6,
          alt: "Imagen de clon de tienda Mia"
        },
        {
          id: getRandomId(),
          src: imagenTiendaMia7,
          alt: "Imagen de clon de tienda Mia"
        }
      ]
    },
    {
      id: getRandomId(),
      name: "Clon Roboflow",
      link: "https://github.com/eduglobeh/demo-pattern",
      image: [
        {
          id: getRandomId(),
          src: imagenRoboFlow1,
          alt: "Imagen de clon de Roboflow"
        },
        {
          id: getRandomId(),
          src: imagenRoboFlow2,
          alt: "Imagen de clon de Roboflow"
        },
        {
          id: getRandomId(),
          src: imagenRoboFlow3,
          alt: "Imagen de clon de Roboflow"
        },
        {
          id: getRandomId(),
          src: imagenRoboFlow4,
          alt: "Imagen de clon de Roboflow"
        },
        {
          id: getRandomId(),
          src: imagenRoboFlow5,
          alt: "Imagen de clon de Roboflow"
        },
        {
          id: getRandomId(),
          src: imagenRoboFlow6,
          alt: "Imagen de clon de Roboflow"
        },
        {
          id: getRandomId(),
          src: imagenRoboFlow7,
          alt: "Imagen de clon de Roboflow"
        },
        {
          id: getRandomId(),
          src: imagenRoboFlow8,
          alt: "Imagen de clon de Roboflow"
        },
        {
          id: getRandomId(),
          src: imagenRoboFlow9,
          alt: "Imagen de clon de Roboflow"
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
          src: imagenApiEcommerce1,
          alt: "Imagen de Api para Ecommerce"
        },
        {
          id: getRandomId(),
          src: imagenApiEcommerce2,
          alt: "Imagen de Api para Ecommerce"
        },
        {
          id: getRandomId(),
          src: imagenApiEcommerce3,
          alt: "Imagen de Api para Ecommerce"
        }
      ]
    }
  ]
};

