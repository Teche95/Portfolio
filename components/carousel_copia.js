
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Carousell = () => {
    const imagenes = ["next.webp", "javascript.webp", "react.png"]
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedImage, setSelectedImage] = useState(imagenes[0])

    const previous = () => {
        const condicion = selectedIndex > 0
        const nextIndex = condicion ? selectedIndex - 1 : imagenes.length - 1
        setSelectedIndex(nextIndex)
        setSelectedImage(imagenes[nextIndex])
    }

    const next = () => {
        const condicion = selectedIndex < imagenes.length - 1
        const nextIndex = condicion ? selectedIndex + 1 : 0
        setSelectedIndex(nextIndex)
        setSelectedImage(imagenes[nextIndex])
    }

    return (
        <>
            <button onClick={previous}>{"<"}</button>
            <Image width="900" height="500" src={require(`../public/images/carousel/${selectedImage}`).default} alt="sdsd" />
            <button onClick={next}>{">"}</button>
        </>
    )
}

export default Carousell