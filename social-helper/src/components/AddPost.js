import React, { useState } from 'react';

const AddPost = ({ onAddPost }) => {
    const [title, setTitle] = useState('');
    const [descrizione, setDescrizione] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && descrizione) {
            onAddPost({ title, descrizione});
            setTitle('');
            setDescrizione('');
        }
    };


    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }} >
            <h2>Aggiungi un nuovo Post</h2>
            <div>
                <input type="text" placeholder="Inserisci titolo" value={title} onChange={(e) => setTitle(e.target.value)} style={{ marginTop: '10px' }} />

                <input type="text" placeholder="Inserisci descrizione" value={descrizione} onChange={(e) => setDescrizione(e.target.value)} style={{ marginTop: '10px' }} />
            </div>
            <button type="submit" style={{ marginTop: '10px'}}>Aggiungi Post</button>
        </form>
    );
};

export default AddPost;