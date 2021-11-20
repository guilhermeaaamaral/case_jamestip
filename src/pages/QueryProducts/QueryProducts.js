import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import Products from '../../components/Products'
import GlobalContext from '../../global/GlobalContext'
import { C_Button, C_Principal, C_Products } from './styled'
import { goToHome } from '../../routers/cordinator'

const QueryProducts = () => {

    const {state} = useContext (GlobalContext)

    const history = useHistory()

    const renderProducts = state.registerProducts.map ((index) => {
        return <Products key={index.CodeProduct} index={index}/>
    })

    return (

        <C_Principal>

            <h1>Estoque de Produtos</h1>

            <C_Products>
                {renderProducts}
            </C_Products> 

            <C_Button>
                <button onClick={()=> goToHome(history)}>Voltar</button> 
            </C_Button>
            
        </C_Principal>
    )
}

export default QueryProducts