import React from 'react';  
//import {Link} from 'react-router';
import Header from './Header.jsx';
import LeftSideBar from './LeftSideBar.jsx';
import ActualContent from './ActualContent.jsx';
import RightSideBar from './RightSideBar.jsx';
require('../scss/common.scss');
//require('bootstrap-webpack');

var Main = React.createClass ({
    render() {
        return (
            <div className='col-md-12'>
                <Header
                    personName='Anoop'
                    homeNavTxt = 'Home'/>
                    <div className='col-md-12'>
                        <LeftSideBar
                            wrapperClass = 'col-md-3 hidden-sm col-xs-8'/>
                        <ActualContent />
                        <RightSideBar />
                    </div>
            </div>
        );
    }
});

module.exports = Main;