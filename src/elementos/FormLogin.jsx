import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function FormLogin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const urlBackend = 'http://ranb-taskmanager.000webhostapp.com/public/';

    const validarUsario = (ev) => {
        ev.preventDefault();
        axios.get(urlBackend+'api/usuarios')
            .then((respuesta) => {
                console.log(respuesta.data);
                let aux = false;
                (respuesta.data).map(user => {
                    if (user.correo_usuario === email && user.password_usuario === password) {
                        const datos = { id: user.id_usuario, email: email, nombre: user.nombre_usuario };
                        localStorage.setItem("session", JSON.stringify(datos))
                        aux = true;
                    }
                })
                if(aux){
                    window.location.href = "/tareas";
                }else{
                    alert("Datos incorrectos")
                }
            })
            .catch((error) => {
                console.log(error.message)
            });
    }

    return (
        <div className="col-lg-6 mb-5 mb-lg-0">

            <div className="card">
                <div className="card-body py-5 px-md-5">
                    <form>
                        <div className="form-outline mb-4">
                            <input type="email" id="usuario" className="form-control" onChange={(e) => { setEmail(e.target.value); }} required />
                            <label className="form-label">Usuario</label>
                        </div>
                        <div className="form-outline mb-5">
                            <input type="password" id="password" className="form-control" onChange={(e) => { setPassword(e.target.value); }} required />
                            <label className="form-label">Contraseña</label>
                        </div>

                        {/* <!--Botón iniciar sesión --> */}
                        <div className="text-center">
                            <button onClick={(ev) => validarUsario(ev)} type="submit" className="btn btn-success btn-block mb-2 w-100 btnSubmit">
                                <span className="bold">Iniciar sesión</span>
                            </button>
                        </div>

                        {/* <!--Botón registro--> */}
                        <div className="text-center" style={{ fontSize: '12px' }}>
                            <p>Si no tienes cuenta, regístrate
                                <Link to="/registro" type="submit" className="mb-4 w-100">
                                    aquí
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}