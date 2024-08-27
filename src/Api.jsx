import React, { useState, useEffect } from 'react';

function Api() {
    const [data, setData] = useState(null); // Estado para almacenar los datos
    const [loading, setLoading] = useState(true); // Estado para manejar el estado de carga

    useEffect(() => {
        // Efecto secundario: hacer fetch de datos
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json()) // Parsear la respuesta como JSON
            .then(data => {
                setData(data); // Actualizar el estado con los datos obtenidos
                setLoading(false); // Cambiar el estado de carga a false
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false); // Cambiar el estado de carga en caso de error
            });
    }, []); // El array vacío significa que esto solo se ejecuta una vez, al montar el componente

    if (loading) return <p>Loading...</p>; // Mostrar mensaje de carga mientras los datos se obtienen
    return (
    <div>
        <ul>
                {data.map((dato) => (
                    <li key={dato.id}>{dato.name}</li>
                ))}
        </ul>
    </div>

); // Mostrar los datos obtenidos
}

export default Api;
