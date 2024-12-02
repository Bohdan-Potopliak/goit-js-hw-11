`use strict`

const API_KEY = "47392325-3e255e53541a2cdc9281782e2";
const BASE_URL = "https://pixabay.com/api/";

function searchAPI (search) {
    const params = new URLSearchParams({
        key: API_KEY,
        q: search,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true"
        })
    return fetch(`${BASE_URL}?${params}`)
        .then((res) => {
        if(!res.ok) {
        throw new Error(res.statusText);
        }
        return res.json();
        });
}

export default searchAPI;