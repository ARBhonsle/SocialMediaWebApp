const postsResolvers = require('./posts');
const usersResolvers = require('./users');
const commentResolvers = require('./comment');

module.exports={
    Post:{
        //likeCount: {parent}
        likeCount(parent){
            console.log(parent);
            return parent.likes.length;
        },
        //commentCount:{parent}
        commentCount:(parent) =>  parent.comments.length
        
    },
    Query: {
        ...postsResolvers.Query
        
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...postsResolvers.Mutation,
        ...commentResolvers.Mutation
    },
    Subscription: {
        ...postsResolvers.Subscription
    }
};
