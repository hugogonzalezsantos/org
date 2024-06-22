import "./MiOrg.css"
//import { useState } from "react"
const MiOrg = (props) => {
    //const [mostrar, actualizarMostrar] = useState(true)
    //const manejarClick = () =>{
    //Estado - hooks
    //useState
    //const [nombreVariable, funcionActualiza] = useState(valorInicial)
    //    actualizarMostrar(!mostrar)
    //}
    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.jpeg" alt="add" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg