import React, { useEffect, useState } from 'react'
import Spiner from './Spiner'
import Weather from './Weather'
import '../App.scss'


const url = "https://swapi.dev/api/people/"
const initialState = {
    characters: null,
    randomCharacter: null
}

export default function CharacterList(props) {
    const [state, setState] = useState(initialState)
    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setState({
                    ...state,
                    characters: data.results
                })
            })
    }

    const onClick = (height) => {
        const pickedMovie = state.characters.find(el => el.height == height)
        setState({
            ...state,
            randomCharacter: pickedMovie
        })
        console.log(state.randomCharacter)
        props.history.push({
            pathname: `/characterList/${height}`,
            state: {
                randomCharacter: pickedMovie
            }
        })
    }

    if (!state.characters) {
        return <Spiner />
    }

    return (


        <div className='wrapper'>
            <Weather />
            <h2>Character's name </h2> <div className='content'>
                {!state.characters ? <Spiner /> : (state.characters.map((el, index) => {
                    console.log(el.height)
                    return (

                        <div className='card-name'>

                            <p key={index}> {el.name}</p>
                            <p key={index}> {el.height}</p>
                            <button className='button' onClick={() => onClick(el.height)}>Learn more</button>
                        </div>


                    )
                }))} </div>

        </div>
    )
}
