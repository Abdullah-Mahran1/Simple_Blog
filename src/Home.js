import { useState } from "react";
import BlogsList from "./BlogsList";
import useFetch from "./useFetch";
const Home = () => {

    const [counter, setCounter] = useState(0);
    const {data: blogs, message} = useFetch('http://localhost:8000/blogs');
    console.log("Blogs recieved: ");
    // while(blogs.length===0){
    //     console.log("Waiting..")
    // }
    console.log(blogs)
    const handleClick = () => {
        console.log('You Clicked the button!, counter: '+ counter);
        setCounter(counter+1);
    }


    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick} className="Button">Increment Counter</button>
            {!blogs && <div>{message} </div>}
            {blogs && <BlogsList blogs = {blogs} title={"This is Egypt"} ></BlogsList>}
            <p>Current Number is :{counter}</p>
        </div>
     );
}
export default Home;