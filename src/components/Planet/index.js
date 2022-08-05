import React, { useEffect, useState } from "react";
import Gray_img from "../shared/Gray-img";
import DescritpionWithlink from "../shared/DescriptionWithLink";
import Form from "./form"
import { useParams, useNavigate } from 'react-router-dom'

async function getPlanet(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = await response.json()
    return data
}
//componentDidMount(){
//  getSatellites(this.props.id).then(data =>{
//    this.setState(state =>({
//      satellites: data['satellites']
//}))
//})
//}
const Planet = () => {
    const [satellites, setSatellites] = useState([])
    const [planet, setPlanet] = useState({})
    const [redirect, setRedirect] = useState(false)
    let { id } = useParams()
    let navigate = useNavigate()
    useEffect(() => {
        getPlanet(id).then(data => {
            setSatellites(data['satellites'])
            setPlanet(data['data'])
        }, error => {
            setRedirect(true)
        })
    }, [])
    const backToHome = () => {
        navigate('/')
    }
    const addSatellite = (new_satellite) => {
        setSatellites([...satellites, new_satellite])

    }
    let title;
    if (planet.title_with_underline) {
        title = <h3><u>{planet.name}</u></h3>
    } else {
        title = <h3>{planet.name}</h3>
    }
    if(redirect){
        return navigate('/')
        ///implementar o not found agora
    }
    return (
        <div>
            {title}
            <DescritpionWithlink description={planet.description} link={planet.link} />
            <Gray_img img_url={planet.img_url} gray={planet.gray} />

            <h4>Satelites</h4>
            <hr />
            <Form addSatellite={addSatellite} />
            <hr />
            <ul>
                {satellites.map((satellites, index) =>

                    <li key={index}>
                        {satellites.name}
                    </li>
                )}
            </ul>
            <button type="button" onClick={backToHome}>Voltar para o inicio</button>
            <br />
        </div>
    )

}
export default Planet