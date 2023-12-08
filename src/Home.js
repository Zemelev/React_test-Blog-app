import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => { //fires on every render
        //used for db connection or auth
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                if(!res.ok) {
                    throw Error('Could not fetch the data')
                }
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.massage);
            } )
        }, 1000);
    }, []); 

    return ( 
        <div className="home">
            { error && <div>{error}</div>}
            { isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'dan')} title="Dan's blogs" /> */}
        </div>
     );
}
 
export default Home;

// npx json-server --watch data/db.json --port 8000
