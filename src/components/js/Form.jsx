import React from 'react';
import styles from '../css/Form.module.css'

const Form = ()=>{

    const [userData, setUserData]  = React.useState({
        username: '',
        password: '',
    })
    const [errors, setErrors] = React.useState({
        username:'',
        password:'',
    })

    const handleInputChange = (e)=>{
        // console.log(e.target)
        setUserData({...userData,
            [e.target.name]:e.target.value,
        })
    }
    const handleSubmit= (e)=>{
        e.preventDefault();

    }
    return (
        <div className={styles.divLogin}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" id="username" value={userData.username} onChange={handleInputChange}/><br />
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" value={userData.password} onChange={handleInputChange}/><br />
                <button type="submit">LOGIN</button>
            </form>
        </div>
    );
}
export default Form;