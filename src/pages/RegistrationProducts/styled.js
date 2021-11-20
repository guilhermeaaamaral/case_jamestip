import styled from 'styled-components'

export const C_Principal = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 35px;
`

export const C_Title = styled.div`
margin-bottom: 30px;
color: #00CDB0;
`

export const C_InputRegister = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-bottom: 30px;


input {
    background-color: white;
    border: 2px solid white;
    width: 30vw;
    padding: 15px;
    margin: 15px;
    transition: ease 0.2;
}

input:hover{
    border: solid 2px #00CDB0;
    border-radius: 5px;
}
`

export const C_Button = styled.div`

button {
    margin: 15px;
    background-color: #00CDB0;
    color: #191919;
    font-size: 15px;
    font-weight: 600;
    border: none;
    width: 210px;
    height: 50px;
}

button:hover {
    opacity: 0.5;
    cursor: pointer;
}
`