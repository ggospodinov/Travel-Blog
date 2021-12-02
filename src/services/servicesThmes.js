// const baseUrl = 'http://localhost:9999/api';
const baseUrl = 'https://stronglove.backendless.app/api/data';

// export  function getAllThemes() {
//     return fetch(`${baseUrl}/themes`)
//         .then(res => res.json())
// }

export  function getAllThemes() {
    return fetch(`${baseUrl}/theme`)
        .then(res => res.json())
}