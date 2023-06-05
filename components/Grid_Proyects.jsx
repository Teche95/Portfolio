
import Image from "next/image";
import calatheamarket from "../public/images/grid_proyects/calathea-market.webp"
import PI_VideoJuegos from "../public/images/grid_proyects/PI_VideoJuegos.webp"
import giphy from "../public/images/grid_proyects/giphy.webp"
import styles from "../styles/proyectos.module.css"
import { DiReact } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { DiNodejsSmall } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { DiCss3Full } from "react-icons/di";
import { SiPostgresql } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { SiRedux } from "react-icons/si";

// import projectimage03 from "../public/images/grid_proyects/project-image03.png"

let ListaDeProyectos = [
    {
        id: 1,
        nombre: "Calathea market",
        descripcion: "Ecommerce de venta de plantas",
        deployLink: "",
        repositorio: "",
        tecnologias: [
            <DiReact size="1.7rem" color="#5CCFEE" />,
            <IoLogoFirebase size="1.7rem" color="#F2BF26" />,
            <DiNodejsSmall size="1.7rem" color="#4F9640" />,
            <SiExpress size="1.7rem" color="white" />,
            <DiCss3Full size="1.7rem" color="#3492CB" />
        ],
        webs: [
            "https://es.react.dev/",
            "https://firebase.google.com/?hl=es",
            "https://nodejs.org/es",
            "https://expressjs.com/es/",
            "https://developer.mozilla.org/es/docs/Web/CSS"
        ],
        image: calatheamarket
    },
    {
        id: 2,
        nombre: "Video games app",
        descripcion: "Aplicacion tipo biblioteca de juegos",
        deployLink: "",
        repositorio: "",
        tecnologias: [
            <SiPostgresql size="1.7rem" color="#30628A" />,
            <SiJavascript size="1.7rem" color="#E4D04B" />,
            <SiSequelize size="1.7rem" color="#4EA7DB" />,
            <SiExpress size="1.7rem" color="white" />,
            <SiRedux size="1.7rem" color="#7046B2" />,
            <DiReact size="1.7rem" color="#5CCFEE" />,
            <DiCss3Full size="1.7rem" color="#3492CB" />
        ],
        webs: [
            "https://www.postgresql.org/",
            "https://developer.mozilla.org/es/docs/Web/JavaScript",
            "https://sequelize.org/",
            "https://expressjs.com/es/",
            "https://redux.js.org/",
            "https://es.react.dev/",
            "https://developer.mozilla.org/es/docs/Web/CSS"
        ],
        image: PI_VideoJuegos
    },


];

const Grid_Proyects = () => {
    return (
        <div className={styles.grid_container}>
            {
                ListaDeProyectos && ListaDeProyectos.map((proyecto) => (
                    <div className={styles.image} key={proyecto.id}>
                        <Image
                            className={styles.images}
                            src={proyecto.image}
                            width={515}
                            height={310}
                            alt={proyecto.nombre}
                            priority={false}
                        />
                        <div className={styles["image-info"]}>
                            <h2>{proyecto.nombre}</h2>
                            <p>{proyecto.descripcion}</p>
                            <div>
                                {proyecto.tecnologias?.map((tec, index) => (
                                    <a href={proyecto.webs[index]} key={index}>
                                        {tec}
                                    </a>
                                ))}
                            </div>

                        </div>
                    </div>
                ))
            }

        </div >
    );
};
export default Grid_Proyects;
