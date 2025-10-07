
function createmulti(){
    let input = Number(window.prompt("select a number:"))
    for(let i=1; i<11; i++){
        let item = document.createElement("li")
        item.innerText = `${input} * ${i} = ${input*i}`
        document.getElementById("ul").appendChild(item)
    }
}
 
