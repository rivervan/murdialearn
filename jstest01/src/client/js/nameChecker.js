function checkForName(inputText) {
    console.log("::: Running checkForName.test.js :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        //alert("Welcome, Captain!")
        return "Welcome, Captain!"
    }
}

export { checkForName }
