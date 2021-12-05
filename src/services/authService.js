// const baseUrl = 'http://localhost:3030';

 const baseUrl = 'https://stronglove.backendless.app/api';

 



//   export const loginUser = Backendless.UserService.login( login, password) => {
//     return fetch(`${baseUrl}/users/login`, {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify({ login, password })
//     })
//         .then(res => res.json()); 
//  }
 

 export  const loginIn = (login, password)=>{
    return  fetch(`${baseUrl}/users/login`,{
        method:'POST',
        headers:{
            'content-type': 'application/json'
     },
       body:JSON.stringify({login, password})
    }).then(res=> res.json()).then(err=>console.error(err))

 

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

export const logout =(token) =>{
    return fetch(`${baseUrl}/users/logout`,{
        headers:{
            'X-Authorization': token,
        }
    }
    )
}

