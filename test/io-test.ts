import { read, write } from "../io/io.ts";

export function ioTest() {
    const testString = "test";
    const testPath = './data.txt'

    if(write(testPath, testString).includes(testString)) {
        console.log("Write Pass");
    } else console.log("Write Fail");

    if(read(testPath).includes(testString)) {
        console.log("Read Pass");
    } else console.log("Read Fail");

    write(testPath, '');
}