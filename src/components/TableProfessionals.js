import React from 'react';

class TableProfessionals extends React.Component {
    render() {
        return (
            <div>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Github</th>
                        </tr>                    
                    </thead>
                    
                    <tbody>
                        {this.props.data.map((professional) => {
                            return(
                                <tr key={professional.id}>
                                    <td>{professional.name}</td>
                                    <td>{professional.github}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                    
                </table>
                 
            </div>
            
        )
    }
}

export default TableProfessionals;