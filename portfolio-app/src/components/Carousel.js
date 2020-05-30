import React from "react";

import Card from '../components/Card'

import vikingcoin from "../assets/images/vikingcoin.png"
import uwp from "../assets/images/uwp.png"
import blockland from "../assets/images/blockland.png"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'VikingCoin',
                    subTitle: 'The cryptocurrency for schools',
                    imgSrc: vikingcoin,
                    link: 'https://github.com/Raymondriter/vikingcoin',
                    selected: false
                },
                {
                    id: 1,
                    title: 'MLA format UWP App',
                    subTitle: 'App for automatically filling MLA format',
                    imgSrc: uwp,
                    link: 'https://docs.microsoft.com/en-us/windows/uwp/get-started/universal-application-platform-guide',
                    selected: false
                },
                {
                    id: 2,
                    title: 'BlockLand 2019 Volunteer',
                    subTitle: 'Aided visitors with tech support issues',
                    imgSrc: blockland,
                    link: 'https://www.blocklandsolutions.com/',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = !items[id].selected;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
        })
    }


    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;