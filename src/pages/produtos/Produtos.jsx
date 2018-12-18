import React, { Component } from "react";
import './css/produtos.css'


import ProdutosList from './ProdutosList.jsx'

class Produtos extends Component {

  render(){
    return(
      <div>
        <ProdutosList />
      </div>
    )
  }
  
}

export default Produtos;
