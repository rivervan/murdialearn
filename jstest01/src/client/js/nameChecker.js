
const IS_VALID_SENTENCE = 0
const IS_NOT_VALID_SENTENCE = 1
const IS_URL = 2


function checkForName(inputText) {
    console.log("::: Running checkForName.test.js :::", inputText);

    if (isURL(inputText))
        return IS_URL
    else if (isSentenceCorrect(inputText))
            return IS_VALID_SENTENCE
        else
            return IS_NOT_VALID_SENTENCE

}

function isURL (entrada){
    const regexpURL = /^(https?:\/\/)?((([a-z]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i

    if (entrada.match(regexpURL) != null )
        return true
    else
        return false
}

function isSentenceCorrect(entrada){
    const regexpSentence = /[^\w\s,._]/gi

    if (entrada.match(regexpSentence) == null)
        return true
    else
        return false
}





export { checkForName }
