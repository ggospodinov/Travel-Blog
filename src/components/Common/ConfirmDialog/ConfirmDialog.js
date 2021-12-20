import { Modal, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import usePostState from '../../../hooks/usePostState'; 

const ConfirmDialog = ({
    show,
    onClose,
    onSave,
}) => {

    const {objectId} = useParams();
    let [theme] = usePostState(objectId)


    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title><h5>LIFESTYLEPOST</h5>  {theme.themeName}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h6>You are sure you want to delete this {theme.themeName}</h6>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Close</Button>
                <Button variant="primary" onClick={onSave}>Save changes</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmDialog;