import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
const Detail = (props) => {

    const [pet, setPet] = useState({});
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/" + props.id)
            .then(res => {
                setPet({
                    ...res.data
                })
            })
    }, []);

    const DeletePet = () => {
        axios.delete('http://localhost:8000/api/pets/' + props.id)
            .then((res) => {
                console.log(res.data);
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            });
    }
    
    return (
        <div className="container">
            <div>
                <h1 style={{ display: "inline-block" }}>Pet Shelter</h1>
                <p style={{ display: "inline-block", marginLeft: "40%", verticalAlign: "top", textDecoration: "underline" }}><Link to="/">back to home</Link></p>
            </div>
            <div>
                <h3 style={{ display: "inline-block", marginTop: "10px", marginBottom: "20px" }}>Details about: {pet.name}</h3>
                <button style={{ display: "inline-block", marginLeft: "20%", width: "200px" }} className="delBtn" onClick={DeletePet}>Adopt {pet.name}</button>
            </div>
            <div style={{ borderStyle: "solid", width: "70%", padding: "10px" }}>
                <div>
                <h5 style={{ display: "inline-block" }} >Pet Type: </h5>
                <p style={{ display: "inline-block", marginLeft: "25%", fontWeight: "500" }} >{pet.type}</p>
                </div>
                <h5 style={{ display: "inline-block" }} >Pet Description:</h5>
                <p style={{ display: "inline-block", marginLeft: "15%", fontWeight: "500"  }} >{pet.description}</p>
                <div>
                    <h5 style={{ display: "inline-block" }}>Skills:</h5>
                    <p style={{ display: "inline", marginLeft: "30%", fontWeight: "500"}}>{pet.skills1}<br /><p style={{ marginLeft: "37%" }}>{pet.skills2}</p><p style={{ marginLeft: "37%" }}>{pet.skills3}</p></p>
                </div>
            </div>
        </div>
    )
}

export default Detail;