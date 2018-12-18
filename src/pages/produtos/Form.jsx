import React, { Component } from 'react'
import axios from 'axios' 

export default class Form extends Component {
    constructor(props){
        super(props)
        
        this.inputNome = this.inputNome.bind(this)
        this.inputPreco = this.inputPreco.bind(this)
        this.enviarForm = this.enviarForm.bind(this)
        
        this.state = {
            nome: '',
            preco: ''
        }
    }
    
    inputNome(e){
        this.setState({ nome: e.target.value })
    }
    
    inputPreco(e){
        this.setState({ preco: e.target.value })
    }
    
    enviarForm(e){
        e.preventDefault(); 
        const produto = {
            nome: this.state.nome,
            preco: this.state.preco
        }
        
        axios.post('http://localhost:3001/produtos', produto).then( (res) => {
            console.log(res)
           // NAO SEI REDIRECIONAR depois de salvar T-T
        })
    } 


    render() {
        return (
            <div className='container'>
            <h1>Cadastro de produtos</h1>
                <form className='jumbotron' onSubmit={ this.enviarForm }>
                
                    <div className='form-group'>
                        <label>Nome</label>
                        <input type='text' className='form-control' value={ this.props.nome } onChange={ this.inputNome }/>
                    </div>
                    
                    <div className='form-group'>
                        <label>Preço</label>
                        <input type='number' className='form-control' value={ this.props.preco } onChange={ this.props.inputPreco }/>
                    </div>
                    
                    <div className='form-group'>
                        <input type='submit' className='btn btn-primary' />
                    </div>

                    
                
                </form>
            </div>
            )
        }
}