import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);


    useEffect(() => { //fires on every render
        //used for db connection or auth
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                setBlogs(data);
                setIsPending(false);
            })
        }, 1000);
    }, []); 

    return ( 
        <div className="home">
            { isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'dan')} title="Dan's blogs" /> */}
        </div>
     );
}
 
export default Home;

// npx json-server --watch data/db.json --port 8000
