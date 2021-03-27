import {checkForName} from "../src/client/js/nameChecker";



describe("Testing the submit functionality", () => {
    test("Testing the getDataApi() function", () => {

        const input = [
            "Picard",
            "Janeway",
            "Kirk",
            "Archer",
            "Georgiou"
        ];

        const output = "Welcome, Captain!" ;

        expect(checkForName(input[0])).toEqual(output)
        expect(checkForName(input[1])).toEqual(output)

    })});