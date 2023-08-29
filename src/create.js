import { useNavigate } from "react-router-dom";
const Create = () => {
    let title = "";
    let describtion = "";
    let year= 0;

    const navigate = useNavigate();

    const HandleSubmit = (e)=> {
        e.preventDefault();
        const blog = {
            Title: title,
            Year:year,
            Describtion:describtion
        }
        console.log(blog);


        fetch('http://localhost:8000/blogs', {
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(res => {
            if (!res.ok){ throw Error("Server replied with error")}
            console.log(res.ok);
            console.log("Blog Saved")
            
            
        })
        navigate('/');
    }
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={HandleSubmit}>
                <label >Blog Title:</label>
                <input type="text" required onChange={(i) => title=i.target.value}/>
                
                <label >Year of Publish:</label>
                <input type="Number" required onChange={(i) => year=i.target.value}/>
                

                <label >Blog Describtion:</label>
                <textarea  required onChange={(i) => describtion=i.target.value}></textarea>

                <button>Add Blog</button>


            </form>
        </div>
      );
}
 
export default Create;