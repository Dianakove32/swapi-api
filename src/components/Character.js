import React from 'react'
import { Link } from 'react-router-dom'

export default function Character(props) {
     console.log( 'xzdcgxfh')

     return (
         <div>

 <Link to="/characterList">Go back</Link>

 <h2><b>Name: </b>{props.location.state?.randomCharacter.name}</h2>
 <p><b>Birth_year: </b>{props.location.state?.randomCharacter.birth_year}</p>
 <p><b>Gender: </b>{props.location.state?.randomCharacter.gender}</p>
 <p><b>Hair_color: </b>{props.location.state?.randomCharacter.hair_color}</p>
 <p><b>Mass: </b>{props.location.state?.randomCharacter.mass}</p>
 <p><b>url: </b>{props.location.state?.randomCharacter.url}</p>
         </div>
     )
 }
