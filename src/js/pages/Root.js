import React, {Component} from 'react';
import {Sidebar} from '../components/'

export default class Root extends Component {
    render() {
        return (
            <div className="root">
                <div className="view  ">
                    {this.props.children}
                </div>
                <Sidebar />
            </div>
        );
    }
};