import React, { useState } from 'react';
import TweetInput from './TweetInput';
import LeadDetails from './LeadDetails';

const App = () => {
  const [tweets, setTweets] = useState([]); // Mantenemos una lista de tweets

  const addTweet = (tweetText) => {
    const newTweet = {
      id: Date.now(),
      text: tweetText,
      likes: 0,
      comments: [],
    };
    setTweets((prevTweets) => [newTweet, ...prevTweets]); // Agrega el nuevo tweet al inicio de la lista
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <header className="bg-gray-900 p-4">
        <h1 className="text-xl font-bold">Twitter Clone</h1>
      </header>
      <TweetInput addTweet={addTweet} />

      {/* Renderiza todos los tweets existentes */}
      {tweets.map((tweet) => (
        <LeadDetails key={tweet.id} tweet={tweet} /> // Muestra cada tweet usando LeadDetails
      ))}
    </div>
  );
};

export default App;



