import React, {useMemo, useRef, useState} from "react";
import Counter from "./components/counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import postItem from "./components/PostItem";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Test 1', body: 'Testing 1'},
        {id: 2, title: 'Fest 2', body: 'Testing 2'},
        {id: 3, title: 'Eest 3', body: 'Testing 3'},
    ]);

    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts;
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query));
    }, [filter.query, sortedPosts]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const deletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <MyButton
                style={{marginTop: 30}}
                onClick={() => setModal(true)}
            >
                Add Post
            </MyButton>
            <MyModal
                visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            {/*<hr style={{margin: "15px"}}/>*/}
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <PostList remove={deletePost} posts={sortedAndSearchedPosts} title={'List of Posts'}/>
        </div>
    );
}

export default App;
