import React, { useEffect, useState } from "react";
const types = ['posts', 'comments','albums']
const CallAPI = () => {
    const [posts, setPosts] = useState([])
    const [title, setTitle] = useState("")
    const [type, setType] = useState("")
    console.log(type)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then (response => response.json())
        .then(posts => {
            setPosts(posts)
        })
    
    }, [type])
   return (
        <div style={{"padding":32 }}>
            {types.map(tab => (
                <button 
                key = {tab} 
                style={{"marginLeft":10}}
                onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}
            <input style={{"marginLeft": 20}}
            value={title}
            onChange={e => setTitle(e.target.value) }
            />
            <ul>
                {posts.map(post => (
                    <li key = {post.id}>
                        {post.id} -- 
                        {post.title || post.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default CallAPI