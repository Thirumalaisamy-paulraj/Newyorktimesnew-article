export const httpClient ={
    handleResponse
}

function handleResponse(response){
    let json = response.json();
    if(!(response.status === 200 || response.status === 201)) {
        return json.then(res =>{
            console.log(res);
            return Promise.reject(res);
        })
    }

    return json;
}