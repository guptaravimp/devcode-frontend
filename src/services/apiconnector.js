import axios from "axios"

export const axiosInstance = axios.create({});

export const apiconnector = (method, url, bodyData, headers, params) => {
    return axiosInstance({
        method: `${method}`,
        url: `${url}`,
        data: bodyData ? bodyData : null,
        headers: headers ? headers : null,
        params: params ? params : null
    });
}

// import axios from "axios"

// export const axiosInstance = axios.create({});

// export const apiconnector = (method, url, bodyData, headers, params) => {
//     const config = {
//         method,
//         url,
//     };
    
//     if (bodyData) config.data = bodyData;
//     if (headers) config.headers = headers;
//     if (params) config.params = params;
    
//     return axiosInstance(config);
// }


// import axios from "axios"

// export const axiosInstance = axios.create({});

// export const apiConnector = (method, url, bodyData, headers, params) => {
//     return axiosInstance({
//         method:`${method}`,
//         url:`${url}`,
//         data: bodyData ? bodyData : null,
//         headers: headers ? headers: null,
//         params: params ? params : null,
//     });
// }