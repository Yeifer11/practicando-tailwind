import React, { useState, useEffect } from 'react';

const LeadDetails = ({ tweet }) => {
    // Verificar si tweet está definido antes de intentar acceder a sus propiedades
    if (!tweet) {
        return ;
    }

    const [likes, setLikes] = useState(tweet.likes);
    const [comments, setComments] = useState(tweet.comments || []);
    const [commentInput, setCommentInput] = useState('');
    const [views, setViews] = useState(0);

    const handleLikeClick = () => {
        setLikes(likes + 1);
    };

    const handleCommentSubmit = (comment) => {
        setComments([...comments, comment]);
        setCommentInput('');
    };

    const handleViewIncrement = () => {
        setViews(views + 1);
    };

    useEffect(() => {
        handleViewIncrement();
    }, []);

    return (
        <div className="p-8 bg-gray-800 min-h-screen flex justify-center">
            <div className="w-full max-w-md">
                <h1 className="text-3xl font-bold text-center mb-8">Detalles del Tweet</h1>

                <div className="relative bg-white p-4 rounded-lg shadow-md">
                    <p className="text-gray-700">{tweet.text}</p>
                    <div className="flex mt-4">
                        <div className="flex items-center text-gray-700" onClick={handleLikeClick}>
                            ❤️ {likes}
                        </div>
                        <div className="flex items-center ml-4 text-gray-700">
                            💬 {comments.length}
                        </div>
                        <div className="flex items-center ml-4 text-gray-700">
                            👁️ {views}
                        </div>
                    </div>

                    <div className="mt-4">
                        <input
                            type="text"
                            className="border p-2 w-full rounded text-black"
                            placeholder="Escribe un comentario..."
                            value={commentInput}
                            onChange={(e) => setCommentInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleCommentSubmit(e.target.value);
                                }
                            }}
                        />
                    </div>

                    {comments.length > 0 && (
                        <div className="mt-4">
                        <h3 className="text-md font-semibold text-gray-800 mb-2">Comentarios:</h3>
                        <ul>
                            {comments.map((comment, index) => (
                                <li key={index} className="mb-2">
                                    <div className="bg-gray-100 p-2 rounded shadow">
                                        <p className="text-gray-800">{comment}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LeadDetails;

