import React, { Component } from "react";
import './css/produtos.css'
import ButtonBackPage from "../../components/buttons/ButtonBackPage";

class Produtos extends Component {
  componentDidMount(){}
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
                  <tr>
                    <th scope="row">1</th>
                    <td>Pera</td>
                    <td>1.50</td> 
                  </tr>
                  
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