/**
 * Single respomsibilty principle
 *  in this we create a class that has only the specific funtionality to that class
 * if addtional functionality is needed then we create a new class, because it does not cost us to creat a new class
 * this is because it becomes more genralize to make function specific to that class
 */
const fs = require("fs");
class Jounral {
  constructor() {
    this.entries = {};
  }
  count = 0;
  addEntry(text) {
    let c = ++this.count;
    let entry = `${c} : ${text}`;
    this.entries[c] = entry;
    return c;
  }

  removeEntry(index) {
    delete this.entries[index];
  }

  toString() {
    console.log(Object.entries(this.entries));
    return Object.values(this.entries).join("\n");
  }

  //loadFile
  loadfile() {}

  //loadfile fromUrl
  loadfilefromUrl() {}
}
// create a new class so that we can make more genralixe functions
// and it is easy to debug
class persistantMangaer {
  preProcess() {
    // to do some preprocessing on file
  }
  saveFile(jounral, file) {
    fs.writeFileSync(file, jounral.toString());
  }
}

// Jounral.count = 0;

const j = new Jounral();
j.addEntry("today i started main journey");
j.addEntry("i will not stop untill i mamke something great.");
console.log(j.toString());

const p = new persistantMangaer();
let fileName = "./jounral.txt";
p.saveFile(j, fileName);
