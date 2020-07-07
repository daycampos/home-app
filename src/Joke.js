import React from 'react';
import { useFetch } from './hooks';

function Joke(){
    const jokeApiUrl = 'https://official-joke-api.appspot.com/jokes/random'
    const joke = useFetch(jokeApiUrl, {})

    return(
        <div>
            <h3>Joke of the session</h3>
            <p>{joke.setup}</p>
            <p><em>{joke.punchline}</em></p>
        </div>
    )

}    

export default Joke;