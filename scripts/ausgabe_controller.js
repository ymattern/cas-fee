
// WAS BRAUCHTS ?

// "Redirect" zum Eingabeformular auf Button "Neue Notiz"
const noteform = '/single-note.html';
// Neue Notiz erstellen

const goToSingleNote = document
    .getElementById('btn-new-note')
    .addEventListener('click', () => GoToList(noteform));



// modeSwitcher NEU ====================================================

const styleMenue = document.querySelector('#mode-switcher');
const menueStyle = styleMenue
  .addEventListener('change', () => {
    if (styleMenue.options[styleMenue.selectedIndex].value == 'dark') {
      document.body.classList.add('dark-mode');
      localStorage.setItem('style', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('style', '');
    } 
  });

function styleAuslesen() {
  if (localStorage.getItem('style') === 'dark') {
    document.body.classList.add('dark-mode');
    styleMenue.value = 'dark';
  } else {
    document.body.classList.remove('dark-mode');
  }
}
//========================================================================


// Daten ins Template schreiben

function createNoteHtml() {
 const tempausgabe = notes.map(templateAusfuellen);
// return notes.map(templateAusfuellen);
// console.log(tempausgabe.join(''));
const templateausgabe = tempausgabe.join('');
return templateausgabe;
     //  .join('');
     // console.log(templausgabe);
}
function templateAusfuellen(note) {
  return `
    <article data-id="${note.id}" data-duedate="${note.duedate}" data-importance="${note.importance}" class="${filterCompleted(note.completed)}">
       <p class="duedate">${note.duedate}</p>
       <h3 class="ausgabe-titel"> ${note.title}</h3>           
       <p class="importance">${note.importance} </p>
       <button type="button" id="${'btn-edit_' + note.id}" class="edit-button">Bearbeiten</button>
       <label for="${'check_notiz_' + note.id}"><input type="checkbox" id="${'check_notiz_' + note.id}" ${checkboxChecked(note.completed)}>
       Erledigt</label>
       <textarea id="ausgabe-description">${note.notiz} </textarea> 

       
    </article>`
  }

// Daten in <main> einfüllen
function renderNotes() {
  document.querySelector('main').innerHTML = createNoteHtml();
}


// Notizen filtern ====================================================
function filterNotes() {
  if (document.querySelector('#chb-erledigt').checked == false) {
    document.querySelector('.completed').style.display ='none';
  } else {
    document.querySelector('.completed').style.display ='initial';
  }
}



// Initialisierung =====================================================
function init() {
  styleAuslesen();
  renderNotes();
}


init();
//======================================================================


