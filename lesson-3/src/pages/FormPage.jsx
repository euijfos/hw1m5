import React, {useState} from 'react';

function FormPage() {
    const [value, setValue] = useState("")
    const [postsArr, setPostsArr] = useState([])

    const handleAddPost = (e) => {
        e.preventDefault()
        if (value !== "") {
            setPostsArr([...postsArr, value])
        }
    }

    return (
        <form onSubmit={handleAddPost}>
            <p>Title: </p>
            <input value={value} onChange={(e)=>setValue(e.target.value)} type="text"/>
            <button>Add post</button>
            <p>Posts: </p>
            <ul>
                {postsArr.map((post, index) => (
                    <li key={index}>{post}</li>
                ))}
            </ul>
        </form>
    );
}

export default FormPage;