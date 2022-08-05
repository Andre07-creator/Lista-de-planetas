import React, { Fragment, useState, useEffect } from "react";
import Planet from "./Planet"
import Form from "./form";

async function getPlanets() {
    let response = await fetch('http://localhost:3000/api/planets.json')
    let data = await response.json()
    return data
}

//componentDidMount() {
// getPlanets().then(data => {
//     this.setState(state => ({
// planets: data['planets']
// }))
// })
//}
const Planets = () => {
    const [planets, setPlanets] = useState([])

    
    const removeLast = () => {
        let rLast = [...planets]
        rLast.pop()
        setPlanets(rLast)
    }
    const duplicateLast = () => {
        let dLast = planets[planets.length - 1]
        setPlanets([...planets, dLast])
    }
    useEffect(() => {
        getPlanets().then(data => {
            setPlanets(data['planets'])
        })
    }, [])

    const addPlanet = (new_planet)=>{
         setPlanets([...planets, new_planet])
    }
    return (<Fragment>
        <h1>Planet List</h1>
        <Form addPlanet ={addPlanet}/>
        <button onClick={removeLast}>Remover o ultimo</button>
        <button onClick={duplicateLast}>Duplicar ultimo</button>
        {planets.map((planets, index) =>
            <Planet
                id={planets.id}
                name={planets.name}
                description={planets.description}
                img_url={planets.img_url}
                link={planets.link}
                key={index}
            /*ClickOnPlanet={ClickOnPlanet}
            title_with_underline={true}
            gray={true}*/
            />)}

    </Fragment>)
}

export default Planets