import React, { useEffect, useState } from "react";
const types = ['posts', 'comments','albums']
const DomEvent = () => {
    const [posts, setPosts] = useState([])
    const [title, setTitle] = useState("")
    const [type, setType] = useState("")
    const [showGotoTop, setShowGotoTop] = useState(false)
    console.log(type)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then (response => response.json())
        .then(posts => {
            setPosts(posts)
        })
    
    }, [type])
    useEffect(() => {
        const handleScroll = () => {
            setShowGotoTop(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll)
        // cleanup function

        return () =>  {
            window.removeEventListener('scroll', handleScroll)}
    }, [])
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
            {showGotoTop && (
                <button
                style={{
                    "position":"fixed", 
                    "right": 20,
                    "bottom": 20
                    }}
                >Goto Top</button>
            )}
        </div>
    )
}
export default DomEvent