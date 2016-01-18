import React from 'react';
import PostFeed from './PostFeed.jsx';
import NewsFeed from './NewsFeed.jsx';
// let update = require('react-addons-update');

let ActualContent = React.createClass ({
    getInitialState() {
        return {
            newsFeed: [
                {
                    name: 'Anoop Kumar',
                    profileLink: 'https://www.facebook.com/anoopiitr',
                    feedText: 'Good Morning Friends',
                    liked: false,
                    comments: [
                        {
                            author: 'Ashu',
                            comment: 'Hi Wassup friend !'
                        },
                        {
                            author: 'Jack',
                            comment: 'Chill Bro !!'
                        }
                    ]
                },
                {
                    name: 'Ajay',
                    profileLink: 'https://www.facebook.com/anoopiitr',
                    feedText: 'Good Morning Dear',
                    liked: false,
                    comments: [
                        {
                            author: 'Ashu',
                            comment: 'Hi Wassup friend !'
                        },
                        {
                            author: 'Jack',
                            comment: 'Chill Bro !!'
                        }
                    ]
                },
                {
                    name: 'Rakesh',
                    profileLink: 'https://www.facebook.com/anoopiitr',
                    feedText: 'Good Morning Friends',
                    liked: false,
                    comments: [
                        {
                            author: 'Ashu',
                            comment: 'Hi Wassup friend !'
                        },
                        {
                            author: 'Jack',
                            comment: 'Chill Bro !!'
                        }
                    ]
                },
                {
                    name: 'Meghna',
                    profileLink: 'https://www.facebook.com/anoopiitr',
                    feedText: 'Good Morning Dear',
                    liked: false,
                    comments: [
                        {
                            author: 'Ashu',
                            comment: 'Hi Wassup friend !'
                        },
                        {
                            author: 'Jack',
                            comment: 'Chill Bro !!'
                        }
                    ]
                },
                {
                    name: 'Anoop Kumar',
                    profileLink: 'https://www.facebook.com/anoopiitr',
                    feedText: 'Good Morning Friends',
                    liked: false,
                    comments: [
                        {
                            author: 'Ashu',
                            comment: 'Hi Wassup friend !'
                        },
                        {
                            author: 'Jack',
                            comment: 'Chill Bro !!'
                        }
                    ]
                },
                {
                    name: 'Anoop Kumar',
                    profileLink: 'https://www.facebook.com/anoopiitr',
                    feedText: 'Good Morning Friends',
                    liked: false,
                    comments: [
                        {
                            author: 'Ashu',
                            comment: 'Hi Wassup friend !'
                        },
                        {
                            author: 'Jack',
                            comment: 'Chill Bro !!'
                        }
                    ]
                },
                {
                    name: 'Ajay',
                    profileLink: 'https://www.facebook.com/anoopiitr',
                    feedText: 'Good Morning Dear',
                    liked: false,
                    comments: [
                        {
                            author: 'Ashu',
                            comment: 'Hi Wassup friend !'
                        },
                        {
                            author: 'Jack',
                            comment: 'Chill Bro !!'
                        }
                    ]
                },
                {
                    name: 'Rakesh',
                    profileLink: 'https://www.facebook.com/anoopiitr',
                    feedText: 'Good Morning Friends',
                    liked: false,
                    comments: [
                        {
                            author: 'Ashu',
                            comment: 'Hi Wassup friend !'
                        },
                        {
                            author: 'Jack',
                            comment: 'Chill Bro !!'
                        }
                    ]
                },
                {
                    name: 'Meghna',
                    profileLink: 'https://www.facebook.com/anoopiitr',
                    feedText: 'Good Morning Dear',
                    liked: false,
                    comments: [
                        {
                            author: 'Ashu',
                            comment: 'Hi Wassup friend !'
                        },
                        {
                            author: 'Jack',
                            comment: 'Chill Bro !!'
                        }
                    ]
                },
                {
                    name: 'Anoop Kumar',
                    profileLink: 'https://www.facebook.com/anoopiitr',
                    feedText: 'Good Morning Friends',
                    liked: false,
                    comments: [
                        {
                            author: 'Ashu',
                            comment: 'Hi Wassup friend !'
                        },
                        {
                            author: 'Jack',
                            comment: 'Chill Bro !!'
                        }
                    ]
                },
                {
                    name: 'Anoop Kumar',
                    profileLink: 'https://www.facebook.com/anoopiitr',
                    feedText: 'Good Morning Friends',
                    liked: false,
                    comments: [
                        {
                            author: 'Ashu',
                            comment: 'Hi Wassup friend !'
                        },
                        {
                            author: 'Jack',
                            comment: 'Chill Bro !!'
                        }
                    ]
                },
                {
                    name: 'Ajay',
                    profileLink: 'https://www.facebook.com/anoopiitr',
                    feedText: 'Good Morning Dear',
                    liked: false,
                    comments: [
                        {
                            author: 'Ashu',
                            comment: 'Hi Wassup friend !'
                        },
                        {
                            author: 'Jack',
                            comment: 'Chill Bro !!'
                        }
                    ]
                },
                {
                    name: 'Rakesh',
                    profileLink: 'https://www.facebook.com/anoopiitr',
                    feedText: 'Good Morning Friends',
                    liked: false,
                    comments: [
                        {
                            author: 'Ashu',
                            comment: 'Hi Wassup friend !'
                        },
                        {
                            author: 'Jack',
                            comment: 'Chill Bro !!'
                        }
                    ]
                },
                {
                    name: 'Meghna',
                    profileLink: 'https://www.facebook.com/anoopiitr',
                    feedText: 'Good Morning Dear',
                    liked: false,
                    comments: [
                        {
                            author: 'Ashu',
                            comment: 'Hi Wassup friend !'
                        },
                        {
                            author: 'Jack',
                            comment: 'Chill Bro !!'
                        }
                    ]
                },
                {
                    name: 'Anoop Kumar',
                    profileLink: 'https://www.facebook.com/anoopiitr',
                    feedText: 'Good Morning Friends',
                    liked: false,
                    comments: [
                        {
                            author: 'Ashu',
                            comment: 'Hi Wassup friend !'
                        },
                        {
                            author: 'Jack',
                            comment: 'Chill Bro !!'
                        }
                    ]
                }
            ]
        };
    },
    pushNewsFeed(txt) {
        let temp = this.state.newsFeed.slice();
        let obj = {
            name: 'Anoop Kumar',
            profileLink: 'https://www.facebook.com/anoopiitr',
            feedText: txt,
            liked: false,
            comments: []
        };
        temp.unshift(obj);
        this.setState({newsFeed: temp});
    },
    toggleLike(index) {
        let temp = this.state.newsFeed.slice();
        temp[index].liked = !temp[index].liked;
        this.setState({newsFeed: temp});
    },
    pushComment(index, cmtTxt) {
        let temp = this.state.newsFeed.slice();
        let obj = {
            author: 'Anoop Kumar',
            comment: cmtTxt
        };
        temp[index].comments.unshift(obj);
        this.setState({newsFeed: temp});
    },
    getDefaultProps() {
        return {
            name: 'anoop'
        }
    },
    render(){
        return (
            <div className='col-md-6 col-sm-12 col-xs-12 actualContent'>
                <div className='row card'>
                    <PostFeed
                        pushNewsFeed = {this.pushNewsFeed}/>
                </div>
                <NewsFeed
                        newsFeedPosts = {this.state.newsFeed}
                        toggleLike = {this.toggleLike}
                        pushComment = {this.pushComment}/>
            </div>
        );
    }
});

module.exports = ActualContent;