import gql from 'graphql-tag'

export const FETCH_POSTS_QUERY = gql`
{
    getPosts{
        id body createdAt username
        likes{
            username
        }
        comments{
            id username createdAt body
        }
    }
}
`;
export default FETCH_POSTS_QUERY;