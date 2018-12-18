import React, {Component} from 'react';
import {  NavLink } from "react-router-dom";
export default class SideBar extends Component {
    render(){
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="img/mito.jpg" className="img-circle" alt="User" />
                        </div>
                        <div className="pull-left info">
                            <p>Alexander Pierce</p>
                            <a href="/"><i className="fa fa-circle text-success"></i> Online</a>
                        </div>
                    </div>
                    <hr></hr>
                    {/* <form action="#" method="get" className="sidebar-form">
                        <div className="input-group">
                            <input type="text" name="q" className="form-control" placeholder="Search..." />
                            <span className="input-group-btn">
                                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                                </button>
                            </span>
                        </div>
                    </form> */}
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="active treeview">
                            <a href="/">
                                <i className="fa fa-dashboard"></i> <span>Produtos</span>
                                <span className="pull-right-container">
                                <i className="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li><NavLink to="/produtos"><i className="fa fa-home"></i>Produtos</NavLink></li>
                                <li><NavLink to="/produtoscreate"><i className="fa fa-pencil"></i>Cadastro de produtos</NavLink></li>
                            </ul>
                        </li> 
                    </ul>
                </section>
            </aside>
        )
    }
}
