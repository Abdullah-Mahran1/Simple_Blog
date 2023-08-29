const BlogsList = ({blogs, title}) => {
    
    return ( 
        <div>
    <       h2>{title}</h2>
            {blogs.map((blog) => {
                return (
                <div className="blog-preview" key={blog.id}>
                    <a href={`/blogs/${blog.id}`}>
                        <h2>{blog.Title}</h2>
                        <p>Published {blog.Year}</p>
                    </a>
                    {/* <button className="Button" >Delete</button> */}
                </div>
                )
        }
            )}
        </div>    );
}
 
export default BlogsList;