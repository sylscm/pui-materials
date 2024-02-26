
class Notecard {
constructor(imageURL, title, body) {
    this.noteImageURL = imageURL;
    this.noteTitle = title;
    this.noteBody = body;

    this.element = null;
    }
};

/**storing notecard objects */
const notecardSet = new Set();
/**make new notecard & adding to the set */
function addNewNote(imageURL, title, body) {
    const notecard = new Notecard(imageURL, title, body);
    notecardSet.add(notecard);
    return notecard;
}

function createElement(notecard) {
    const template = document.querySelector('#notecard-template');
    const clone = template.content.cloneNode(true);
    notecard.element = clone.querySelector('.notecard');
  
    const notecardListElement = document.querySelector('#notecard-list');
    notecardListElement.prepend(notecard.element);
    updateElement(notecard);
};

function updateElement(notecard) {
    const noteImageElement = notecard.element.querySelector('.notecard-thumbnail');
	const noteTitleElement = notecard.element.querySelector('.note-title');
	const noteBodyElement = notecard.element.querySelector('.note-body');

    noteImageElement.src = notecard.noteImageURL;
    noteTitleElement.innerText = notecard.noteTitle;
    noteBodyElement.innerText = notecard.noteBody;
}

const notecardOne = addNewNote(
    "assets/warhol-rhino.png",
    "The first note title",
    "The first note body"
);
const notecardTwo = addNewNote(
    "assets/warhol-frog.png",
    "The second note title",
    "The second note body"
);

for (const notecard of notecardSet) {
    console.log(notecard);
    createElement(notecard);
};
/**funtion to create elements using template tag */
