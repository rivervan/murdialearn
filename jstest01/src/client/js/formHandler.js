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

            let htmlElement = '<div id="confidence">Confidence: ' + res.sentence_list[0].confidence  +  '</div>' + '<br>' +
                              '<div id="score_tag">Score_tag: '   + res.sentence_list[0].score_tag  + '</div>' + '<br>'  +
                              '<div id="polarity">Polarity:<div id="inip">inip: ' +  res.sentence_list[0].inip       + '</div><div id="endp">endp:' + res.sentence_list[0].endp   + '</div> </div>'

            res.sentimented_entity_list[0]





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
