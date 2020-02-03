import React from 'react';

class Post extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.texto}</p>
            </div>

        )
    }
}

export default Post;