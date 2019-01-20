import React from "react";

const LeftArrow = props => {
    return (
        <div className="leftArrow" onClick={props.showPrevImage}>
            <i className="far fa-arrow-alt-circle-left fa-x2" />
        </div>
    );
};

export default LeftArrow;
