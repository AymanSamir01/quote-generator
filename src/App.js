import "./App.css";
import {
  WhatsappIcon,
  WhatsappShareButton,
  TwitterIcon,
  TwitterShareButton,
  FacebookIcon,
  FacebookShareButton,
} from "react-share";
import React, { useState } from "react";

const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber",
  };
  const [quote, setQuote] = useState(quoteData);

  const generateQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuote(data);
      });
  };

  const copy = () => {
    navigator.clipboard.writeText(
      quote.author + " once said: " + quote.content
    );
    alert("copied");
  };

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">
            Copy
          </button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
        <FacebookShareButton
          url={`https://api.quotable.io/quotes/${quote._id}`}
          quote={quote.content}
          hashtag={"#" + quote.author}
          title={quote.author + " once said: " + quote.content}
        >
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <WhatsappShareButton
          url={`https://api.quotable.io/quotes/${quote._id}`}
          quote={quote.content}
          hashtag={"#" + quote.author}
          title={quote.author + " once said: " + quote.content}
        >
          <WhatsappIcon
            size={32}
            round={true}
            style={{ marginInline: "15px" }}
          />
        </WhatsappShareButton>
        <TwitterShareButton
          url={`https://api.quotable.io/quotes/${quote._id}`}
          quote={quote.content}
          hashtag={"#" + quote.author}
          title={quote.author + " once said: " + quote.content}
        >
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
      </div>
    </>
  );
};

export default App;
