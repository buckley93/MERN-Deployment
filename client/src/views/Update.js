import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router'

const Update = (props) => {

    const { id } = props;
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skills1, setSkills1] = useState("");
    const [skills2, setSkills2] = useState("");
    const [skills3, setSkills3] = useState("");
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/' + id)
            .then(res => {
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkills1(res.data.skills1);
                setSkills2(res.data.skills2);
                setSkills3(res.data.skills3);

            })
        }, []);

        const UpdatePet = (e) => {
            e.preventDefault();
            axios.put('http://localhost:8000/api/pets/' + id, {
                name,
                type,
                description,
                skills1,
                skills2,
                skills3
            })
                .then(res => {
                    console.log("in the UpdatePet in Update.js");
                    console.log(res);
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
        return(
            <div className="container">
                <div>
                <h1 style={{ display: "inline-block" }}>Pet Shelter</h1>
                <p style={{ display: "inline-block", marginLeft: "43%", verticalAlign: "top", textDecoration: "underline" }}><Link to="/">back to home</Link></p>
                <h3 style={{ marginTop: "10px", marginBottom: "20px"}}>Edit {name}</h3>
            </div>
                <form style={{ borderStyle: "solid", width: "70%", padding: "10px" }} onSubmit={UpdatePet}>
                {errors.map((error, index) => <p style={{ color: "red" }} key={index}>{error}</p>)}
                <p>
                    <label style={{ marginRight: "10px", fontWeight: "bold" }}>Pet Name: </label><span style={{ marginLeft: "52%" }}>Skills (optional)</span><br />
                    <input type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                    <label style={{ marginRight: "10px", marginLeft: "67%", fontWeight: "bold"  }} >Skill 1:</label>
                </p>
                <p>
                    <input style={{ marginLeft: "67%" }} type="text"
                    name="skills1"
                    value={skills1}
                    onChange={(e) => setSkills1(e.target.value)} />
                </p>
                <p>
                    <label className="text-right" style={{ marginRight: "10px", fontWeight: "bold"  }} >Pet Type: </label><br />
                    <input type="text" 
                    name="type"
                    value={type}
                    onChange={(e) => setType(e.target.value)} />
                    <label style={{ marginRight: "10px", marginLeft: "67%", fontWeight: "bold"  }} >Skill 2:</label>
                </p>
                <p>
                    <input style={{ marginLeft: "67%" }} type="text"
                    name="skills2"
                    value={skills2}
                    onChange={(e) => setSkills2(e.target.value)} />
                </p>
                <p>
                    <label style={{ marginRight: "10px", fontWeight: "bold"  }} >Pet Description:</label><br />
                    <input type="text" 
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} />
                    <label style={{ marginRight: "10px", marginLeft: "67%", fontWeight: "bold"  }} >Skill 3:</label>
                </p>
                <p>
                    <input style={{ marginLeft: "67%"}} type="text"
                    name="skills3"
                    value={skills3}
                    onChange={(e) => setSkills3(e.target.value)} />
                </p>
                    <input className="subBtn" type="submit" value="Add Pet"></input>
                </form>
            </div>
        )
            
    }

    export default Update;