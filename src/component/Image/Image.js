import React, { useState } from 'react';
import './Image.css';
import { Link } from 'react-router-dom';
import axios from 'axios';



const Image = () => {
    const [Postdata, setPostData] = useState([])
    const[toggleSearch, setToggleSearch]= useState(false)
    console.log('data', Postdata)


    //handleclick function call the api to fecth the data
    const handleClick = async () => {
        const response = await axios.get('https://api.giphy.com/v1/gifs/trending?limit=25&api_key=BBllUXSslRRw4234LL4rT5VfMbKLLG6A')
        setPostData(response.data.data)

    }

    //function to handle serch
    const handleSearch= ()=>[
        setToggleSearch( (toggleSearch) => !toggleSearch)
    ]




    return (

        <>
           
            <div className="Image">
                <div className="github lead">Github Api Intergration</div>
                <button className="btn">
                    <Link to="/" onClick={handleClick}>Trending</Link> | < Link to="/" onCliick={handleSearch}>Search</Link>
                </button>
            </div>
            
            {Postdata.length > 0 ? Postdata.map((post)=>(
                
                <div className="card container">
                    
                    <div className="card" style={{ width: "20rem" }}>
                        <img src={post.images.original.url} class="card-img-top" alt="..."/> 
                        <div className="card-body">
                           
                           <p className="card">{post.date}</p>
                        </div>
                    </div>
                   
                </div>
                

  
            
            )):''}


        </>
    )
}

export default Image
