function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = "<div>hola</div>";

    return element;
}

document.body.appendChild(component());