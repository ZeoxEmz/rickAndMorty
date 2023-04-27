import styles from './Form.module.css'
import { useState } from 'react'
import validation from './validation'

export default function Form({login}){
    const [userData,setUserData] = useState({
        username:"",
        password:""
    })
    const [errors,setErrors] = useState({
        username: "",
        password: "",
    })
    const handleInputChange = (event)=>{
        const property = event.target.name; //username o password
        const value = event.target.value; // el valor del input

        setUserData({...userData,[property]:value})
        validation({...userData,[property]:value},errors,setErrors)
    }
    const handleSubmit = (event)=>{
        event.preventDefault()
        login(userData)
    }

    
    return(
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.div}>
                    <label htmlFor="">User Name</label>
                    <input type="text" name='username' value={userData.username} onChange={handleInputChange}/>
                    <p>{errors.username}</p>
                </div>
                <div className={styles.div}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' value={userData.password} onChange={handleInputChange}/>
                    <p>{errors.password}</p>
                </div>

                <button className={styles.boton}>Login</button>
            </form>
        </div>
    )
}