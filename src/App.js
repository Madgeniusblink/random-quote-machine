import React, { Component } from 'react'
import axios from 'axios'
import QuoteBox from './components/quote-box/quote-box.component'
import LoadingSpinner from './components/loading-spinner/loading-spinner.component'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      quote: '',
      author: '',
      isLoading: true,
      error: null
    }
  }
  dataFetching = null;
  getData = () => {
    axios
      .get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
      .then(response => {
        let randomQuote = response.data.quotes[Math.floor(Math.random() * response.data.quotes.length)]
        return this.setState({
          data: response.data.quotes,
          author: randomQuote.author,
          quote: randomQuote.quote,
          isLoading: false,
        })
      }).catch(error => this.setState({ 
        error, 
        isLoading: false,
      }))
  }

  
  componentDidMount() {
    this.dataFetching = this.getData();
  }

  componentWillUnmount() {
    this.dataFetching()
  }

  getRandomQuote = (event) => {
    event.preventDefault();
    let randomQuote = this.state.data[Math.floor(Math.random() * this.state.data.length)]
    this.setState({
      quote: randomQuote.quote,
      author: randomQuote.author
    }) 
    
  }

  onClickShareWithTwitter = (event) => {
    event.preventDefault();
    const openURL = (url) => window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
    const inIframe = () => { 
      try { 
        return window.self !== window.top; 
      } catch (e) { 
        return true; 
      } 
    }
    if(!inIframe()) {
      return openURL(`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(`"${this.state.quote}" ${this.state.author}`)}`);
    }
  }
  
  render() {
    const { quote, author, isLoading } = this.state
    return (
      <div>
        <h1>Post something on Twitter today!</h1>
        {
          !isLoading ? (
            <QuoteBox 
            quote={quote}
            author={author}
            getRandomQuote={this.getRandomQuote}
            onClickShareWithTwitter={this.onClickShareWithTwitter}
          />
          ) : (
            <LoadingSpinner />
          )
        }
      </div>
    )
  }
}


export default App;



