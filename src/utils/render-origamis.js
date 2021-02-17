import React, { useState, useEffect, useCallback } from 'react';
import Origami from '../components/origami';

const Origamis = (props) => {
    const [origamis, setOrigamis] = useState([]);

    const getOrigamis = useCallback(async () => {
        const promise = await fetch(`http://localhost:9999/api/origami?length=${props.length}`);
        const origamis = await promise.json();

        setOrigamis(origamis);
    }, [props.length])

    const renderOrigamis = () => {
        return origamis.map((origami, index) => {
            return (
                <Origami key={origami._id} index={index + 1} {...origami} />
            )
        })
    };

    useEffect(() => {
        getOrigamis();
    }, [getOrigamis]);

    return (
        <div>
            {renderOrigamis()}
        </div>
    )
};

export default Origamis;