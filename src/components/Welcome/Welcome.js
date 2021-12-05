const style = {
    backgroundColor: 'blue', 
    'padding':20, 
    'color' : '#fff'
}

const Welcome = ({name, age, class_name}) =>{
    return (
        <div className = {class_name}>
            <h1>Hello, my name is {name}</h1>
            <h3>Age: {age}</h3>
            <h3>This is a demo ReactJS</h3>
        </div>
    )
}
export default Welcome;