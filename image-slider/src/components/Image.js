import React from "react";
import "./Image.css";

const Image = ({ image }) => {
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundSize: "full",
        backgroundRepeat: "no-repeat",
        backgroundPosition: '50% 60%'
    };

    return <div className="image" style={styles} />;
};

export default Image;
