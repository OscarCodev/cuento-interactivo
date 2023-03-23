import style, {createGlobalStyle} from 'styled-components'

export const Scene = style.div`
    width: ${({width}) => width}px;
    height: ${({height}) => height}px;
    background-image: url(${({back}) => back});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-color: black;
    position: relative;
    margin: auto;
`;

export const GlobalStyle = createGlobalStyle`
    body{
        background-color: black;
        margin: 0;
    }
`

export const Txt = style.div`
    background-color: rgba(255,255,255,0.8);
    border-radius: 10px;
    border: 2px solid gray;
    box-shadow: 3px 3px 3px black;
    position: absolute;
    z-index: 2;
    left: ${({x})=>x}%;
    margin: 10px;
    padding: 7px;
`

export const Door = style.div`
    position: absolute;
    left: ${({data}) => data.x}%;
    top: ${({data}) => data.y}%;
    width: ${({data}) => data.width}%;
    height: ${({data}) => data.height}%;
    border: 1px solid red;
    cursor: pointer;
`