import { API_URLS } from "../Utilities/URLs";


export const usePostRegister = (data) => new Promise(async (resolve, reject) => {
    
    let url

    if (data.org_name) {
        url = API_URLS.RegOrg
    } else if (data.brand_name) {
        url = API_URLS.RegBrand
    } else {
        url = API_URLS.RegSingle
    }


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