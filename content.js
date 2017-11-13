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


const frame = document.createElement("iframe");
frame.src = `chrome-extension://${chrome.runtime.id}/frame.html`;
frame.className = "test-frame";
document.body.appendChild(frame);

