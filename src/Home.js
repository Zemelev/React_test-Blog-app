import { useState } from "react";

const Home = () => {
    const [name, setName] = useState('dan');
    const [age, setAge] = useState(25);

    const handleClick = () => { 
        setName('nick');
        setAge(30);
    }

    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <p>{ name } is {age}</p>
            <button onClick={(e) => handleClick('dan', e)}>Click me</button>
        </div>
     );
}
 
export default Home;