import React from 'react'
import Post from '../../../components/Post/Post'
import axios from '../../../axios'
import './Posts.css'
import {Route} from 'react-router-dom'
import FullPost from '../FullPost/FullPost'
class Posts extends React.Component{

    state={
        posts:[]
    }

    postSelectedHandler = (id) => {
        console.log("id => ",id);
        this.props.history.push('/'+id);
        // this.setState({selectedPostId:id});
    }
    componentDidMount(){
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0,4);
                const updatedPosts = posts.map(post=>{
                    return {
                        ...post,
                        author:"bharath"
                    }
                })
                this.setState({posts:updatedPosts});
                console.log(response);
            })
            .catch(error=>{
                // this.setState({error:true});
            })
        
        console.log(this.props);
    }
    
    render(){
        let posts = <p style={{textAlign:'center'}}>Something went wrong</p>
        if(!this.state.error){
            posts = this.state.posts.map(post => {
                return <Post
                key={post.id}
                title={post.title} 
                author={post.author}
                clicked={()=>this.postSelectedHandler(post.id)}/>
                // <Link key={post.id} to={'/' + post.id}>
                    
                        // </Link>
            })
        }
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path="/:id" component={FullPost}/>
            </div>
        )
    }
}

export default Posts;