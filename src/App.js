import React, {useState} from "react";
import Counter from "./components/counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Test 1', body: 'Testing 1'},
        {id: 2, title: 'Test 2', body: 'Testing 2'},
        {id: 3, title: 'Test 3', body: 'Testing 3'},
    ]);

    return (
        <div className="App">
            <PostList posts={posts} title={'List of Posts'}/>
        </div>
    );
}

export default App;
