import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faTwitter);

const QuoteBox = ({ quote, author, getRandomQuote, onClickShareWithTwitter }) => {
    return (
        <div id="quote-box">
            <h2 id="text">{quote}</h2>
            <p id="author">{author}</p>
            <button
                id="new-quote"
                onClick={getRandomQuote}
            >
                New Quote
             </button>
            {/* <button
                id="tweet-quote"
                onClick={onClickShareWithTwitter}
            >
                <FontAwesomeIcon icon={faTwitter} />
            </button> */}
            
            <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(`"${quote}" ${author}`)}`} id="tweet-quote"><FontAwesomeIcon icon={faTwitter} /></a>
        </div>
    )
}

export default QuoteBox
