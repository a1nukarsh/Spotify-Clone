console.log("hello dear")

async function main(){
    let a = await fetch("http://127.0.0.1:5500/songs/")
    let response = await a.text()
    console.log(response)
    let element = document.createElement("div")
    
}

main()