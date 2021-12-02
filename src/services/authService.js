const baseUrl = 'http://localhost:3030';
// const baseUrl = 'https://stronglove.backendless.app/api';

export  const login = async(email, password)=>{
    let res= await  fetch(`${baseUrl}/users/login`,{
        method:'POST',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify({email, password})
    });

    let jsonResult = await res.json();


    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult.message;
    }

}

export const register = (email, password) => {
    return fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(res => res.json()); 
};
