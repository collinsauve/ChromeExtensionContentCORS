const url = "https://jsonplaceholder.typicode.com/posts";
const options = {
    mode: "cors"
};
fetch(url, options)
    .then(r => {
        console.log("GET", r, Array.from(r.headers));
    });

fetch(url, { method: "POST", ...options })
    .then(r => {
        console.log("POST", r, Array.from(r.headers));
    });

