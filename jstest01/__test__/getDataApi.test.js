import {getDataApi} from "../src/client/js/formHandler"
global.fetch = require("node-fetch")

describe("Testing the submit functionality", () => {
    test("Testing the getDataApi() function", () => {

      return getDataApi('Picard').then(data => {expect(data.status.msg).toEqual("OK") })

    })});