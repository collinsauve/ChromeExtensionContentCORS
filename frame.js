const url = "https://httpbin.org/anything";
const options = {
    mode: "cors"
};
fetch(url, options)
    .then(r => {
        console.log("Content GET", r, Array.from(r.headers));
    });

fetch(url, { method: "POST", ...options })
    .then(r => {
        console.log("Content POST", r, Array.from(r.headers));
    });