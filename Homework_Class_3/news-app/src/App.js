import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Card from './Card';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoadingItems: false,
    };
  }

  componentDidMount() {
    fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=002cc7173b8146a59e1fc098d1ca4fd3")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          items: res,
          isLoadingItems: "true"
        });
      })
  }

  render() {
    const { isLoadingItems, items } = this.state;
    if (!isLoadingItems) return <div>Loading...</div>;
    // console.log("this: ", this);
    // console.log("this.state: ", this.state);
    // console.log("this.state.items: ", this.state.items);
    // console.log("this.state.items.articles: ", this.state.items.articles);
    // console.log("this.state.items.articles: ", this.state.items.articles[1].title);
    // console.log("this.state.items.articles: ", this.state.items.articles[1].source.id);

    return (
      <div>
        <div className='row .container'>
          {this.state.items.articles.map((item) => (
            <div className='card col-4' key={item.source.id}>
              <Card item={item} />
              {/* <Title title={`${item.title}`}/> */}
              {/* {console.log(item.source.id)} */}
              {/* <img src='{item.urlToImage}'></img> */}
              {/* <p>{this.state.items.articles[1].title}</p> */}
            </div>
          ))}




          {/* <p>{this.state.items.articles[1].title}</p>
          <img src='$'></img> */}

        </div>

      </div>);
  }
}

export default App;
