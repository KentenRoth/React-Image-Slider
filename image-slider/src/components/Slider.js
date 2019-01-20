import React, { Component } from "react";
import unsplash from "../apis/unsplash";
import Image from "./Image";
import RightArrow from "./RightArrow";
import LeftArrow from "./LeftArrow";
import "./Slider.css";

class Slider extends Component {
    state = { images: [], currentIndex: 0, translateValue: 0 };

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
        if (this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }));
    }

    showPrevImage = () => {
        if (this.state.currentIndex === 0)
            return this.setState({
                currentIndex: 7,
                translateValue: -9555
            })

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + this.slideWidth()
        }))
    };

    slideWidth = () => {
        return document.querySelector('.image').clientWidth
    }

    render() {
        return (
            <div className="slider">
                <div className='image-wrapper'
                    style={{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: 'transform ease-out 0.45s'
                    }}>
                    {
                        this.state.images.map((image, i) => {
                            return (
                                <Image image={image} key={i} />
                            )
                        })
                    }
                </div>
                <RightArrow showNextImage={this.showNextImage} />
                <LeftArrow showPrevImage={this.showPrevImage} />
            </div>
        );
    }
}

export default Slider;
