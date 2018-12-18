import React, { Component } from 'react'
import Form from './Form.jsx'
import Axios from 'axios';

class ProdutosEdit extends Component {

    constructor(props){
        super(props)

        this.state = {
            nome: '',
            preco: ''
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:3001/produtos/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    nome: response.data.nome,
                    preco: response.data.preco
                })
            })
            .catch(function(er){
                console.log(er)
            })
            
    }
    
    render() { 
        return(
            <div>
                <Form nome={ this.state.nome} preco={ this.state.preco } />
            </div>
        )
    }
}
 
export default ProdutosEdit;