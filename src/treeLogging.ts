import { Person } from "./personTypes";

export function logAllPeopleInTree(topPerson: Person): void {
  const workStack: Person[] = [];
  const names = [];
  workStack.push(topPerson);
  while (workStack.length >= 1) {
    const currentPerson = workStack.pop();
    if (currentPerson === undefined) {
      throw new Error("Unexpectedly got undefined from pop");
    }
    names.push(currentPerson.name);
    for (const item of currentPerson.children) {
      workStack.push(item);
      //console.log(workStack, "children");
    }
  }
}

//console.log(logAllPeopleInTree(createStarkTree()))

export function logAllPeopleInTreeWithQueue(topPerson: Person): string[] {
  //console.log("TODO!  First person is " + topPerson.name);
  const workQueue: Person[] = [];
  const names = [];
  workQueue.push(topPerson);
  while (workQueue.length >= 1) {
    const currentPerson = workQueue.shift();
    if (currentPerson === undefined) {
      throw new Error("Unexpectedly got undefined from pop");
    }
    names.push(currentPerson.name);

    for (const item of currentPerson.children) {
      workQueue.push(item);
      //console.log(workQueue, "children");
    }
  }
  return names;
}
//console.log(logAllPeopleInTreeWithQueue(createBritishSuccessionTree()));
