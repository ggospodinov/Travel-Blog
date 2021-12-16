const baseUrl = 'https://stronglove.backendless.app/api';
 

 export  const loginIn = async(login, password)=>{
    let res= await  fetch(`${baseUrl}/users/login`,{
        method:'POST',
        headers:{
            'content-type': 'application/json'
     },
       body:JSON.stringify({login, password})
    });
    let jsonResult = await res.json();

    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult.message;
    }

 

 }

export const register = ( email,username, password) => {
    return fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email,username, password })
    })
        .then(res => res.json()); 
};

export const logout =(usertoken) =>{
    return fetch(`${baseUrl}/users/logout`,{
        method: 'GET',
        headers:{
            'X-Authorization': usertoken,
        }
    }
    )
}

