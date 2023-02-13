import { createBritishSuccessionTree } from "./families/britain";
import { Person } from "./personTypes";
import { logAllPeopleInTreeWithQueue } from "./treeLogging";

export default function logIfInTree(
  targetName: string,
  topOfTree: Person,
): boolean {
  const familyArray = logAllPeopleInTreeWithQueue(topOfTree);
  return familyArray.includes(targetName);
}

//console.log(logIfInTree("Henry", createBritishSuccessionTree()));

function isDescendant(
  descendantName: string,
  ancestorName: string,
  topOfTree: Person,
): boolean {
  const descendantTruth = logIfInTree(descendantName, topOfTree);
  const ancestorTruth = logIfInTree(ancestorName, topOfTree);
  //console.log(descendantTruth, "descendent truth");
  //console.log(ancestorTruth, "ancestor truth");
  if (descendantTruth === false || ancestorTruth === false) {
    return false;
  }
  const workStack: Person[] = [];
  workStack.push(topOfTree);
  //console.log(topOfTree, "top of tree");
  while (workStack.length >= 1) {
    const currentPerson = workStack.pop();
    if (currentPerson === undefined) {
      throw new Error("Unexpectedly got undefined from pop");
    }
    for (const item of currentPerson.children) {
      workStack.push(item);
      //console.log(item.name, currentPerson.name);
      if (currentPerson.name === ancestorName && item.name === descendantName) {
        return true;
      }
    }
  }
  return false;
}

console.log(
  isDescendant("William", "josh", createBritishSuccessionTree()),
  "ran is descendant",
);
console.log(
  isDescendant("Charlotte", "William", createBritishSuccessionTree()),
  "ran is descendant",
);

console.log(
  isDescendant("Archie", "Harry", createBritishSuccessionTree()),
  "ran is descendant",
);
