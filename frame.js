const url = "https://httpbin.org/anything";
const options = {
    mode: "cors"
};
fetch(url, options)
    .then(r => {
        console.log("Frame GET", r, Array.from(r.headers));
    });

fetch(url, { method: "POST", ...options })
    .then(r => {
        console.log("Frame POST", r, Array.from(r.headers));
    });
