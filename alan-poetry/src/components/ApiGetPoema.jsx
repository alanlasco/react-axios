import React, { useEffect, useState} from 'react' ;
import axios from 'axios';
import Poema from './Poema';

const GetPoema = () =>{
    const [data, setData] = useState([]);//Almaceno datos de API
    const url= 'http://localhost/BackEndconPHP/carga-datos/mostrar-api.php';
    const fetchData = () =>{
        axios.get(url)
        .then(response => {setData(response.data)})
        .catch(error => {console.error('Error fetching Data: ', error)});
    };
    useEffect(() => {
        fetchData();
    }, []);
    return(
        <div>

        {data.map((item) => (
            <Poema
            id={item.id_poema}
            texto={item.poema}
            nombre={item.nombre}
            fecha={item.fecha}
            />
        ))}

        </div>

    )
    }




export default GetPoema;
