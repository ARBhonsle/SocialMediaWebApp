import React from 'react';
import {useQuery} from '@apollo/client';
import {gql} from '@apollo/client'; // gql now in @apollo/client not older dependency graphql
//import { graphql } from 'graphql';
import {Grid} from 'semantic-ui-react';
import PostCard from '../Components/postcard';


function Home(){
    const FETCH_POSTS_QUERY = gql`
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
   //data:{getPosts:posts}
   // divided remove from grid column and keep rows 

   /* const [createPost] = useMutation(CREATE_POST_MUTATION, {
    variables: values,
    update (proxy, result) {
      const data = proxy.readQuery({
        query: FETCH_POSTS_QUERY
      })
      const new_post = result.data.createPost //here's the new var
      proxy.writeQuery({
        query: FETCH_POSTS_QUERY,
        data: { getPosts: [new_post, ...data.getPosts] } // here you're using that var to write the cache
      })
      values.body = ''
    }
  }) 
  
  */  
    const { loading, 
        data:{getPosts:posts}={}}
         = useQuery(FETCH_POSTS_QUERY);
    return(
    <Grid columns={3}>
    <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
    </Grid.Row>  
    <Grid.Row>
    {loading ? (
    <h1>Loading posts...</h1>
    ) : (
        posts && 
        posts.map((post) => (
            <Grid.Column key={post.id} style={{marginBottom:20}}>
                <PostCard post={post}/>  
            </Grid.Column>                  
        ))            
        )}                 
    </Grid.Row>         
    </Grid>
    );
}

export default Home;