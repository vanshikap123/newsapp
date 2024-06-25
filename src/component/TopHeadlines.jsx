import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const TopHeadlines = () => {
    const [headlines, setheadlines] = useState([]);

    async function fetchHeadlines(){
        let res = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=ba38c1ee10ce4d1d8fc6ff300745eb86')
        let data = await res.json()
        console.log(data.articles)
        setheadlines(data.articles)
    }
    useEffect(()=>{
        fetchHeadlines()
    },[])
  return (
    <div className='topHeadlinesPage'>
        <ul>

        
      {headlines.map((ele)=>{
        return <li ><Link className='top' to={ele.url} >{ele.title}</Link></li>
      })}
      </ul>
    </div>
  )
}

export default TopHeadlines
