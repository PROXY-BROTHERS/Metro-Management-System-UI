import { URL } from "../constants/BackendConstants"

export async function makeSignupCall(data,apikey) {
    let url = URL + "user/signup"
    let response = await fetch(url,{
        method:"POST",
        body: JSON.stringify(data),
        headers:{
            'api-key':apikey,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    let body = await response.text();
    let res = {
        body: body,
        status: response.status
    }
    console.log(res)
}