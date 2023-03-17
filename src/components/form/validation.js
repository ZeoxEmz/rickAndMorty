
const validation = ({username,password},errors,setErrors)=>{
  const error = {}
  if (!username) {
      error.username = 'Porfavor Ingrese Un Email';
    } else if (!/\S+@\S+\.\S+/.test(username)) {
      error.username = 'Email Invalido';
    } else if (username.length > 35) {
      error.username = 'El Email No Deve Tener Mas De 35 Caracteres';
    }
  
    // validate password
    if (!password) {
      error.password = 'Ingrese Contraseña';
    } else if (password.length < 6 || password.length > 10) {
      error.password = 'La Cotraseña Tiene Que Tener Entre 6 Y 10 Caracteres';
    } else if (!/\d/.test(password)) {
      error.password = 'La Contraseña Deve Tener Un Numero';
    }
  setErrors(error)
}


export default validation;