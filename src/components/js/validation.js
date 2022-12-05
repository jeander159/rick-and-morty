const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

// const regexNumLetra = /^[A-Za-z0-9]$/;
// const regexNumLetra = /^[A-Za-z0-9]{6,10}$/i;
const regexNumLetra = /^(?=.*?[a-z])(?=.*?[0-9]){6,10}$/i;

export default function validate(inputs){
    console.log(inputs.username.length)
    let errors = {}
    if(!regexEmail.test(inputs.username)){
        errors.username = 'Debe ser un correo electrónico';
    }
    if(!inputs.username){
        errors.username = 'Se requiere un correo electrónico';
    }
    if(inputs.username.length>35){
        errors.username = 'El usuario no puede tener mas de 35 caracteres';
    }

    if(!regexNumLetra.test(inputs.password)){
        errors.password = 'La constraseña debe contener por lo menos un numero';
    }
    if(inputs.password.length < 6 && inputs.password.length > 10){
        errors.password = 'La constraseña debe estar entre 6 a  10 caracteres';
    }
    return errors;
}