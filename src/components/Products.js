import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import GlobalContext from '../global/GlobalContext'
import { Green } from '../pages/QueryProducts/styled'
import { C_Principal, C_Products } from './styled'


const Products = (props) => {

    const {setters} = useContext(GlobalContext)

    const history = useHistory()

    return (

        <C_Principal>

            <C_Products>
                <p><Green>Código do Produto:</Green> {props.index.codeProduct}</p>
                <p><Green>Categoria:</Green> {props.index.categoryProduct}</p>
                <p><Green>Produto:</Green> {props.index.nameProduct}</p>
                <p><Green>Fabricante:</Green> {props.index.nameProvider}</p>
                <p><Green>Preço: R$</Green> {props.index.valueProduct}</p>
                <button onClick={setters.remove}>Deletar</button>
            </C_Products>

        </C_Principal>
    )
}

export default Products