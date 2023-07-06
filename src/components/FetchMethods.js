const getFetch = async (path) => {
    let response = await fetch(`${process.env.REACT_APP_API_URL}/${path}`);
    return await response.json();
}
const postFetch = async (path, body) => {
    let response = await fetch(`${process.env.REACT_APP_API_URL}/${path}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    return await response.json();
}
const putFetch = async (path, body) => {
    let response = await fetch(`${process.env.REACT_APP_API_URL}/${path}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    return await response.json();
}
const deleteFetch = async (path) => {
    let response = await fetch(`${process.env.REACT_APP_API_URL}/${path}`, {
        method: 'DELETE'
    });
    return await response.json();
}
export const fetchMethods = {
    getFetch,
    postFetch,
    putFetch,
    deleteFetch
  };
  