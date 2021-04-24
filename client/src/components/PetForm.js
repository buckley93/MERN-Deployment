import React, { useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router'
const PetForm = () => {

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skills1, setSkills1] = useState("");
    const [skills2, setSkills2] = useState("");
    const [skills3, setSkills3] = useState("");
    const [errors, setErrors] = useState([]);

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pets', {
            name,
            type,
            description,
            skills1,
            skills2,
            skills3,

        })
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch((err) => {
                const errorResponse = err.response.data.errors;
                const errorArray = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArray.push(errorResponse[key].message)
                }
                setErrors(errorArray);
                console.log("possible error in your submitHandler");
                console.log(err);
            })
    }

    return (
        <div className="container">
            <h1 style={{ display: "inline-block"}}>Pet Shelter</h1>
            <p style={{ display: "inline-block", marginLeft: "40%", verticalAlign: "top", textDecoration: "underline"}}><Link to ="/">back to home</Link></p>
            <div>
                <h3 style={{ marginBottom: "20px"}}>Know a pet needing a home?</h3>
            <form style={{ borderStyle: "solid", width: "70%", padding: "10px" }} onSubmit={onSubmitHandler}>
                {errors.map((error, index) => <p style={{ color: "red" }} key={index}>{error}</p>)}
                <p>
                    <label style={{marginRight: "10px", fontWeight: "bold" }}>Pet Name: </label>
                    <span style={{ marginLeft: "400px", fontWeight: "bold" }}>Skills (optional)</span><br />
                    <input type="text" onChange={(e) => setName(e.target.value)} />
                    <label style={{ marginRight: "10px", marginLeft: "43%", fontWeight: "bold"  }} >Skill 1:</label>
                </p>
                <p>
                    <input style={{ marginLeft: "67%" }} type="text" onChange={(e) => setSkills1(e.target.value)} />
                </p>
                <p>
                    <label className="text-right" style={{ marginRight: "10px", fontWeight: "bold"  }} >Pet Type: </label><br />
                    <input type="text" onChange={(e) => setType(e.target.value)} />
                    <label style={{ marginRight: "10px", marginLeft: "43%", fontWeight: "bold"  }} >Skill 2:</label>
                </p>
                <p>
                    <input style={{ marginLeft: "67%" }} type="text" onChange={(e) => setSkills2(e.target.value)} />
                </p>
                <p>
                    <label style={{ marginRight: "10px", fontWeight: "bold"  }} >Pet Description:</label><br />
                    <input type="text" onChange={(e) => setDescription(e.target.value)} />
                    <label style={{ marginRight: "10px", marginLeft: "43%", fontWeight: "bold"  }} >Skill 3:</label>
                </p>
                <p>
                    <input style={{ marginLeft: "67%"}} type="text" onChange={(e) => setSkills3(e.target.value)} />
                </p>
                    <input className="subBtn" type="submit" value="Add Pet"></input>
            </form>
            </div>
        </div>
    )
}

export default PetForm;