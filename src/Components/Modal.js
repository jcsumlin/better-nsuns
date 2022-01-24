import React from 'react';
import {ModalBody, Modal} from "reactstrap";

const PlateModal = (props) => {
    return (
        <Modal isOpen={props.isOpen}>
            <ModalBody>
                {props.content}
            </ModalBody>
        </Modal>
    );
};

export default PlateModal;
