import Alert from 'react-bootstrap/Alert';

const MyAlert = ({
    message = "",
    isShown = false,
    title = "",
    variant = "",
}) => {

    if (isShown) {
        return (
            <Alert
                className="m-3"
                variant={variant}
            >
                <Alert.Heading >{title}</Alert.Heading>
                <p>{message}</p>
            </Alert>
        );
    }
}
export default MyAlert