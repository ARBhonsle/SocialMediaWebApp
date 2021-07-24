import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client/react/hooks';

import { Button, Confirm, Icon } from 'semantic-ui-react';
import FETCH_POSTS_QUERY from '../Pages/util/graphql';
import MyPopup from '../Pages/util/MyPopup';

function DeleteButton({ postId, commentId, callback }) {
    const [confirmOpen, setConfirmOpen] = useState(false);
    const mutation = commentId ? DELETE_COMMENT_MUTATION : DELETE_POST_MUTATION;
    const [deletePostorMutation] = useMutation(mutation, {
        update(proxy) {
            setConfirmOpen(false);
            if (!commentId) {
                const data = proxy.readQuery({
                    query: FETCH_POSTS_QUERY
                });
                data.getPosts = data.getPosts.filter((p) => p.id !== postId);
                proxy.writeQuery({ query: FETCH_POSTS_QUERY, data });
            }
            if (callback) callback();
        },
        onError(err) {
            //setErrors(err.graphQLErrors[0].extensions.exception.errors);
            console.log("Delete Errors");
            return err;
        },
        variables: {
            postId,
            commentId
        },

    });

    return (
        <>
            <MyPopup
            content={commentId ? 'Delete Comment' : 'Delete Post'}            
            >            
            <Button as="div" color="red" floated="right" onClick={() => setConfirmOpen(true)}>
                <Icon name="trash" style={{ margin: 0 }} />
                </Button>
            </MyPopup>            
            <Confirm
                open={confirmOpen}
                onCancel={() => setConfirmOpen(false)}
                onConfirm={deletePostorMutation}
            />
        </>
    )
}

const DELETE_POST_MUTATION = gql`
mutation deletePost($postId:ID!){
    deletePost(postId:$postId)
}
`;
const DELETE_COMMENT_MUTATION = gql`
mutation deleteComment($postId:ID!, $commentId:ID!){
    deleteComment(postId:$postId, commentId:$commentId){
        id
        comments{
            id username createdAt body
        }
        commentCount
    }
}
`;

export default DeleteButton;