import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Post from './components/post';

ReactDOM.render(
    <div className="container">
        <div className="card card-default">
            <div className="card-header">
                <h1 className="card-title">Hellow, world</h1>
            </div>
            <Post texto="Olá, Mundo" title="Primeiro"/>
            <Post texto="Eu sou o segundo Post" title="Segundo"/>
            <Post texto="Eu sou o último Post" title="Terceiro"/>
        </div>
    </div>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
