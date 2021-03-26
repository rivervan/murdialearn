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
        getDataApi(formText.toString()).then(res =>{

            let htmlElement = '<div>score_tag: ' + res.score_tag  +  '</div>' + '<br>' +
                              '<div>   status: ' + res.status.remaining_credits  + '</div>' + '<br>'
            if (res.sentimented_entity_list.length > 0)
                htmlElement = htmlElement + '<div>   entity: ' + res.sentimented_entity_list[0].type  + '</div>'
            else
                htmlElement = htmlElement + '<div>   entity: ------------ </div>'

            document.getElementById('results').innerHTML = htmlElement

        }).catch(err => {document.getElementById('results').innerHTML = '<div>' + err.message + '</div>'})



}


function getDataApi(name){
    const myPath = envPath + '/test/' + name;
    return fetch(myPath)
        .then(res => res.json()).then(function(res) {
            return res
        })
}


export { handleSubmit}
export { getDataApi}
