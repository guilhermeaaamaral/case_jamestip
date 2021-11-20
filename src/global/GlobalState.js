import { useState } from 'react'
import GlobalContext from './GlobalContext'

const GlobalState = (props) => {

    const [codeProduct, setCodeProduct] = useState("")
    const [categoryProduct, setCategoryProduct] = useState("")
    const [nameProduct, setNameProduct] = useState("")
    const [nameProvider, setNameProvider] = useState("")
    const [valueProduct, setValueProduct] = useState("")

    const [registerProducts, setRegisterProducts] = useState ([

        {
            codeProduct: "1234",
            categoryProduct: "Eletrônico",
            nameProduct: "Smartphone Samsung Galaxy S20" ,
            nameProvider: "Samsung",
            valueProduct: "1.500"
        },

        {
            codeProduct: "5678",
            categoryProduct: "Eletrônico",
            nameProduct: "SmartTV LG 43",
            nameProvider: "LG",
            valueProduct: "2.500"
        },

        {
            codeProduct: "7898",
            categoryProduct: "Eletrônico",
            nameProduct: "Notebook Samsung Book " ,
            nameProvider: "Samsung",
            valueProduct: "4.500"
        }
    ])

    const listRegisterProducts = () => {

        const newProduct = {

            codeProduct: codeProduct,
            categoryProduct: categoryProduct,
            nameProduct: nameProduct,
            nameProvider: nameProvider,
            valueProduct: valueProduct
        }

        const newListRegisterProduct = [newProduct, ...registerProducts]
        setRegisterProducts (newListRegisterProduct)
        setCodeProduct ("")
        setCategoryProduct ("")
        setNameProduct ("")
        setNameProvider ("")
        setValueProduct ("")
        alert ("Produto cadastrado")
    }

    const remove = () => {
        const remove = state.registerProducts.slice()
        remove.splice(0, 1)
        state.setRegisterProducts(remove)
        alert ('Produto Excluido')
    }

    const state = {
        codeProduct, 
        setCodeProduct, 
        categoryProduct, 
        setCategoryProduct,
        nameProduct,
        setNameProduct,
        nameProvider,
        setNameProvider,
        valueProduct,
        setValueProduct,
        registerProducts,
        setRegisterProducts
    }
    
    const setters = {listRegisterProducts, remove}

    return (

        <GlobalContext.Provider value={{state, setters}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState