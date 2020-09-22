import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

import {AlertContainer} from './alert.styles';



interface AlertProps {
    message: string;
    onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({message, onClose}) => {
    return (
        <AlertContainer>
            <span>{message}</span>
            <FontAwesomeIcon onClick={onClose} icon={faTimes}/>
        </AlertContainer>
    )
}

export default Alert;
