// import Link from "next/link"
import styles from "../styles/nav.module.css"
import { Link } from "react-scroll";
const NavigationBar = () => {
    // let init = "<01>"
    // let pro = "<02>"
    return (
        <nav className={styles.navH}>
            <ul>

                <div className={styles.lis}>

                    <li >
                        {/* <Link href="#sobre-mi" passHref>Sobre mí</Link> */}
                        <Link
                            to="sobre-mi"
                            // spy={true}
                            smooth={true}
                            // offset={10}
                            duration={900}
                        >
                            Sobre mí
                        </Link>
                    </li>

                    <li >
                        {/* <Link href="#proyectos" passHref>Proyectos</Link> */}
                        <Link
                            to="proyectos"
                            // spy={true}
                            smooth={true}
                            // offset={10}
                            duration={900}
                        >
                            Proyectos
                        </Link>
                    </li>

                    <li >
                        {/* <Link href="#tecnologias" passHref>Tecnologías</Link> */}
                        <Link
                            to="tecnologias"
                            // spy={true}
                            smooth={true}
                            // offset={10}
                            duration={900}
                        >
                            Tecnologías
                        </Link>
                    </li>

                    <li >
                        {/* <Link href="#contacto" passHref>Contacto</Link> */}
                        <Link
                            to="contacto"
                            // spy={true}
                            smooth={true}
                            // offset={10}
                            duration={900}
                        >
                            Contacto
                        </Link>
                    </li>

                </div>
            </ul>
        </nav>
    )
}

export default NavigationBar