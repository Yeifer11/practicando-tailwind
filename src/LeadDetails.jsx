import React, { useState, useEffect } from 'react';
import leadData from './leadData.json';

// Íconos SVG para cada tipo de actividad
const icons = {
    annotation: (
        <svg className="w-8 h-8 text-blue-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h6m2 9a9 9 0 100-18 9 9 0 000 18z"></path>
        </svg>
    ),
    appointment: (
        <svg className="w-8 h-8 text-green-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 0v4M3 13h18m-2 8h-2a2 2 0 01-2-2v-5a2 2 0 012-2h2a2 2 0 012 2v5a2 2 0 01-2 2z"></path>
        </svg>
    ),
    task: (
        <svg className="w-8 h-8 text-purple-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7M5 6h14"></path>
        </svg>
    ),
    like: (
        <svg className="w-6 h-6 text-red-600 mr-2 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7 7 7-7M5 8h14"></path>
        </svg>
    ),
    comment: (
        <svg className="w-6 h-6 text-yellow-600 mr-2 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h6m2 9a9 9 0 100-18 9 9 0 000 18z"></path>
        </svg>
    ),
    share: (
        <svg className="w-6 h-6 text-blue-600 mr-2 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 0v4M3 13h18m-2 8h-2a2 2 0 01-2-2v-5a2 2 0 012-2h2a2 2 0 012 2v5a2 2 0 01-2 2z"></path>
        </svg>
    ),
    view: (
        <svg className="w-6 h-6 text-green-600 mr-2 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8a4 4 0 100 8 4 4 0 000-8zM2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8z"></path>
        </svg>
    ),
};

function LeadDetails() {
    const [lead, setLead] = useState(null);
    const [likes, setLikes] = useState({});
    const [comments, setComments] = useState({});
    const [commentInput, setCommentInput] = useState({});
    const [views, setViews] = useState({});

    useEffect(() => {
        setLead(leadData.lead);
    }, []);

    const handleLikeClick = (id) => {
        setLikes((prevLikes) => ({
            ...prevLikes,
            [id]: (prevLikes[id] || 0) + 1,
        }));
        handleViewIncrement(id);
    };

    const handleCommentClick = (id) => {
        setCommentInput((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
        handleViewIncrement(id);
    };

    const handleCommentSubmit = (id, comment) => {
        setComments((prevComments) => ({
            ...prevComments,
            [id]: [...(prevComments[id] || []), comment],
        }));
        setCommentInput((prev) => ({
            ...prev,
            [id]: false,
        }));
    };

    const handleViewIncrement = (id) => {
        setViews((prevViews) => ({
            ...prevViews,
            [id]: (prevViews[id] || 0) + 1,
        }));
    };

    if (!lead) return <p>Cargando...</p>;

    return (
        <div className="p-8 bg-gray-100 min-h-screen flex justify-center">
            <div className="w-full max-w-md">
                <h1 className="text-3xl font-bold text-center mb-8">Detalles del Prospecto: {lead.name}</h1>

                <div className="space-y-8">
                    {lead.activities.map((activity) => (
                        <div key={activity.id} className="relative bg-white p-4 rounded-lg shadow-md">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    {icons[activity.type]}
                                </div>
                                <div className="ml-4">
                                    {activity.type === 'annotation' && (
                                        <>
                                            <h2 className="text-xl font-semibold text-blue-600">Anotación</h2>
                                            <p className="text-gray-700">{activity.content}</p>
                                            <p className="text-gray-500 text-sm mt-2">Fecha: {activity.date}</p>
                                        </>
                                    )}
                                    {activity.type === 'appointment' && (
                                        <>
                                            <h2 className="text-xl font-semibold text-green-600">Cita</h2>
                                            <p className="font-bold text-gray-800">{activity.title}</p>
                                            <p className="text-gray-500 text-sm mt-2">
                                                Fecha: {activity.date} - Hora: {activity.time}
                                            </p>
                                        </>
                                    )}
                                    {activity.type === 'task' && (
                                        <>
                                            <h2 className="text-xl font-semibold text-purple-600">Tarea</h2>
                                            <p className="text-gray-700">{activity.task}</p>
                                            <p className="text-gray-500 text-sm mt-2">Fecha límite: {activity.dueDate}</p>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="flex mt-4">
                                <div className="flex items-center" onClick={() => handleLikeClick(activity.id)}>
                                    {icons.like}
                                    <span>{likes[activity.id] || 0}</span>
                                </div>
                                <div className="flex items-center ml-4" onClick={() => handleCommentClick(activity.id)}>
                                    {icons.comment}
                                    <span>{comments[activity.id]?.length || 0}</span>
                                </div>
                                <div className="flex items-center ml-4">
                                    {icons.share}
                                </div>
                                <div className="flex items-center ml-4">
                                    <span onClick={() => handleViewIncrement(activity.id)}>{icons.view}</span>
                                    <span>{views[activity.id] || 0}</span>
                                </div>
                            </div>

                            {commentInput[activity.id] && (
                                <div className="mt-4">
                                    <input
                                        type="text"
                                        className="border p-2 w-full rounded"
                                        placeholder="Escribe un comentario..."
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                handleCommentSubmit(activity.id, e.target.value);
                                                e.target.value = '';
                                            }
                                        }}
                                    />
                                </div>
                            )}

                            {comments[activity.id] && comments[activity.id].length > 0 && (
                                <div className="mt-4">
                                    <h3 className="text-md font-semibold text-gray-800 mb-2">Comentarios:</h3>
                                    <ul>
                                        {comments[activity.id].map((comment, index) => (
                                            <li key={index} className="text-gray-700">
                                                {comment}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LeadDetails;

