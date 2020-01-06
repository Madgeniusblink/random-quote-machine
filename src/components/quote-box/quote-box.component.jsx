import React from 'react'
import {
    CardContainer, 
    ButtonsContainer,
    ShareButton, 
    NewQuoteButton,
    Text,
    Author,
    Title,
} from './quote-box.styles'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faTwitter);

const QuoteBox = ({ quote, author, getRandomQuote, onClickShareWithTwitter, bgColor }) => {
    return (
        <CardContainer color={bgColor}>
            <Title>Post something on Twitter today!</Title>
            <div id="quote-box">
                <Text id="text">{quote}</Text>
                <Author id="author">-{author}</Author>
                <ButtonsContainer>
                    <ShareButton
                        id="tweet-quote"
                        onClick={onClickShareWithTwitter}
                    >
                        <FontAwesomeIcon icon={faTwitter} />
                    </ShareButton>
                    <NewQuoteButton
                        id="new-quote"
                        onClick={getRandomQuote}
                    >
                        New Quote
                    </NewQuoteButton>
                </ButtonsContainer>
                {/* <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(`"${quote}" ${author}`)}`} id="tweet-quote"><FontAwesomeIcon icon={faTwitter} /></a> */}
            </div>
        </CardContainer>
    )
}

export default QuoteBox
