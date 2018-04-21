import React from 'react';

const Home = () => {
    return (
        <div>
            <div>I am the home component</div>
            <button onClick={() => console.log("HI THIS WON'T WORK")} >Press me!</button>
        </div>
    )
}

export default {
    component: Home
};