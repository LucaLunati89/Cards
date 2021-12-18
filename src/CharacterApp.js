import React, { useState, useEffect }  from 'react'
import './card.css';

const Card = (props) => {
    console.log('props', props)
    const { image, name, status, species, location, origin, url} = props.character;
    
return(
    <div className = "card">
        <div className="image">
        <img src = {image} alt=""/>
        </div>
        <div className="card-info">
        <h2 className='data'><a href={url}>{name}</a></h2>
        <p className='data'><span>&#9679;</span> {status} - {species}</p>
        <p className='info'>Last know location:</p>
        <p className='data'><a href={location.url}>{location.name}</a></p>
        <p className='info'>First Seen:</p>
        <p className='data'><a href={origin.url}>{origin.name}</a></p>
        </div>
    </div>
)}
    
function CharacterApp() {

    const [ data, setData] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/?page=2').then(res => res.json()).then(body => {
        console.log('body', body);
        setData(body.results)
        })
    }, [])

    return (
        <section className="card-section">
            {
                data.map((el, index) =>(
                    <Card character={el} key={index}/>
                ))
            }
        </section>
    )
}

export default CharacterApp
