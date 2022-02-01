export const validate_email = ( email: string ) => {
    const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(regex.test(email)){
        return '';
    }
    return 'Correo electronico invalido';
}

export const validate_age = (age: number) => {
    if(age >= 18 && age <= 100) {
        return '';
    }
    return 'Edad Invalida';
}

export const validatePhone = (phone: string) => {
    const regex = /^[-\s\./0-9]{10}$/;
    if(regex.test(phone)){
        return '';
    }
    return 'Celular Invalido ej: 3022565367';
}

export const validateName = (name: string) => {
    if(name.length > 2) {
        return '';
    }
    return 'Ingrese nombre'
}
