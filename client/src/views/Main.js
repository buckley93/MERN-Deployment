import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PetList from '../components/PetList';
const Main = () => {

    const [pets, setPets] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
            .then(res=>{
                setPets(res.data);
                setLoaded(true);
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);
    return(
        <div>
            {loaded && <PetList pets={pets}/>}
        </div>
    )
}

export default Main;