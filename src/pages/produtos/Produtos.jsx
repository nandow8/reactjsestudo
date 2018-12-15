import React, { Component } from "react";
import './css/produtos.css'
import ButtonBackPage from "../../components/buttons/ButtonBackPage";
import axios from "axios";

import ProdutosList from './ProdutosList.jsx'

class Produtos extends Component {
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
    return this.state.produtos.map(function(object, i){
        return <ProdutosList obj={object} key={i} />;
    });
}

  render() {
    return (
      <div>
        <h1>Lista de produtos</h1>
        <div className='table-responsive'> 
            <section className="content"> 
              <div className="row">
                <table className="table table-hover table-condensed">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
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
      );
    }
  }
  
  export default Produtos;