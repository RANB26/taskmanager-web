import { useState } from 'react';
import axios from 'axios';

export default function FormRegistro() {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [tel, setTel] = useState("");
    const [dir, setDir] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [usuario, setUsuario] = useState(false);
    const urlBackend = 'http://ranb-taskmanager.000webhostapp.com/public/';

    const validarUsario = () => {
        axios.get(urlBackend + 'api/usuarios')
            .then((respuesta) => {
                console.log(respuesta.data);
                (respuesta.data).map(user => {
                    if (user.correo_usuario === email) {
                        setUsuario(true)
                    }
                })
            })
            .catch((error) => {
                console.log(error.message)
            });
    }

    const crearUsuario = (ev) => {
        ev.preventDefault();
        if (nombre.trim() == "" || apellido.trim() == "" || tel.trim() == ""
            || dir.trim() == "" || password.trim() == "" || email.trim() == "") {
            alert("Rellene todos los campos")
            return
        }
        validarUsario();
        if (usuario == false) {
            const datos = {
                nombre_usuario: nombre, apellido_usuario: apellido,
                telefono_usuario: tel, direccion_usuario: dir,
                correo_usuario: email, password_usuario: password
            }
            axios.post(urlBackend+'api/usuarios', JSON.stringify(datos), {
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then((respuesta) => {
                    console.log(respuesta.data);
                    alert("Usuario registrado");
                    window.location.href = "/";
                })
                .catch((error) => {
                    console.log(error.message);
                });
        } else {
            alert("Usuario ya está registrado");
        }
    }


    return (
        <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="card">
                <div className="card-body py-5 px-md-5">
                    <form>
                        <div className="row">
                            <div className="col-md-6 mb-2">
                                <div className="form-outline">
                                    <input type="text" id="nombres" className="form-control" onChange={(e) => { setNombre(e.target.value); }} />
                                    <label className="form-label">Nombres</label>
                                </div>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="form-outline">
                                    <input type="text" id="apellidos" className="form-control" onChange={(e) => { setApellido(e.target.value); }} />
                                    <label className="form-label">Apellidos</label>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <div className="form-outline">
                                    <input type="number" id="telefono" className="form-control" onChange={(e) => { setTel(e.target.value); }} />
                                    <label className="form-label">Teléfono</label>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="form-outline">
                                    <input type="text" id="direccion" className="form-control" onChange={(e) => { setDir(e.target.value); }} />
                                    <label className="form-label">Dirección</label>
                                </div>
                            </div>
                        </div>

                        <div className="form-outline mb-3">
                            <input type="email" id="correo" className="form-control" onChange={(e) => { setEmail(e.target.value); }} />
                            <label className="form-label">Correo electrónico</label>
                        </div>

                        <div className="form-outline mb-3">
                            <input type="password" id="password" className="form-control" onChange={(e) => { setPassword(e.target.value); }} />
                            <label className="form-label">Contraseña</label>
                        </div>

                        {/* <!-- Botón registrarse --> */}
                        <div className="text-center">
                            <button onClick={(ev) => crearUsuario(ev)} type="submit" className="btn btn-success btn-block mt-3 w-50">
                                Registrarse
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}