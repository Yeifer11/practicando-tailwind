import React from 'react';

const Tweet = ({ tweet }) => {
  return (
    <div className="bg-gray-900 p-4 rounded-lg mb-4">
      <p>{tweet.text}</p>
      <div className="flex mt-2 space-x-4">
        <button>
          ❤️ {tweet.likes}
        </button>
        <button>
          💬 {tweet.comments.length}
        </button>
      </div>
    </div>
  );
};

export default Tweet;
