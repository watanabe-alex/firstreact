import React from 'react';

export default class Form extends React.Component {
    render() {
        return (
            <form action="">
                <label>Nome:</label>
                <input type="text" name="name" placeholder="nome"/>
                <br/>
                <label>Github:</label>
                <input type="url" name="github" placeholder="github"/>
                <br/>
                <button type="submit">Enviar</button>
            </form>
        )
    }
}