import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { goToHome } from '../../routers/cordinator'
import { C_Button, C_InputRegister, C_Principal, C_Title } from './styled'
import GlobalContext from '../../global/GlobalContext'

const RegistrationProdutcs = () => {

    const history = useHistory()

    const {state, setters} = useContext (GlobalContext)

    const onChangeCodeProduct = (event) => {
        state.setCodeProduct (event.target.value)
    }

    const onChangeCategoryProduct = (event) => {
        state.setCategoryProduct (event.target.value)
    }

    const onChangeNameProduct = (event) => {
        state.setNameProduct(event.target.value)
    }

    const onChangeNameProvider = (event) => {
        state.setNameProvider(event.target.value)
    }

    const onChangeValueProduct = (event) => {
        state.setValueProduct(event.target.value)
    }

    return (

        <C_Principal>

            <C_Title>
                <h1>Cadastro de produtos</h1>
            </C_Title>

            <C_InputRegister>
                <input 
                    placeholder="Código do Produto"
                    onChange={onChangeCodeProduct}
                    value={state.codeProduct}
                >    
                </input>

                <input 
                    placeholder="Categoria do Produto"
                    onChange={onChangeCategoryProduct}
                    value={state.categoryProduct}
                    type={"text"}
                >
                </input>

                <input 
                    placeholder="Nome do Produto"
                    onChange={onChangeNameProduct}
                    value={state.nameProduct}
                    type={"text"}
                >     
                </input>

                <input 
                    placeholder="Nome do Fornecedor"
                    onChange={onChangeNameProvider}
                    value={state.nameProvider}
                    type={"text"}
                >    
                </input>

                <input 
                    placeholder="Valor do Produto"
                    onChange={onChangeValueProduct}
                    value={state.valueProduct}
                    type={"text"}
                >
                </input>

            </C_InputRegister>

            <C_Button>
                <button onClick={setters.listRegisterProducts}>Cadastrar Produto</button>
                <button onClick={()=> goToHome(history)}>Voltar</button>
            </C_Button>

        </C_Principal>
    )
}

export default RegistrationProdutcs