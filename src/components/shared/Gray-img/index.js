import React, { Fragment } from "react";
import './Style.css'
const Gray_img = (props) => {
    return <img className={props.gray ? 'Gray-scale' : 'Color-img'} src={props.img_url} />
}
export default Gray_img