console.log("Script is working");

function tellStory(storyArray) {
  let [name, mood, activity] = storyArray;
  return `This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end.`;
}

let exampleArray = ["Peter", "happy", "jumping around"];
let story = tellStory(exampleArray);
console.log(story);
