import React from 'react'
import { useHistory } from 'react-router'
import logo from '../../image/logo.png'
import { C_Buttons, C_Logo, C_Principal } from './styled'
import {goToQueryProducts, goToRegistrationProducts} from '../../routers/cordinator'

const HomePage = () => {

    const history = useHistory()

    return (
        <C_Principal>

            <C_Logo>
                <img src={logo}/>
            </C_Logo>

            <C_Buttons>
                <button onClick={() => goToRegistrationProducts(history)}>Cadastro de produtos</button>
                <button onClick={() => goToQueryProducts(history)}>Estoque de produtos</button>
            </C_Buttons>

        </C_Principal>
    )
}

export default HomePage