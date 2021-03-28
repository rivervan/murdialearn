import {getDataApi} from "../src/client/js/formHandler"
global.fetch = require("node-fetch")

describe("Testing the submit functionality", () => {
    test("Testing the getDataApi() function", () => {

      return getDataApi('http://localhost:8080/test/love').then(data => {expect(data.sentence_list[0].score_tag).toEqual("P+") })

    })});