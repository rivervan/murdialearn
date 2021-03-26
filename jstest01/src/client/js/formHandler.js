import {checkForName} from "./nameChecker";


let envPath = '';
if (process.env.NODE_ENV === 'development')
    envPath = 'http://localhost:8081'
else
    envPath = 'http://localhost:8080'


function handleSubmit(event) {
    event.preventDefault()

    let formText = document.getElementById('name').value
    checkForName(formText)
    console.log("::: Form Submitted :::")

    getDataApi(formText.toString()).then(res =>{
        document.getElementById('results').innerHTML = '<div>' + res  + '</div>'
    }).catch(err => {document.getElementById('results').innerHTML = '<div>' + err.message + '</div>'})

}


function getDataApi(name){
    envPath = envPath + '/test/' + name;
    return fetch(envPath)
        .then(res => res.json()).then(function(res) {return res.sentence_list[0].sentimented_entity_list[0].type})
}


export { handleSubmit}
export { getDataApi}
