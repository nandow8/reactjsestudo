import React, {Component} from 'react';
import './css/content.css'
import {  NavLink } from "react-router-dom";

import { Route, HashRouter } from "react-router-dom";
import Produtos from '../pages/produtos/Produtos'
import ProdutosCreate from '../pages/produtos/ProdutosCreate.jsx'
import SideBar from '../template/SideBar.jsx'
import ProdutosEdit from '../pages/produtos/ProdutosEdit';

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
                        <Route path="/produtoscreate" component={ ProdutosCreate }/>
                        <Route path="/produtosedit/:id" component={ ProdutosEdit }/>
                    </div>
                </div>
            </HashRouter>
            )
        }
    }