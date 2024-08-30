const addTweet = (tweetText) => {
  const newTweet = {
    id: Date.now(),
    text: tweetText,
    likes: 0,
    comments: [],
  };
  setTweets((prevTweets) => {
    const updatedTweets = [newTweet, ...prevTweets];
    console.log(updatedTweets); // Verificar que la lista contiene múltiples tweets
    return updatedTweets;
  });
};

