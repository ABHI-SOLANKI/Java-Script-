function createToster(config) {
    return function (str) {
        let div = document.createElement("div")
        div.textContent = str
        div.className =
            `inline-block ${config.theme === "dark" ? "bg-gray-800 text-white" : " bg-gray-100 text-black"} px-6 py-3 rounded shadow-lg pointer-event-none`;

        document.querySelector(".parent").appendChild(div)

        if (config.positionX !== "left" || positionY !== "top") {
            document.querySelector(".parent").className +=
                `${config.positionX === "right" ? "right-5" : "left-5"} ${config.positionY === "bottom" ? "bottom-5" : "top-5"}`
        }

        setTimeout(() => {
            document.querySelector(".parent").removeChild(div)
        }, config.duration * 1000);
    }
}
let toster = createToster({
    positionX: "right",
    positionY: "bottom",
    theme: "light",
    duration: "3"
})
toster("Download Done ")
setTimeout(() => {
    toster("Download ")
}, 2000);