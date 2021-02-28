import { useState } from "react";
import "./styles.css";

var headingText = "Emoji Interpreter";
var fruitDictionary = {
  "🍓": "Strawberry",
  "🍏": "Green Apple",
  "🥝": "Kiwi Fruit",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍍": "Pineapple",
  "🥑": "Avocado"
};

var emojList = Object.keys(fruitDictionary);

export default function App() {
  var [meaning, setmeaning] = useState("");

  function inputChangeHandler(event) {
    var input = event.target.value;
    var meaning = fruitDictionary[input];

    if (meaning === undefined) {
      meaning = "This is not in database!";
    }
    setmeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = fruitDictionary[emoji];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1>{headingText}</h1>
      <input onChange={inputChangeHandler}></input>
      <h3 style={{ color: "green" }}>{meaning}</h3>
      <h4>Click on Emoji to find the meaning</h4>
      {emojList.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "large",
              padding: "0.5rem 0.5rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
