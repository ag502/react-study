import React from 'react';
import logo from './logo.svg';
import Comment from "./Comment";

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placeKitten.com/g/64/64'
    }
}

function App() {
  return (
    <div className="App">
      <Comment
          date={comment.date}
          text={comment.text}
          author={comment.author}
      />
    </div>
  );
}

export default App;
