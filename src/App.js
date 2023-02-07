import React, {useState} from "react";
import Counter from "./components/counter";
import ClassCounter from "./components/ClassCounter";

function App() {

    const [value, setValue] = useState('');

    return (
        <div className="App">
            <Counter/>
            <ClassCounter/>
        </div>
    );
}

export default App;
