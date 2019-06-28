// Header.js
import React, { Component } from 'react';
import { thisTypeAnnotation } from '@babel/types';

export default class Header extends Component {
    render() {
        return (
            <header className="main-header">
                <a href="#" className="logo">
                    <span className="logo-mini"><b>A</b>LT</span>
                    <span className="logo-lg"><b>{this.props.data.logoPrefixName}</b>{this.props.data.logosuffixName}</span>
                </a>
                <nav className="navbar navbar-static-top">
                    <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span className="sr-only">{this.props.data.sidebartoggle}</span>
                    </a>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="dropdown messages-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-envelope-o"></i>
                                    {this.props.data.headerNavItems.map(item => {
                                        return <span className="label label-success">{item.labelIconMsg}</span>
                                    })}
                                </a>
                                <ul className="dropdown-menu">
                                    {this.props.data.headerNavItems.map(item => {
                                        return <li className="header">{item.labelMessage}</li>
                                    })}
                                    <li>
                                        <ul className="menu">
                                            <li>
                                                <a href="#">
                                                    <div className="pull-left">
                                                        <img src="img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                                                    </div>                                                   
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}