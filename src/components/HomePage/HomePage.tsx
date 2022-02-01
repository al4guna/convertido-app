import React from 'react';
import {
    ContainerCSS, ReactangleCSS,
    InputCSS, FormCSS, ButtonCSS,
    TitleCSS, SubtitleCSS, MessageErrorCSS
} from './styled';
import MaskSuccess from "../MaskSuccess";
import { useHomePage } from "./useHomePage";

const HomePage = (): JSX.Element => {

    const {
        error,
        urlKey,
        submit,
        showSuccess,
        handleChange
    } = useHomePage();

    const getMessageError = (message: string) => {
        if(message.length === 0)
            return null;

        return <MessageErrorCSS>{message}</MessageErrorCSS>
    }

    return(
        <section>
            <ContainerCSS>
                <ReactangleCSS>
                    <FormCSS onSubmit={submit}>
                        <div>
                            <TitleCSS>Hola, bienvenido, sabemos que quieres viajar{urlKey && ` en ${urlKey}`}.</TitleCSS>
                            {urlKey && <SubtitleCSS>por favor diligencia el siguiente formulario:</SubtitleCSS>}
                            {!urlKey && <SubtitleCSS>por favor selecciona un item del menú</SubtitleCSS>}
                        </div>
                        <div>
                            <InputCSS
                                name={'name'}
                                type={'text'}
                                placeholder={'Nombre Completo'}
                                onChange={handleChange}
                            />
                            {getMessageError(error.name)}
                        </div>
                        <div>
                            <InputCSS
                                name={'email'}
                                type={'email'}
                                placeholder={'Email'}
                                onChange={handleChange}
                            />
                            {getMessageError(error.email)}
                        </div>
                        <div>
                            <InputCSS
                                name={'phone'}
                                type={'number'}
                                placeholder={'Celular'}
                                onChange={handleChange}
                            />
                            {getMessageError(error.phone)}
                        </div>
                        <div>
                            <InputCSS
                                name={'age'}
                                type={'number'}
                                placeholder={'Edad'}
                                onChange={handleChange}
                            />
                            {getMessageError(error.age)}
                        </div>
                        <div>
                            <ButtonCSS disabled={!(urlKey)}>Enviar</ButtonCSS>
                        </div>
                    </FormCSS>
                </ReactangleCSS>
            </ContainerCSS>
            { showSuccess && <MaskSuccess />}
        </section>
    )
}

export default HomePage;
