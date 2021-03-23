import './Cover.scss'
import { ReactComponent as RocketOrbit } from './rocket.svg'
import React from 'react';

export default function Cover() {
    return (
        <React.Fragment>
            <div className="presentation">
                <p>Hi, nice to meet you, my name is </p>
                <h1 className="name">Mateus Dutra Dadalto</h1>
                <p>I'm a software engineer based in Belo<br />Horizonte, Brazil</p>
            </div>
            <div className="rocket">
                <RocketOrbit width='100%'></RocketOrbit>
            </div>
        </React.Fragment>
    );
}