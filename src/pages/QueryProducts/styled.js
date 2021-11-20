import styled from 'styled-components'

export const C_Principal = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 35px;

h1 {
    text-align: center;
    color: white;
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

export const C_Products = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
`
export const Green = styled.p`
display: inline;
color: #00CDB0;
`