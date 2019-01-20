import React, { Component } from "react";
import unsplash from "../apis/unsplash";
import Image from "./Image";
import RightArrow from "./RightArrow";
import LeftArrow from "./LeftArrow";
import "./Slider.css";

class Slider extends Component {
    state = { images: [] };

    async componentDidMount() {
        const response = await unsplash.get("/search/photos", {
            params: {
                query: "Lions",
                per_page: 8
            }
        });
        const url = response.data.results.map(({ urls }) => {
            return urls.regular;
        });

        this.setState({ images: url });
    }

    render() {
        return (
            <div className="slider">
                <Image />
                <LeftArrow />
                <RightArrow />
            </div>
        );
    }
}

export default Slider;
