export const mockPosts = [
    { id: 1, title: "Primo post", descrizione: "Descrizione del primo post"},
    { id: 2, title: "Secondo post", descrizione: "Descrizione del post post"},
    { id: 3, title: "Terzo post", descrizione: "Descrizione del terzo post"},
];



export const fetchPosts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockPosts);
        }, 1000)
    })
};