import {httpClient} from "../utils";
export const homeApi ={
    search,
}

function search(page){
    let requestOptions ={
        method:'GET',
        headrs:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
    }
    //uuTCgkUlFyAK4JnFhQ5SjyFjEJ3Eruh1
    //
    let url=`https://api.nytimes.com/svc/search/v2/articlesearch.json?&page=${page}&api-key=yoK9TvFSGPc09esM5zWOfj27y0WDRrDO`

    return fetch(`${url}`,requestOptions).then(httpClient.handleResponse);
}