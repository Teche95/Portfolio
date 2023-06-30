
import style from "../styles/proyectos.module.css"
import javascript from "../public/tecnologias/javascript.svg"
import css from "../public/tecnologias/css3.svg"
import express from "../public/tecnologias/express.svg"
import firebase from "../public/tecnologias/firebase.svg"
import node from "../public/tecnologias/node.svg"
import postgreSQL from "../public/tecnologias/postgreSQL.svg"
import react from "../public/tecnologias/react.svg"
import redux from "../public/tecnologias/redux.svg"
import next from "../public/tecnologias/next.svg"
import sequelize from "../public/tecnologias/sequelize.svg"

import styless from "../styles/tecnologias.module.css"

import Image from 'next/image';

const tecs = [
  {
    id: 1,
    nombre: "Javascript",
    web: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    image: javascript
  },
  {
    id: 2,
    nombre: "React",
    web: "https://es.react.dev/",
    image: react
  },
  {
    id: 9,
    nombre: "Next",
    web: "https://nextjs.org/",
    image: next
  },
  {
    id: 3,
    nombre: "Redux",
    web: "https://redux.js.org/",
    image: redux
  },
  {
    id: 4,
    nombre: "PostgreSQL",
    web: "https://www.postgresql.org/",
    image: postgreSQL
  },
  {
    id: 5,
    nombre: "Node",
    web: "https://nodejs.org/es",
    image: node
  },
  {
    id: 6,
    nombre: "Firebase",
    web: "https://firebase.google.com/?hl=es",
    image: firebase
  },
  {
    id: 7,
    nombre: "Express",
    web: "https://expressjs.com/es/",
    image: express
  },
  {
    id: 8,
    nombre: "CSS",
    web: "https://developer.mozilla.org/es/docs/Web/CSS",
    image: css
  },
  {
    id: 10,
    nombre: "Sequelize",
    web: "https://sequelize.org/",
    image: sequelize
  }
]

const Tecnologias = () => {

  // let inicio = (
  //   <span className={style.inicio}>
  //     [ 03 ] <span className={style.proyectosText}>Tecnologías</span>
  //   </span>
  // );

  return (
    <div>
      <h3 className={style.proyectosTextdif} id="tecnologias">TECNOLOGÍAS</h3>
      <section className={styless.container} >
        {
          tecs && tecs.map((tec) =>
            <div key={tec.id} className={styless.images}>
              <a href={tec.web} target="_blank" rel="noopener noreferrer">
                <Image className={styless.image} src={tec.image} alt="tec" />
              </a>
              <div className={styless.nametec}>
                <a href={tec.web} target="_blank" rel="noopener noreferrer">
                  <p>{tec.nombre}</p>
                </a>
              </div>
            </div>
          )
        }
      </section>
    </div>
  )
}

export default Tecnologias