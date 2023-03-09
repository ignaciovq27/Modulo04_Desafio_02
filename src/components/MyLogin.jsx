import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


const MyLogin = () => {

    //Estados de formulario
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Estado para errores
    const [error, setError] = useState(false);

    //Funcion de validacion de datos del formulario:
    const handleSubmit = (e) => {
        e.preventDefault()

        // Validación de formularios
        if (!email.trim() || !password.trim()) {
            setError(true);
            return
        }
        setError(false);

        // Ejecutar funcion de agregarUsuarios
        // agregarUsuario()
    };

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
                // disabled
                >
                    Iniciar Sesión
                </Button>
                {/* Aviso de error de datos */}
                {error ? <p className="error">Todos los campos son obligatorios.</p> : null}
            </Form>

        </>
    );
}
export default MyLogin