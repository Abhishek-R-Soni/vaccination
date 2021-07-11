import React from 'react'
import ReactDOM from 'react-dom';
import {useEffect, useState} from 'react';
import { Empty } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import {Helmet} from 'react-helmet';
import CardView from './CardView';
import CustomSelect from './CustomSelect';
import '../App.css'
import 'antd/dist/antd.css';

const Vaccine = () => {
    const [query, setQuery] = useState("");
    const [pincode, setPincode] = useState("383430");
    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)

    // const options = [
    //     {label:"383410 - Goral", value:"383410"},
    //     {label:"383430 - Idar", value:"383430"},
    //     {label:"383440 - Kadiyadara", value:"383440"}
    // ]
    
    useEffect(() => {
        let date = new Date()
        date = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();      

        fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${date}`)
        .then(res => res.json())
        .then(res => {
            console.log(`Fetching Vaccine Data for ${pincode}...`)
            console.log(res["sessions"])
            setItems(res["sessions"])
            console.log(items.length)
            setIsLoaded(true)
        })
        .catch((error) => {
            console.error(error)
        })
    }, [pincode]);

    // const onPincodeChange = (pincode) => {
    //     console.log("OnPinCha", pincode.value)
    //     setPincode(pincode.value)
    // }

    if(isLoaded){
        if(items === undefined || items.length === 0){
            return (
                <div>
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>India's Vaccination Drive</title>
                        <link rel="canonical" href="https://sabarkantha-vaccination-drive.herokuapp.com/" />
                    </Helmet>
                    <h1 className="title">India's Vaccination Drive</h1>
                    <nav className="navbar navbar-light">
                        <div className="container-fluid">
                            <h1 className="navbar-brand">Search by Pincode</h1>
                            <form className="d-flex" onSubmit={(e => {e.preventDefault();setPincode(query)})}>
                            <input className="form-control me-2" type="number" placeholder="Pincode" aria-label="Search" onInput={(e => {setQuery(e.target.value)})}/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                    <div className="center">
                        <Empty />
                    </div>
                    <div className="error-msg">
                        <h5>No vaccination center is available for booking at {pincode},<p> Visit again after sometime.</p></h5>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div className="root">
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>India's Vaccination Drive</title>
                        <link rel="canonical" href="https://sabarkantha-vaccination-drive.herokuapp.com/" />
                    </Helmet>
                    <div className="header">
                        <h1 className="title">India's Vaccination Drive</h1>
                        <nav className="navbar navbar-light">
                            <div className="container-fluid">
                                <h1 className="navbar-brand">Search by Pincode</h1>
                                <form className="d-flex" onSubmit={(e => {e.preventDefault();setPincode(query)})}>
                                <input className="form-control me-2" type="number" placeholder="Pincode" aria-label="Search" onInput={(e => {setQuery(e.target.value)})}/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </nav>
                    </div>
                    <div>
                        {/* <CustomSelect options={options} label="" onChange={onPincodeChange}/> */}
                    </div>
                    <div className="App">           
                        <div>
                            <ul>
                                {items.map(item => {
                                    return <CardView key={uuidv4()} item={item}/>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            );
        }
    }
    else{
        return(
            <div className="center">
                <Empty />
            </div>
        )
    }
} 

export default Vaccine;