import React, { Component } from 'react';

class Title extends Component {
    render() {
        // console.log(this.props.title);
        // console.log(this.state.items.articles.title);
        return (
            <div>
                <h6 className='card-title'>{this.props.title}</h6>
            </div>
        );
    }
}

export default Title;