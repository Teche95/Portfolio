import styles from '../styles/Home.module.css'
import Image from 'next/image'
import style from "../styles/proyectos.module.css"



const SobreMi = () => {

  // let inicio = (
    // <span className={style.inicio}>
    //   [ 01 ] <span className={style.proyectosText}>Sobre mí</span>
    // </span>
    // );
    
    return (
      
      <section className={styles.sect} id="sobre-mi">
      {/* <h3 className={style.proyectosText}>SOBRE MÍ</h3> */}
      {/* <h4>{inicio}</h4> */}
      <div className={styles.sobremi}>
        <div className={styles.text}>
          <h1 className={styles.animated}>
            <span className={styles.hola}>Hola a todos, soy</span>
            <div className={styles.animatedinfo}>
              <span className={styles.animateditem}>Gustavo Techeira</span>
              <span className={styles.animateditem}>Full Stack Developer</span>
              <span className={styles.animateditem}>Web Developer</span>
            </div>
          </h1>
          <p>Me motiva encontrar la mejor forma de crear código en cada proyecto. Me encanta crecer profesionalmente a través del conocimiento y estoy comprometido en ofrecer un trabajo dedicado y responsable en todo momento.</p>
        </div>

        <div className={styles.img}>
          <div className={styles.img2}>
            <Image width="400" height="460" src="/images/112-1127696_software-developer-hd-png-download-removebg.avif" alt="software engineer" priority />
          </div>
        </div>

      </div>
      {/* <h4>{final}</h4> */}
    </section>

  )
}

export default SobreMi