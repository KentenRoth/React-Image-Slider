import axios from "axios";

const unsplash_key = process.env.REACT_APP_UNSPLASH_KEY;

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        authorization: `Client-ID ${unsplash_key}`
    }
});
