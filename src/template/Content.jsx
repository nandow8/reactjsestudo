import React, {Component} from 'react';

import { Route, HashRouter } from "react-router-dom";
import Produtos from '../pages/Produtos.jsx'
import ProdutosForm from '../pages/ProdutosForm.jsx'
import SideBar from '../template/SideBar.jsx'

export default class Content extends Component {
    render(){
        return (
            <HashRouter>
                <div className="content-wrapper">
                    <SideBar />
                    <div className="content">
                        <Route path="/produtos" component={ Produtos }/>
                        <Route path="/produtosform" component={ ProdutosForm }/>
                    </div>
                </div>
            </HashRouter>
            )
        }
    }