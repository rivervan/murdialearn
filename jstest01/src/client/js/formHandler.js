import {checkForName} from "./nameChecker";


let envPath = '';
if (process.env.NODE_ENV === 'development')
    envPath = 'http://localhost:8081'
else
    envPath = 'http://localhost:8080'



const getDataApi = async ( url = '')=>{

    try {
        const response = await fetch(url).then((data) => {return data.json()})
        return response
    }catch(error) {
        console.log("error", error);
    }
}


function handleSubmit(event) {
    event.preventDefault()


        let formText = document.getElementById('name').value
        checkForName(formText)

       getDataApi('/test/' + formText.toString()).then((miresp) => {
           let htmlElement = '<div id="confidence">Confidence: ' + miresp.sentence_list[0].confidence  +  '</div>' + '<br>' +
                              '<div id="score_tag">Score_tag: '   + miresp.sentence_list[0].score_tag  + '</div>' + '<br>'  +
                              '<div id="polarity">Polarity:<div id="inip">inip: ' +  miresp.sentence_list[0].inip       + '</div><div id="endp">endp:' + miresp.sentence_list[0].endp   + '</div> </div>'

            document.getElementById('results').innerHTML = htmlElement

       }).catch(err => {alert("Error to try getting data from API:" + err)} )


}




export { handleSubmit}
export { getDataApi}
