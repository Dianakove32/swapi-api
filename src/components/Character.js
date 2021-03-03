import React, {useEffect, useState} from 'react'
import { Link, BrowserRouter as Router, useParams } from 'react-router-dom'
import Spiner from './Spiner'

export default function Character(props) {
    const [oneName, setoneName] = useState(null)
      const {height}=useParams()
      const url = "https://swapi.dev/api/people/"
      useEffect(() => {
        getName()
    }, [])

    const getName = () => {
        fetch(url)
            .then(res =>  res.json())
            .then(data => setoneName(data.results.find(item=> item.height==height) ))
    }
    if(!oneName){
        return <Spiner/>
    }
    console.log(oneName, 'hei')
     return (
         <div className="caracter-card">

 <Link className="link" to="/characterList">Go back</Link>

 <h2><b>Name: </b>{oneName.name}</h2>
 <p><b>Birth_year: </b>{oneName.birth_year}</p>
 <p><b>Gender: </b>{oneName.gender}</p>
 <p><b>Hair_color: </b>{oneName.hair_color}</p>
 <p><b>Mass: </b>{oneName.mass}</p>
 <p><b>url: </b>{oneName.url}</p>
         </div>
     )
 }
