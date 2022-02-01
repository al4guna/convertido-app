export interface IForm {
    age: number,
    name: string,
    email: string,
    phone: string
};

export interface IError {
    age: string,
    name: string,
    email: string,
    phone: string
};

export type FormElement = React.FormEvent<HTMLFormElement>;

export type InputElement = React.ChangeEvent<HTMLInputElement>;
