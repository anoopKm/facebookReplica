import React from 'react';
import constants from '../Constants/constants.js';
import _ from 'lodash';

let PostFeed = React.createClass ({
    getDefaultProps() {
        return {
            name: 'anoop'
        }
    },
    handleLikeClick(e) {
        this.props.toggleLike(e.target.getAttribute('data'));
    },
    handleCommentClick(e) {
        let refLink = 'blankCommentBox' + e.target.getAttribute('data');
        this.refs[refLink].focus();
        //console.log('Comment clicked');
    },
    handleShareClick() {
        console.log('Share clicked');
    },
    postComment(e) {
        if(e.which === 13) {
            if(e.target.value.trim() !== '') {
                this.props.pushComment(e.target.getAttribute('data'), e.target.value);
                e.target.value = '';
                e.target.blur();
            }
        }
    },
    getBlankCommentBox(index) {
        return (
            <div className='col-md-12 commentBox'>
                <input
                    type = "text"
                    placeholder = "Write a comment..."
                    data = {index}
                    ref={'blankCommentBox' + index}
                    onKeyPress = {this.postComment}
                    />
            </div>
        );
    },
    getCommentBox(index) {
        if(this.props.newsFeedPosts[index].comments.length > 0) {
            let commentBoxes = this.props.newsFeedPosts[index].comments.map((comment, index) => {
                return (
                    <div className='col-md-12 commentFeedBox' key = {index}>
                        <a className='author'>{comment.author}</a>
                        <a className='comment'>{comment.comment}</a>
                    </div>
                );
            });
            return commentBoxes;
        }
        else {
            return ''
        }
    },
    getClassForColor(index) {
        return (this.props.newsFeedPosts[index].liked) ? 'like' : 'disLike';
    },
    getAllCards() {
        let ActualHtml;
        ActualHtml = this.props.newsFeedPosts.map((feed, index) => {
            return (
                <div className='card' key={index}>
                    <div className="col-md-12 news-feed">
                        <a href={feed.profileLink}>{feed.name}</a>
                        <p>{feed.feedText}</p>
                    </div>
                    <div className="col-md-12 activity-section">
                        <span className="col-md-1">
                            <a className={this.getClassForColor(index)} onClick={this.handleLikeClick} data={index}>Like</a>
                        </span>
                        <span className="col-md-2">
                            <a className='comment' onClick={this.handleCommentClick} data={index}>Comment</a>
                        </span>
                        <span className="col-md-2">
                            <a className='share' onClick={this.handleShareClick} data={index}>Share</a>
                        </span>
                    </div>
                    {this.getBlankCommentBox(index)}
                    {this.getCommentBox(index)}
                </div>
            );
        });
        return ActualHtml;
    },
    render() {
        return (
            <div>
                {this.getAllCards()}
            </div>
        );
    }
});

module.exports = PostFeed;
