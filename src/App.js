import React, {useRef, useState} from "react";
import Counter from "./components/counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import postItem from "./components/PostItem";
import PostForm from "./components/PostForm";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Test 1', body: 'Testing 1'},
        {id: 2, title: 'Test 2', body: 'Testing 2'},
        {id: 3, title: 'Test 3', body: 'Testing 3'},
    ]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const deletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            {posts.length !== 0
                ? <PostList remove={deletePost} posts={posts} title={'List of Posts'}/>
                : <h1 style={{textAlign: "center"}}>
                    No posts
                  </h1>
            }

        </div>
    );
}

export default App;
