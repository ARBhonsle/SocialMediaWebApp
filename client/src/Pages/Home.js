import React, {useContext} from 'react';
import {useQuery} from '@apollo/client';

import {AuthContext} from '../context/auth';
import {Grid,Transition} from 'semantic-ui-react';
import PostCard from '../Components/postcard';
import PostForm from '../Components/PostForm';
import {FETCH_POSTS_QUERY} from './util/graphql';

function Home(){
    const {user} = useContext(AuthContext);
 
    const { loading, 
        data:{getPosts:posts}={}}
         = useQuery(FETCH_POSTS_QUERY);
    return(
    <Grid columns={3}>
    <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
    </Grid.Row>  
    <Grid.Row>
        {user && (
            <Grid.Column>
                <PostForm/>
            </Grid.Column>
        )}
    {loading ? (
    <h1>Loading posts...</h1>
    ) : (
        <Transition.Group>
        {
            posts && 
            posts.map((post) => (
                <Grid.Column key={post.id} style={{marginBottom:20}}>
                    <PostCard post={post}/>  
                </Grid.Column>                  
            ))
        }
        </Transition.Group>            
        )}                 
    </Grid.Row>         
    </Grid>
    );
}

export default Home;

    
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