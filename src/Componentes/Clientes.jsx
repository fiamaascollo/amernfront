import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";

const Clientes = () => {

    const DATOS = process.env.REACT_APP_DATOS

    const [ apiData, setApiData ] = useState([]);

    useEffect(() => {
        fetch(DATOS) 
        .then((res) => res.json())   
        .then((data) => console.log(data))
    }, []); 

    /* useEffect(() => {
        axios.get(DATOS)
        .then((res) => {
            console.log(res.data);
            setApiData(res.data)
        })
    }, []); */

    console.log(apiData);

    return(
        <div className="App">
            <h1>
                Estamos en la página de Clientes
            </h1>
        </div>
    )
}

export default Clientes;