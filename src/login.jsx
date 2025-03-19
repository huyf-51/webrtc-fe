import axios from 'axios';
import { useState } from 'react';

const Login = () => {
    const [name, setName] = useState('');
    const handle = async () => {
        const res = await axios.post('http://localhost:3000/login', {
            name: name,
        });
        localStorage.setItem('userId', res.data);
    };
    return (
        <div>
            <input
                name="name"
                onChange={(e) => {
                    setName(e.target.value);
                }}
                value={name}
            />
            <button onClick={handle}>Submit</button>
        </div>
    );
};

export default Login;
