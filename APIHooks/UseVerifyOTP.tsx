import { API_URLS } from "../Utilities/URLs";


export const useVerifyOTP = (data) => new Promise(async (resolve, reject) => {

    const url = API_URLS.VerifyOTP

    fetch(url, {
        method: "POST",
        body: data,
    })
        .then((response) => {
            console.log(response);

            resolve(response)

        })
        .catch((e) => {
            resolve(e)
        })

})