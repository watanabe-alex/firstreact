import React from 'react';

class TableProfessionals extends React.Component {
    render() {
        return (
            <div>
                <h2>Eu sou uma tabela</h2>
                {this.props.professionals.map((professional) => {
                    return(
                        <div>
                            <p>{professional.name}</p>
                            <p>{professional.github}</p>
                        </div>
                    )
                })}
            </div>
            
        )
    }
}

export default TableProfessionals;