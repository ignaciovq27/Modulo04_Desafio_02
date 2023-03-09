import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';


const MyAlert = (variant) => {
    const [show, setShow] = useState(false);

    if (show) {
        return (
            <Alert variant={variant} onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    Change this and that and try again. Duis mollis, est non commodo
                    luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                    Cras mattis consectetur purus sit amet fermentum.
                </p>
            </Alert>
        );
    }

    return (
        <>
            <Alert
                key="myAlert"
                variant={variant}
                className='mt-3'
                >
            </Alert>

        </>
    );
}
export default MyAlert