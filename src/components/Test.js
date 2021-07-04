import CardView from './CardView';
import React from 'react'
import {useEffect, useState} from 'react';
import '../App.css'
import { render } from '@testing-library/react';

const Test = () => {
    const [query, setQuery] = useState("");
    const [pincode, setPincode] = useState("383430");
    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        console.log('component did mount')
        let date = new Date()
        date = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();      

        fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${date}`)
        .then(res => res.json())
        .then(res => {
            console.log("Fetching...")
            console.log(res["sessions"])
            setItems(res["sessions"])
            setIsLoaded(true)
        })
        .catch((error) => {
            console.error(error)
        })
    }, [pincode]);

   
    if(isLoaded){
        return (
            <div className="App">           
                <form onSubmit={(e => {e.preventDefault();setPincode(query);})}>
                    <input type="text" name="query" onInput={(e => {setQuery(e.target.value)})}/>
                    <button type="submit" name="Search" value="Search"/>
                </form>
    
                <button onClick={() => setPincode("383410")}>383410</button>
                <button onClick={() => setPincode("383430")}>383430</button>

                <div>
                    <ul>
                        {items.map(item => {
                            return <CardView item={item}/>
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
    else{
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
} 

export default Test;