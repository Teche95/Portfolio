import styles from '../styles/Home.module.css'
import Image from 'next/image'
import style from "../styles/proyectos.module.css"
import { Linkedin, Github, Mail } from 'lucide-react';
// import styless from '@/styles/contacto.module.css'
// import cv from "../public/CV.pdf"

const SobreMi = () => {



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
          {/* <button className={styles.botonMagic}>Descargar CV</button> */}

          <div className={styles.container}>
            <a href="/CV.pdf" download="CV Gustavo Techeira" className={styles.cta}>
              <span>Descargar CV</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M12 17V3" /><path d="m6 11 6 6 6-6" /><path d="M19 21H5" />
              </svg>
            </a>

            <a
              href={"https://www.linkedin.com/in/gustavo-julian-techeira-bb74681b8/"}
              className={styles.iconLink}>
              <Linkedin strokeWidth={1.75} size={32} color="#A8A8A8" />
            </a>

            <a href={"https://github.com/Teche95"}
              className={styles.iconLink}>
              <Github strokeWidth={1.75} size={32} color="#A8A8A8" />
            </a>

            <a href={"mailto:julian.techeira9@gmail.com"}
              className={styles.iconLink}>
              <Mail strokeWidth={1.75} size={32} color="#A8A8A8" />
            </a>
          </div>
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