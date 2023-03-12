import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const MyLogin = ({ setMessage, setShowAlert, setTitle, setVariant }) => {

    //Estados de formulario
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Datos login de usuario:
    const userEmail = "1"
    const userPassword = "1"

    const inButtonDisabled = !email.trim() || !password.trim()

    //Funcion de validacion de datos del formulario:
    const handleSubmit = (e) => {
        e.preventDefault()

        // Validación de formularios
        if (inButtonDisabled) {
            return
        }

        // Ejecutar funcion de comprobación
        comprobarLogin()
    };

    const comprobarLogin = () => {
        setMessage(email === userEmail && password === userPassword ? "Login realizado correctamente." : "Los datos ingresados no son correctos.");
        setTitle(email === userEmail && password === userPassword ? "¡EXITO!" : "HAY UN ERROR");
        setVariant(email === userEmail && password === userPassword ? "success" : "danger");
        setShowAlert(true)

        // //Ejecutar funcion de desaparecer alert
        // setTimeout(() => {
        //     setShowAlert(false)
        // }, "3000");
    }

    return (
        <>
            <Form className="Container" onSubmit={handleSubmit}>
                <h4 className="m-2 mt-3">Ingrese sus datos:</h4>
                <Form.Group className="mb-2">
                    <Form.Label className='label-stlye'>Email</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-2">
                    <Form.Label className='label-stlye'>Password</Form.Label>
                    <Form.Control
                        // type="password"
                        type="text"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Button className="text-align: center;"
                    variant="primary"
                    type="submit"
                    disabled={inButtonDisabled}
                >
                    Iniciar Sesión
                </Button>
            </Form>

        </>
    );
}
export default MyLogin