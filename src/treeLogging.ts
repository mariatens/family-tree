import { createStarkTree } from "./families/stark";
import { Person } from "./personTypes";


export function logAllPeopleInTree(topPerson: Person): void {
    const workStack: Person[]= []
    workStack.push(topPerson)
    while(workStack.length >= 1){
        let currentPerson = workStack.pop() 
        if (currentPerson === undefined){
            throw new Error("Unexpectedly got undefined from pop")
        }
        console.log(currentPerson.name, "parent")
        for (let item of currentPerson.children){
            workStack.push(item)
            console.log(workStack, "children")
        } 
    }
    console.log("done")
}

console.log(logAllPeopleInTree(createStarkTree()))



export function logAllPeopleInTreeWithQueue(topPerson: Person): void {
    console.log("TODO!  First person is " + topPerson.name);
}

