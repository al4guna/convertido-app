import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { IForm, FormElement, InputElement, IError } from './typings';
import { validate_age, validateName, validatePhone, validate_email } from "../../utils/helpers";

const initialForms = {
    age: 0,
    name: '',
    phone: '',
    email: ''
}

const initialErrors = {
    age: '',
    name: '',
    phone: '',
    email: ''
}

const validator = {
    age: validate_age,
    name: validateName,
    phone: validatePhone,
    email: validate_email
}

export const useHomePage = () => {
    let [searchParams] = useSearchParams();
    let urlKey = searchParams.get("urlKey");
    const [form, setForm] = useState<IForm>(initialForms);
    const [error, setError] = useState<IError>(initialErrors);
    const [showSuccess, setShowSuccess] = useState<Boolean>(false);

    const parserError = () => {
        let func :any;
        let errorV  :any;
        let objError: IError;
        objError = JSON.parse(JSON.stringify(error));
        const values = Object.keys(form);
        values.forEach((value: string) => {
            // @ts-ignore
            func = validator[value];
            // @ts-ignore
            errorV = func(form[value])
            // @ts-ignore
            objError[value] = errorV;
        })
        return objError;
    }

    const errorExists = (objError: IError) => {
        let sw = false;
        const values = Object.keys(objError);
        values.forEach((value: string) => {
            // @ts-ignore
            if(objError[value].length > 0) {
                sw = true;
                return;
            }
        })
        // @ts-ignore
        return sw;
    }

    const submit = (event: FormElement) => {
        event.preventDefault();
        const objError = parserError();
        if(errorExists(objError)) {
            setError(objError);
            return false;
        }
        console.log(form)
        setShowSuccess(true);
    }

    const handleChange = (element: InputElement) => {
        const { name, value } = element.target;
        setForm({...form, [name]: value});
    }

    useEffect(() => {
        if(showSuccess) {
            const timer = setTimeout(() => {
                setShowSuccess(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [showSuccess]);

    return {
        form,
        error,
        urlKey,
        submit,
        showSuccess,
        handleChange
    }
}
