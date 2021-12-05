const Detail = ({post}) =>{
    console.log("detail")
    return (
        <div className = "detail">
            <p1> {post.id} </p1>
            <p1>{post.title}</p1>
            <p1>{post.body}</p1>
        </div>
    )
}
export default Detail;