import React, { Component } from "react";
import unsplash from "../apis/unsplash";
import Image from "./Image";
import RightArrow from "./RightArrow";
import LeftArrow from "./LeftArrow";
import "./Slider.css";

class Slider extends Component {
    state = { images: [], currentIndex: 0 };

    async componentDidMount() {
        const response = await unsplash.get("/search/photos", {
            params: {
                query: "northern lights",
                per_page: 8,
                orientation: "landscape"
            }
        });
        const url = response.data.results.map(({ urls }) => {
            return urls.regular;
        });

        this.setState({ images: url });
    }

    showNextImage = () => {
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1
        }));
    };

    showPrevImage = () => {
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1
        }));
    };

    render() {
        return (
            <div className="slider">
                {this.state.images.map((image, i) => (
                    <Image image={image} key={i} />
                ))}
                <LeftArrow showNextImage={this.showNextImage} />
                <RightArrow showPrevImage={this.showPrevImage} />
            </div>
        );
    }
}

export default Slider;
