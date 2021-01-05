import React, { Component } from 'react';
import Posts from './Posts/Posts'
import './Blog.css';
import { Route , NavLink, Switch } from "react-router-dom";
// import NewPost from './NewPost/NewPost'
import asyncComponent from '../../hoc/asyncComponent';
const AsyncNewPost  = asyncComponent(()=>{
    return import('./NewPost/NewPost');
});
class Blog extends Component {
    
    
    render () {
        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact>Home</NavLink></li>
                            <li><NavLink to="/new-post">New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                
                {/* <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section> */}
                <Switch>
                    <Route path="/new-post" component={AsyncNewPost}/>
                    <Route path="/" component={Posts}/>
                    
                </Switch>
                
            </div>
        );
    }
}

export default Blog;