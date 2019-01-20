import React from "react";

const RightArrow = props => {
    return (
        <div className="rightArrow" onClick={props.showNextImage}>
            <i className="far fa-arrow-alt-circle-right fa-x2" />
        </div>
    );
};

export default RightArrow;
