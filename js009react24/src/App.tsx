import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WayToTeach from './components/WayToTeach';
import Button from './components/Button';
import {useState} from "react";

import './App.css';

const data = [
    {
        title: 'React',
        description: 'A JavaScript library for building user interfaces'
    },
    {
        title: 'Redux',
        description: 'A Predictable State Container for JS Apps'
    },
    {
        title: 'Jest',
        description: 'Delightful JavaScript Testing'
    }
];


function App() {
    const [content, setContent] = useState('title');

    function handleClick(data: any, type: string) {
        console.log('Button clicked', type);
        setContent(data[0][type]);
    }

    return (
        <div>
            <Header/>

            <h1>Hello, World!</h1>

            <ul>
                {data.map((item, index) => (
                    <WayToTeach key={index} {...item}/>
                ))}
            </ul>

            <Button click={() => {
                handleClick(data, 'title');
            }}>title</Button>


            <Button click={() => {
                handleClick(data, 'description');
            }}>description</Button>

            <p>{content}</p>

            <Footer/>
        </div>
    );
}

export default App;
