import React, { Component } from 'react';
import './css/produtos.css'
import ButtonBackPage from "../../components/buttons/ButtonBackPage";
import axios from "axios";
import { Link } from 'react-router-dom'

export default class ProdutosList extends Component {

  constructor(props){
    super(props)
    this.state = { produtos: [] }
  }

  componentDidMount(){
    axios.get('http://localhost:3001/produtos')
        .then( response => {
          this.setState({ produtos: response.data })
        })
        .catch( function(err){
          console.log(err)
        })
  }

  tabRow(){
    return this.state.produtos.map(function(produto, i){
      // if(produto.nome === 'HD SSD'){
        return <tr className='success' key={ produto.id }>
                 <td>{ produto.id }</td>
                 <td>{ produto.nome }</td>
                 <td>{ produto.preco }</td>
                 <td>
                   <Link className='btn btn-warning' to={"/produtosedit/" + produto.id }>Editar</Link>
                 </td>
              </tr>;
      // }
    });
  }

  render(){
      return(
        <div className='jumbotron'>
          <h2>Lista de produtos</h2>
          <div className='table-responsive'>
              <section className="content">
                <div className="row">
                  <table className="table table-hover table-condensed">
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Preço</th>
                      </tr>
                    </thead>
                    <tbody>
                      { this.tabRow() }
                    </tbody>
                  </table>
                </div>
              </section>
          </div>
          <ButtonBackPage classe="btn btn-danger pull-right" titulo="Voltar" />
        </div>
      )
  }
}
