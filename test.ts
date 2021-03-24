game: Game;

function getTOC(entry: JournalEntry) {
  const regexp = new RegExp("<h[1-6]>.*</h[1-6]>", "g");
  var matches = Array.from(entry.data.content.matchAll(regexp));
  let output = "";
  for (const match of matches) {
    output += match[0];
  }
  return output;
}




console.log("Hello World! This code runs immediately when the file is loaded.");

Hooks.on("init", function() {
  console.log("This code runs once the Foundry VTT software begins its initialization workflow.");
});

Hooks.on("ready", function() {
  console.log("This code runs once core initialization is ready and game data is available.");
  console.log(document.location.pathname);
  var x = new Application({template:"modules/foundry-test/templates/test.html"});
  x.render(true);
});
