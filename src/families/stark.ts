import { Person } from "../personTypes";

export function createStarkTree(): Person {

    const eddardKids: Person[] = [
        {name: "Rickon", children:[] },
        {name: "Bran", children:[] },
        {name: "Arya", children:[] },
        {name: "Sansa", children:[] },
        {name: "Robb", children:[] }, 
        {name: "Jon", children:[] }

    ]

    const rickardKids: Person[] = [
        {name: "Benjen", children: []}, 
        {name: "Lyanna", children : []}, 
        {name: "Eddard", children: eddardKids}, 
        {name: "Brandon", children:[]}, 

    
    
    ]
    return { name: "Rickard", children: rickardKids };
}