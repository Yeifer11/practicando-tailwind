import React, { useState } from 'react';

const TweetInput = ({ addTweet }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTweet(input);  // Llama a la función para agregar un tweet
      setInput('');  // Limpia el campo de entrada después de enviar el tweet
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 flex justify-center">
      <input
        type="text"
        placeholder="What's happening?"
        className="bg-gray-700 p-2 rounded-lg w-1/2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 px-4 py-2 rounded-lg ml-4">
        Tweet
      </button>
    </form>
  );
};

export default TweetInput;


