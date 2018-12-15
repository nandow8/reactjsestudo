import React, {Component} from 'react';
import './css/content.css'
import {  NavLink } from "react-router-dom";

import { Route, HashRouter } from "react-router-dom";
import Produtos from '../pages/produtos/Produtos'
import ProdutosForm from '../pages/produtos/ProdutosForm.jsx'
import SideBar from '../template/SideBar.jsx'

export default class Content extends Component {
    render(){
        return (
            <HashRouter>
                <div className="content-wrapper">
                    <ol className="breadcrumb pull-left fundo">
                        <li><NavLink to="/home"><i className="fa fa-dashboard"></i>Home</NavLink></li>
                        <li className="active">Dashboard</li>
                    </ol>

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