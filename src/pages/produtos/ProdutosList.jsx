import React, { Component } from 'react';
import axios from 'axios';

export default class ProdutosList extends Component {

    render(){
        return(
            <tr>
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.nome}
                </td>
                <td>
                    {this.props.obj.preco}
                </td>
                <td>
                    <button onClick={ this.delete } className="btn btn-warning btn-sm"><span class="fa fa-pencil" aria-hidden="true"></span></button>
                    <button onClick={ this.delete } className="btn btn-danger btn-sm"><span class="fa fa-trash" aria-hidden="true"></span></button>
                </td> 
            </tr>
        )
    }
}