import React from 'react'
import styles from '../styles/Home.module.css'
import style from "../styles/proyectos.module.css"

const Contacto = () => {

  // let inicio = (
  //   <span className={style.inicio}>
  //     [ 04 ] <span >Contacto</span>
  //   </span>
  // );

  return (
    <div className={styles.container}>
      <section id="contacto">
        {/* <h4>{inicio}</h4> */}
        <h3 className={style.proyectosTextdif}>CONTACTO</h3>
      </section>
    </div>
  )
}

export default Contacto
