import React from 'react';
import { useFetch } from './hooks';

function Stories(){
    const storiesApiUrl = 'https://news-proxy-server.appspot.com/topstories';
    const topStories = useFetch(storiesApiUrl, [])
   
    const showStory = content =>{
        const {id, by, time, title, url} = content;
        return(
            <div key={id}>
                <a href={url}>{title}</a>
                <div>{by} - {new Date(time *1000).toLocaleString()}</div>
            </div>
        )
    }
    return(
        <div className='Stories'>
            <h3>Top 10 Stories on HackerNews right now</h3>
            {topStories.map(story => showStory(story))}
        </div>
    )
}

export default Stories;