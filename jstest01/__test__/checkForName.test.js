import {checkForName} from "../src/client/js/nameChecker";



describe("Testing the submit functionality", () => {
    test("Testing the getDataApi() function", () => {

        const input = [

            "Main dishes were quite good, but desserts were too sweet for me.",
            "Main dishes were quite good/bad, but desserts were too sweet for me.",
            "https://classroom.udacity.com/nanodegrees/nd0011/parts/5bb114fe-8add-4c47-bc13-1cee34886c1a/modules/0eb61bba-702e-4dc3-bf32-a838bac60c33/lessons/adbf2a15-5fa5-466b-a8fe-19ce08b82b61/concepts/5675966c-1a35-4d58-8715-e279d2303167",

        ];


        expect(checkForName(input[0])).toEqual(0) // is a correct sentence
        expect(checkForName(input[1])).toEqual(1) // is a bad sentence
        expect(checkForName(input[2])).toEqual(2) //is not URL standard


    })});