import React, { Component } from 'react';
import Origami from '../components/origami';

class Origamis extends Component {
    constructor(props) {
        super(props)

        this.state = {
            origamis: []
        };
    }

    getOrigamis = async () => {
        const promise = await fetch('http://localhost:9999/api/origami');
        const origamis = await promise.json();

        this.setState({
            origamis
        });
    }

    renderOrigamis() {
        const { origamis } = this.state;

        return origamis.map((origami, index) => {
            return (
                <Origami key={origami._id} index={index + 1} {...origami} />
            )
        })
    }

    componentDidMount() {
        this.getOrigamis();
    }

    render() {
        return (
            <div>
                {this.renderOrigamis()}
            </div>
        )
    }
}

export default Origamis;