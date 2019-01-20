import React from "react";
import "./Image.css";

const Image = ({ image }) => {
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPostion: "50% 60%"
    };

    return <div className="image" style={styles} />;
};

export default Image;
