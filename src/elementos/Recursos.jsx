import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Recursos() {

    const [recursos, setRecursos] = useState([]);

    useEffect(() => {
        axios.get('http://consultas.cuc.edu.co/api/v1.0/recursos', {
            headers: {
                'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJ1c2VybmFtZSI6InBydWViYTIwMjJAY3VjLmVkdS5jbyIsImV4cCI6MTY0OTQ1MzA1NCwiY29ycmVvIjoicHJ1ZWJhMjAyMkBjdWMuZWR1LmNvIn0.MAoFJE2SBgHvp9BS9fyBmb2gZzD0BHGPiyKoAo_uYAQ'
            }
        })
            .then((respuesta) => {
                setRecursos(respuesta.data)
            }).catch((error) => {
                console.log(error.message)
            });
    }, [])

    return (
        <>
            <div className="col-lg-3 d-flex align-items-stretch">
                <div className="info">
                    <h3>Recursos</h3>
                    {
                        recursos.map(recurso => {
                            return (
                                <div key={recurso.id} className="recurso">
                                    <i className="bi bi-tag"></i>
                                    <h4>{recurso.nombre}</h4>
                                    <p>{recurso.fecha_ingreso}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}