
import styles from '../styles/Home.module.css'
import Grid_Proyects from './Grid_Proyects';
import style from "../styles/proyectos.module.css"

const Proyectos = () => {

    // let inicio = (
    //     <span className={style.inicio}>
    //         [ 02 ] <span className={style.proyectosText}>Proyectos</span>
    //     </span>
    // );

    return (
        <div className={style.container}>
            <section id="proyectos">
                <h3 className={style.proyectosTextdif}>PROYECTOS</h3>
                <Grid_Proyects />
            </section>
        </div>
    )
}

export default Proyectos

