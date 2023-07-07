
import styles from '@/styles/contacto.module.css'
import style from "../styles/proyectos.module.css"
import { Linkedin, Github, Mail } from 'lucide-react';
const Contacto = () => {

  return (
    <div >
      <section id="contacto" className={styles.contacto}>
        <h3 className={style.proyectosTextdif}>CONTACTO</h3>
        <p className={styles.textoContacto}>¡Gracias por visitar mi porfolio! Si tienes alguna idea o proyecto en mente, no dudes en contactarte conmigo.</p>
        {/* <p>¡Gracias por visitar mi porfolio! Si tienes alguna idea o </p> */}
        {/* <p> proyecto en mente, no dudes en contactarte conmigo.</p> */}
        <div className={styles.container}>
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
      </section>
    </div>
  )
}

export default Contacto

