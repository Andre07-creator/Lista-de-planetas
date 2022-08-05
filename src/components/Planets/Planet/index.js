import React, { useEffect, useState } from "react";
import Gray_img from "../../shared/Gray-img";
import DescritpionWithlink from "../../shared/DescriptionWithLink";
import {Link} from 'react-router-dom'
//componentDidMount(){
//  getSatellites(this.props.id).then(data =>{
//    this.setState(state =>({
//      satellites: data['satellites']
//}))
//})
//}
const Planet = (props) => {
    
    let title;
    if (props.title_with_underline) {
        title = <h3><u>{props.name}</u></h3>
    } else {
        title = <h3>{props.name}</h3>
    }
    return (
        <div>
            <Link to={`/planet/${props.id}`}>{title}</Link>
            <DescritpionWithlink description={props.description} link={props.link} />
            <Gray_img img_url={props.img_url} gray={props.gray} />
        </div>
    )

}
export default Planet