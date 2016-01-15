import React from 'react';
import constants from '../Constants/constants.js';
import _ from 'lodash';

let PostFeed = React.createClass ({
    getDefaultProps() {
        return {
            name: 'anoop',
            feedtxtValue: ''
        }
    },
    postStatus() {
        if(this.refs.feedTxt.value !== '') {
            this.props.pushNewsFeed(this.refs.feedTxt.value);
            this.refs.feedTxt.value = this.props.feedtxtValue;
        }
        //console.log(this.refs.feedTxt.value);
    },
    render() {
        return (
            <div className="col-md-12 post-feed">
                <textarea ref="feedTxt"rows="5" cols="75" placeholder="What's on your mind?">
                    </textarea>
                <button className='btn' onClick={this.postStatus}>Post</button>
            </div>
        );
    }

});

module.exports = PostFeed;
