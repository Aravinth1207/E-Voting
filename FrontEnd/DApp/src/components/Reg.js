import { useState, useRef, useEffect } from 'react';
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Reg = () => {
    const userRef = useRef();
    const errRef = useRef();
    const [username, setUsername] = useState('');
    cosnt [password, setPassword] = useState('');
    
    return (
        <div>Reg</div>
    )
}

export default Reg;
