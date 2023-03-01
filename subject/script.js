// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============

let keys = (document.getElementsByClassName("calculator__keys"))[0]
let display = document.getElementsByClassName("calculator__display")[0]

function add(x, y) {
    return (x + y)
}

for (let button of keys.children) {
    let content = button.textContent
    button.addEventListener("click", () => {
        console.log(content)

        if (display.textContent == 0) {
            display.textContent = content
        }
        else {
            display.textContent += content
        }




        if (content == "AC") {
            display.textContent = 0
        }
    })
}