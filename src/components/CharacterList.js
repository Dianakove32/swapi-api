import React, { useEffect, useState } from 'react'
import Spiner from './Spiner'


const url = "http://swapi.dev/api/people/"
const initialState = {
    characters: [],
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


        <div>

            <h2>Character's name </h2>

            {state.characters.map((el, index) => {
                return (
                    <div>

                        <p key={index}> {el.name}</p>
                        <button onClick={() => onClick(el.name)}>Learn more</button>
                    </div>
                )
            })}
        </div>
    )
}
