import React from 'react';
import Post from './Post';
import TableProfessionals from './TableProfessionals';
import Form from './Form';

class App extends React.Component {

    constructor(props){
        super(props)

        this.state = {

            professionals: [
                {
                    name: "Wagner Venceslau",
                    github: "http://github.io/wagven"
                },
                {
                    name: "Eduardo Rocha",
                    github: "http://github.io/eduroc"
                }
            ]
        }

    }

    render() {
        return (
            <div className="container">
                <h2>HELLO WORLD!</h2>
                <Post texto="Olá, Mundo do compoment" title="Isso é um componente"/>
                <br/>
                <br/>
                <br/>
                <TableProfessionals professionals={this.state.professionals}/>
                <br/>
                <br/>
                <br/>
                <Form />
            </div>
        )
    }
}

export default App;