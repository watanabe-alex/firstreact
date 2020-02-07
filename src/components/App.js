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
                    id: 1,
                    name: "Wagner Venceslau",
                    github: "http://github.io/wagven"
                },
                {
                    id: 2,
                    name: "Eduardo Rocha",
                    github: "http://github.io/eduroc"
                }
            ]
        }

    }

    render() {
        return (
            <div className="container my-5">
                <h2>FIRST REACT - APP PROFESSIONALS</h2>
                <br/>
                {/* <Post texto="Olá, Mundo do compoment" title="Isso é um componente"/> */}
                <TableProfessionals data={this.state.professionals}/>
                <br/>
                <Form />
            </div>
        )
    }
}

export default App;