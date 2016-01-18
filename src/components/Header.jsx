import React from 'react';
import Menu from './LeftSideBar.jsx';
import LeftSideBar from './LeftSideBar.jsx';
//reactLogo = require('../image/Facebook_icon.png');

let Header = React.createClass ({
    getDefaultProps() {
        return {
                name: 'anoop'
            };
    },
    getInitialState() {
        return ({
            'showSideMenu': false
            });
    },
    toggleDrawer() {
        this.setState({
            'showSideMenu': !this.state.showSideMenu
        });
    },
   /* getMobileDrawerOverlay() {
        let markup;
        markup = <div onClick = {this.toggleDrawer}
                      className = {this.state.showSideMenu ? 'drawer-overlay' : 'hidden'}>
                </div>;
        return markup;
    },*/
    getMenuItems() {
        if (this.state.showSideMenu) {
            return (
                <LeftSideBar
                    wrapperClass = 'col-md-3 col-sm-12 col-xs-12'/>
            );
        }
        else {
            return '';
        }
    },
    render() {
        return (
            <div className='row header'>
                <div className='col-md-12 col-sm-12 col-xs-12 headerContent'>
                <div className='hidden-lg col-sm-3 col-xs-3 mobile-menu' onClick={this.toggleDrawer}>
                    <span>Menu</span>
                </div>
                <div className='col-md-4 col-sm-3 col-xs-3'><img className='logo'></img></div>
                <div className='col-md-4 col-sm-4 col-xs-3 welcomeLine'>
                    <span>Welcome to replica of facebook</span>
                </div>
                <div className='col-md-4 col-sm-5 col-xs-5 navigationButtons'>
                    <button className='col-md-4 btn navBtns'>{this.props.personName}</button>
                    <button className='col-md-4 btn navBtns'>{this.props.homeNavTxt}</button>
                </div>
                </div>
                <div className='hidden-lg col-sm-7 col-xs-7 mobileMenu'>
                    {this.getMenuItems()}
                </div>
            </div>
        );
      }
    }
);

module.exports = Header;