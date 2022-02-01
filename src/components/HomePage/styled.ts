import styled from 'styled-components';

export const ContainerCSS = styled.div`
    min-height: 597px;
    background-image: url("https://content.r9cdn.net/res/images/horizon/sem/common/landing/flights-hero-image.jpg?v=92bc79a9f48910acf77836330cc177076cdc3080&cluster=4");
    background-position: right center;
    background-size: cover;
    position: relative;
`

export const ReactangleCSS = styled.div`
    width: 500px;
    margin: 0 auto;
    padding: 0 1.875em;
    max-width: min(100%,67.5em);
`

export const FormCSS = styled.form`
    gap: 10px;
    top: 25px;
    height: 100%;
    display: grid;
    border-radius: 2px;
    position: relative;
    padding: 24px 16px 16px;
    background-color: white;
    box-shadow: 0 0 4px 0 rgb(19 26 31 / 12%), 0 4px 6px 0 rgb(19 26 31 / 22%);
`

export const InputCSS = styled.input`
    width: 100%;
    height: 50px;
    border: none;
    outline: none;
    padding: 0.8rem;
    border-radius: 4px;
    background: #f3f5f7;
`

export const ButtonCSS = styled.button`
    height: 50px;
    width: 100%;
    color: white;
    cursor: pointer;
    font-size: 14px;
    border-radius: 4px;
    background: ${props => props.disabled ? '#919191' : '#ee4719cf'};
    
    &:hover {
        background: ${props => props.disabled ? '#919191' : '#ee4719f2;'};
    }
`

export const TitleCSS = styled.h1`
    font-size: 16px;
    text-align: center;
`

export const SubtitleCSS = styled.h5`
    font-size: 12px;
`

export const MessageErrorCSS = styled.p`
    color: #ee7171;
    font-size: 12px;
    margin: 5px 0 0 2px;
`
