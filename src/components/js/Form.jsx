import React from 'react';
import styles from '../css/Form.module.css'
import validate from './validation.js'

const Form = (props)=>{
    // console.log(props.login)

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

        setErrors(validate({
            ...userData,
            [e.target.name]:e.target.value,
        }))
    }
    const handleSubmit= (e)=>{
        e.preventDefault();

        props.login(userData)

    }
    return (
        <div className={styles.divLogin}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" id="username" value={userData.username} onChange={handleInputChange}/>
                {(errors.username) && <p className={styles.danger}>{errors.username}</p>}
                <br />
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" value={userData.password} onChange={handleInputChange}/>
                {(errors.password) && <p className={styles.danger}>{errors.password}</p>}
                <br />
                <button type="submit">LOGIN</button>
            </form>
        </div>
    );
}
export default Form;