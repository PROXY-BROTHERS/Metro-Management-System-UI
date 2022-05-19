import { URL } from "../constants/BackendConstants"

export default function checkServerStatus() {
    const url = URL + "api/status";
    fetch(url, {
            "method": "GET"
        })
        .then(response => response.text()
            .then(data => ({ status: response.status, body: data }))
            .then(obj => console.log(obj)))

    .catch(err => {
        console.log(err);
    })
}