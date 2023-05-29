import Contacto from "@/components/Contacto"
import Proyectos from "@/components/Proyectos"
import SobreMi from "@/components/Sobre_mi"
import Tecnologias from "@/components/Tecnologias"


const PaginaPrincipal = () => {
    return (
        <>
            <SobreMi />
            <Proyectos />
            <Tecnologias />
            <Contacto />
        </>
    )
}

export default PaginaPrincipal

// Tareas sobre mi
// 1. guardar los componentes en una carpeta y renderizarlos en la pagina principal "listo"
// 2. cambiar la frase del sobre mi. "listo"
// 3. poner el sobre mi en español. "listo"
// 4. ajustar el ancho del sobre mi "listo"
// 5. hacer la animacion de las palabras gustavo y full stack developer. "listo"