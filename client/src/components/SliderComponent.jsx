import { UncontrolledCarousel } from 'reactstrap';
import React, { Component } from 'react';
class Slider extends Component {
    render() {
        return (
            <UncontrolledCarousel
                items={[
                    {

                        caption: '',
                        key: 1,
                        src: "https://rukminim2.flixcart.com/fk-p-flap/480/80/image/3af219e83718806b.jpg?q=20"
                    },
                    {
                        caption: '',
                        key: 2,
                        src: "https://rukminim2.flixcart.com/fk-p-flap/480/80/image/9277c7d894d50bef.jpg?q=20"
                    },
                    {
                        caption: '',
                        key: 3,
                        src: "https://rukminim2.flixcart.com/fk-p-flap/480/80/image/5a51a6ffa84d75a7.png?q=20"
                    }
                ]}
            />
        );
    }
};
export default Slider
