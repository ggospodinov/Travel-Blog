const baseUrl = 'http://localhost:9999/api';

export  function getAllThemes() {
    return fetch(`${baseUrl}/themes`)
        .then(res => res.json())
}