import { Link } from '@reach/router';

const PetList = (props) => {
    
    return( 
        <div className="container">
            <div>
                <h1 style={{ display: "inline-block"}}>Pet Shelter</h1>
            <p style={{ display: "inline-block", marginLeft: "50%", verticalAlign: "top", textDecoration: "underline"}}><Link to ="/new">Add a pet to the shelter</Link></p>
            <h4 style={{ marginTop: "10px", marginBottom: "20px"}}>These pets are looking for a good home</h4>
            </div>
            <table className="table table-bordered table-hover" style={{ width: "90%", border: "solid black" }}>
                <thead>
                    <tr>
                        <th style={{ border: "solid black" }} >Name</th>
                        <th style={{ border: "solid black" }} >Type</th>
                        <th style={{ border: "solid black" }} >Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.pets.map((pet, index)=>{
                        return <tr key={index}>
                            <td style={{ fontWeight: "600",  border: "solid black" }} >{pet.name}</td>
                            <td style={{ fontWeight: "600",  border: "solid black" }} >{pet.type}</td>
                            <td style={{ fontWeight: "600",  border: "solid black" }} ><Link to={`/pets/${pet._id}`}>details</Link> | <Link to={`/pets/${pet._id}/edit`}>edit</Link></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default PetList;