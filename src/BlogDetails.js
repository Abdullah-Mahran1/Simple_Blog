import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

export const BlogDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const {data: blog, message} = useFetch(`http://localhost:8000/blogs/${id}`)
    const handleDelete = (i) =>{
      fetch(`http://localhost:8000/blogs/${id}`, {method: "DELETE"} ).then(()=>{
        navigate('/');
      })
    }
    return (
      <div>
      {!blog && <div>{message} </div>}
      {blog && (
        <article>
          <h2>{blog.Title}</h2>
          <p>Published in {blog.Year}</p>
          <br />
          <div>{blog.Describtion}</div>
          <br />
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
        <div className="blog-details"><h2>Blog Details {id}</h2></div>
        </div>
      );
}
 
