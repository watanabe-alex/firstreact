import React from 'react';

export default class Form extends React.Component {
    render() {
        return (
            <div className="border">
                <form className="m-3">
                    <h3 className="mb-2">FORMULÁRIO</h3>
                    <div className="form-group">
                        <label>Nome:</label>
                        <input type="text" name="name" placeholder="nome"/>
                    </div>
                    <div className="form-group">
                        <label>Github:</label>
                        <input type="url" name="github" placeholder="github"/>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        )
    }
}