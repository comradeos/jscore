import React from "react";
import './Another.css';
import {useState, useEffect} from "react";

export default function Another(props: any) {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    // debugger;
    useEffect(() => {

        return () => {
            console.log('Component unmounted');
        };
    }, []);

    return (
        <div className={'anotherBox'}>
            <div>{value1}</div>
            <div>{value2}</div>
            <button onClick={onClickHandler}>Click</button>
        </div>
    );

    function randomValue() {
        return Math.floor(Math.random() * 100);
    }

    function onClickHandler() {
        setValue1(randomValue());
        setValue2(randomValue());
    }

}