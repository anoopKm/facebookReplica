import React from 'react';
import constants from '../Constants/constants.js';
import _ from 'lodash';

let Example = React.createClass ({
    getDefaultProps() {
        return {
            name: 'anoop'
        }
    },
    getSpaceCase(str) {
        return str.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1");
    },
    getInternalLinks(head) {
        let internalLinkHtml;
        internalLinkHtml = Object.keys(head).map((menulink, index) => {
            return (
                <li className='col-md-12 menuLinks' key={index}>
                    <a href={head[menulink]}>{this.getSpaceCase(menulink)}</a>
                </li>
            );
        });
        return internalLinkHtml;
    },
    getLeftMenu() {
        let actualResultHtml;
        actualResultHtml = Object.keys(constants).map((menuHead, index) => {
            return (
                <ul className='row menuHead' key={index}>
                    {(menuHead).toUpperCase()}
                    {this.getInternalLinks(constants[menuHead])}
                </ul>
            );
        });
        return actualResultHtml;
    },
    getWrapperClass() {
        return this.props.wrapperClass + ' leftSideBar';
    },
    render: function() {
        return (
            <div className={this.getWrapperClass()}>
                {this.getLeftMenu()}
            </div>
        );
    }

});

module.exports = Example;