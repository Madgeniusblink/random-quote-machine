import styled from 'styled-components';



export const CardContainer = styled.article`
    text-align: center;
    width: 80vw;
    margin: 0 auto;
    border-radius: 30px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    padding: 2% 5%;
    background-color: ${props => props.color};

`
export const Text = styled.p`
    text-align: center;
    font-style: italic;
`
export const Author = styled.p`
        text-align: right;
        padding: 2% 5%;
        font-size: 14px;
`

export const Title = styled.h1`
    font-weight: 400;
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 2% 5%;
`

export const Button = styled.button`
  width: 80px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  background-color: #6c5ce7;
  color: #dfe6e9;
  margin-bottom: 20px;
  font-size: 12px;
  :hover {
        background-color: #dfe6e9;
        color: #6c5ce7;
        border: 1px solid #dfe6e9;
        cursor: pointer;
    }
`

export const ShareButton = styled(Button)`


`

export const NewQuoteButton = styled(Button)`
    
`
