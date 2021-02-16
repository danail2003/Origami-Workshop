import React, { useState, useEffect, useContext, useCallback, useMemo } from 'react';
import Origami from '../components/origami';
import UserContext from '../context';

const Origamis = (props) => {
    const context = useContext(UserContext);
    const [origamis, setOrigamis] = useState(context.origamis || []);

    const getOrigami = async () => {
        const { length } = props;
        const promise = await fetch(`http://localhost:9999/api/origami?length=${length}`);
        const response = await promise.json();

        return response;
    }

    const getOrigamis = useCallback(async () => {
        const origamis = await getOrigami(props.length);
        setOrigamis(origamis);
    }, [props.lengt]);

    const renderOrigamis = useMemo(() => {
        return origamis.map((origami, index) => {
            return (
                <Origami key={origami._id} index={index + 1} {...origami} />
            )
        })
    }, [origamis]);

    useEffect(() => {
        getOrigamis();
    }, [props, getOrigamis]);

    return (
        <div>
            {renderOrigamis}
        </div>
    )
};

export default Origamis;