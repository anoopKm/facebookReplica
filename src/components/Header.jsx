import React from 'react';
import Menu from './LeftSideBar.jsx';

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
    getMobileDrawerOverlay() {
        let markup;
        markup = <div onClick = {this.toggleDrawer}
                      className = {this.state.showSideMenu ? 'drawer-overlay' : 'hidden'}>
                </div>;
        return markup;
    },
    render() {
        return (
            <div className='row header'>
                <div className='hidden-lg col-sm-3 col-xs-3 mobile-menu' onClick={this.toggleDrawer}>
                    <span>Menu</span>
                </div>
                {this.getMobileDrawerOverlay()}
                <img className='col-md-4 col-sm-3 col-xs-3 logo' src='/../image/Facebook_icon.png'></img>
                <span className='col-md-4 col-sm-3 col-xs-3'>Welcome to replica of facebook</span>
                <div className='col-md-4 col-sm-3 col-xs-3 navigationButtons'>
                    <button className='col-md-4 btn navBtns'>{this.props.personName}</button>
                    <button className='col-md-4 btn navBtns'>{this.props.homeNavTxt}</button>
                </div>
            </div>
        );
      }
    }
);

module.exports = Header;