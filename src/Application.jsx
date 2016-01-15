var React = require('react');
import Router from 'react-router';

module.exports = React.createClass({
     render: function() {
        
        return (
            <div className='row'>
                <div className='col-md-12'>
                    {this.props.children}
                </div>
            </div>
        );
    }
});
