
import styles from '../styles/Home.module.css'
import Grid_Proyects from './Grid_Proyects';
import style from "../styles/proyectos.module.css"

const Proyectos = () => {

    let inicio = "<Proyectos>"
    let final = "</Proyectos>"
    return (
        <div className={style.container}>
            <h4>{inicio}</h4>
            <section id="proyectos">
              <Grid_Proyects/>
            </section>
            <h4>{final}</h4>
        </div>
    )
}

export default Proyectos




// function IndividualIntervalsExample() {
//     console.log(Carousel)
//     return (
//         <Dropdown>
//       <Dropdown.Toggle variant="success" id="dropdown-basic">
//         Dropdown Button
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//         <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//     );
//   }
  
//   export default IndividualIntervalsExample;