import React from "react";
import './LeftArrow.css'

const LeftArrow = props => {
    return (
        <div className="leftArrow" onClick={props.showPrevImage}>
            <i className="far fa-arrow-alt-circle-left fa-2x" />
        </div>
    );
};

export default LeftArrow;
