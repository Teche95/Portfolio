
import Image from "next/image";
import calathea5 from "../public/images/grid_proyects/calathea5.png"
import  juegos1 from "../public/images/grid_proyects/juegos1.png"
import styles from "../styles/proyectos.module.css"
import { IoLogoFirebase } from "react-icons/io5";
import { DiNodejsSmall, DiCss3Full, DiReact } from "react-icons/di";
import { SiExpress, SiPostgresql, SiJavascript, SiSequelize, SiRedux } from "react-icons/si";
import { HiOutlineExternalLink } from "react-icons/hi"
import { BsGithub } from "react-icons/bs"

let ListaDeProyectos = [
    {
        id: 1,
        nombre: "Calathea market",
        descripcion: "Ecommerce de venta de plantas",
        deployLink: "https://api-plants-b6153.web.app/",
        repositorio: "https://github.com/Teche95/Proyecto-Final",
        tecnologias: [
            { icono: <DiReact size="2rem" color="#5CCFEE" className={styles.tecno} /> },
            { icono: <IoLogoFirebase size="2rem" color="#F2BF26" className={styles.tecno} /> },
            { icono: <DiNodejsSmall size="2rem" color="#4F9640" className={styles.tecno} /> },
            { icono: <SiExpress size="2rem" color="white" className={styles.tecno} /> },
            { icono: <DiCss3Full size="2rem" color="#3492CB" className={styles.tecno} /> },
        ],
        webs: [
            "https://es.react.dev/",
            "https://firebase.google.com/?hl=es",
            "https://nodejs.org/es",
            "https://expressjs.com/es/",
            "https://developer.mozilla.org/es/docs/Web/CSS"
        ],
        // image: calatheamarket
        image: calathea5
    },
    {
        id: 2,
        nombre: "Video games app",
        descripcion: "Aplicación tipo biblioteca de juegos",
        // deployLink: "",
        repositorio: "https://github.com/Teche95/Pi-videogames",
        tecnologias: [
            { icono: <SiPostgresql size="2rem" color="#30628A" className={styles.tecno} /> },
            { icono: <SiJavascript size="2rem" color="#E4D04B" className={styles.tecno} /> },
            { icono: <SiSequelize size="2rem" color="#4EA7DB" className={styles.tecno} /> },
            { icono: <SiExpress size="2rem" color="white" className={styles.tecno} /> },
            { icono: <SiRedux size="2rem" color="#7046B2" className={styles.tecno} /> },
            { icono: <DiReact size="2rem" color="#5CCFEE" className={styles.tecno} /> },
            { icono: <DiCss3Full size="2rem" color="#3492CB" className={styles.tecno} /> }
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
        // image: PI_VideoJuegos
        image: juegos1
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
                            priority
                        />
                        <div className={styles["image-info"]}>
                            <h2>{proyecto.nombre}</h2>
                            <p>{proyecto.descripcion}</p>
                            <div className={styles.tecs}>
                                {proyecto.tecnologias?.map((tec, index) => (
                                    <a href={proyecto.webs[index]} key={index} target="_blank" rel="noopener noreferrer"  >
                                        {tec.icono}
                                    </a>
                                ))}
                            </div>
                            <div className={styles.btns}>
                                <a href={proyecto.deployLink} target="_blank" rel="noopener noreferrer">
                                    <button className={styles.deployButton}>
                                        Deploy
                                        <HiOutlineExternalLink size="1.1rem" className={styles.sizebutton} />
                                    </button>
                                </a>
                                <a href={proyecto.repositorio} target="_blank" rel="noopener noreferrer">
                                    <button className={styles.githubButton}>
                                        GitHub
                                        <BsGithub size="1.1rem" className={styles.sizebutton} />
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div >
    );
};
export default Grid_Proyects;

