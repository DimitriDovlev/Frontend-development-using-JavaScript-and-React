import React, { Component } from 'react';
import Title from './Title';

class Card extends Component {
    render() {
        // console.log(this);
        // console.log(this.props.item);
        // console.log(this.props.item.urlToImage);
        return (
            <div className='' style={{ width: '15rem' }}>
                <img className='card-img-top' src={this.props.item.urlToImage} width={150} height={150} alt="article_image" />
                <div className='card-body'>
                    <Title title={`${this.props.item.title}`} />
                    <p className='card-text'>{this.props.item.description}</p>
                    <p className='card-text'>Published at: {this.props.item.publishedAt}</p>
                </div>
            </div>
        );
    }
}

export default Card;