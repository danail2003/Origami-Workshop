import React, { Component } from 'react';
import Origami from '../origami/index';
import styles from './main.module.css';

class Main extends Component {
    constructor(props) {
        super(props);

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
            <main className={styles.main}>
                <h1 className={styles.h1}>Publications</h1>
                <div>
                    {this.renderOrigamis()};
                </div>
            </main>
        )
    }
}

export default Main;