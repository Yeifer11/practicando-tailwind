import React from 'react';

function Lenguajes() {
    const languages = ['JavaScript', 'Python', 'TypeScript', 'Go', 'Rust', 'Kotlin', 'Swift'];

    return (
        <div>
            <h1>Lenguajes de Programación</h1>
            <ul >
                {languages.map((dato, index) => (
                    
                    <li key={index} className="bg-white p-4 shadow-lg rounded-lg m-4">                        
                        <span className="text-l font-bold">➡️ {dato}</span>                        
                    </li>                    
                ))}
            </ul>
        </div>
    );
}

export default Lenguajes;
