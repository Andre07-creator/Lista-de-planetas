import React, { useEffect, useState } from "react";
import Gray_img from "../../shared/Gray-img";
import DescritpionWithlink from "../../shared/DescriptionWithLink";
import Form from "./form"

async function getSatellites(id) {
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
const Planet = (props) => {
    const [satellites, setSatellites] = useState([])
    
    useEffect(() => {
        getSatellites(props.id).then(data => {
            setSatellites(data['satellites'])
        })
    }, [])
    const addSatellite = (new_satellite) => {
        setSatellites([...satellites, new_satellite])

    }
    let title;
    if (props.title_with_underline) {
        title = <h3><u>{props.name}</u></h3>
    } else {
        title = <h3>{props.name}</h3>
    }
    return (
        <div>
            {title}
            <DescritpionWithlink description={props.description} link={props.link} />
            <Gray_img img_url={props.img_url} gray={props.gray} />

            <h4>Satelites</h4>
            <hr/>
            <Form addSatellite={addSatellite}/>
            <hr/>
            <ul>
                {satellites.map((satellites, index) =>

                    <li key={index}>
                        {satellites.name}
                    </li>
                )}
            </ul>
        </div>
    )

}
export default Planet