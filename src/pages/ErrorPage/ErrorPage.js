import React from 'react'
import { C_Principal } from './styled'
import logo from "../../image/logo.png"

const ErrorPage = () => {

    return (
        
        <C_Principal>
            <img src={logo} />
            <h1>Página não encontrada :(</h1>
        </C_Principal>
    )
}

export default ErrorPage