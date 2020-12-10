function darkMode(){

    console.log("function clicked")

    const mainEl = document.getElementById("main");
    mainEl.style.backgroundColor = "black";
}

function lightMode() {
    console.log("function clicked")

    // const mainEl = document.getElementById("main");
    document.body.style.backgroundColor = "white";

    const buttons = document.getElementsById("lightMode");
    buttons.style.backgroundColor = "black";
}

function defaultColor() {
    // const mainEl = document.getElementById("main");
    document.body.style.backgroundColor = "lightblue";
}