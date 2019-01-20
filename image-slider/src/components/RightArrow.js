import React from "react";
import './RightArrow.css'

const RightArrow = props => {
    return (
        <div className="rightArrow" onClick={props.showNextImage}>
            <i className="far fa-arrow-alt-circle-right fa-2x aria-hidden" />
        </div>
    );
};

export default RightArrow;
