import {checkForName} from "./nameChecker";

function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    checkForName(formText)
    console.log("::: Form Submitted :::")
    getDataApi(formText.toString()).then(res =>{
        document.getElementById('results').innerHTML = '<div>' + res  + '</div>'
    }).catch(err => {document.getElementById('results').innerHTML = '<div>' + err.message + '</div>'})

}


function getDataApi(name){
    const path = 'http://localhost:8080/test/' + name;
    return fetch(path)
        .then(res => res.json()).then(function(res) {return res.sentence_list[0].sentimented_entity_list[0].type})

}


export { handleSubmit}
export { getDataApi}
