import React, { useEffect, useState } from 'react'
import Spiner from './Spiner'
import Weather from './Weather'
import '../App.scss'


const url = "https://swapi.dev/api/people/"
const initialState = {
    characters: null,
    randomCharacter: {}
}

export default function CharacterList(props) {
    const [state, setState] = useState(initialState)
    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        fetch(url)
            .then(res =>  res.json())
            .then(data => {
                setState({
                    ...state,
                    characters: data.results
                })
            })
    }

    const onClick = (name1) => {
        const pickedMovie = state.characters.find(el => el.name == name1)
        setState({
            ...state,
            randomCharacter: pickedMovie
        })

        props.history.push({
            pathname: '/character',
            state: {
                randomCharacter: pickedMovie
            }
        })
    }

    if(!state.characters){
        return <Spiner/>
    }

    return (


        <div className='wrapper'>
<Weather/>
            <h2>Character's name </h2> <div className='content'>
{!state.characters ? <Spiner/> : (state.characters.map((el, index) => {
                return (

                          <div className='card-name'>

                        <p key={index}> {el.name}</p>
                        <button className='button' onClick={() => onClick(el.name)}>Learn more</button>
                    </div>


                )
            }))} </div>

        </div>
    )
}
