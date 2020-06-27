
// WAS BRAUCHTS ?

// "Redirect" zum Eingabeformular auf Button "Neue Notiz"
const eingabeurl = "./single-note.html";


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


// SORTIERUNG ============================================================

var sortierZustand = 'id';
var filterZustand = 'true';

function sortArticles(liste) {
  const sortierteListe = []; 
  
  switch (sortierZustand) {
    case ('id'): 
      sortierteListe = liste.sort((a1, a2) => a2.dataset.id - a1.dataset.id);
      break;
  
    case ('duedate'):
      sortierteListe = liste.sort((a1, a2) => a2.dataset.duedate - a1.dataset.duedate);
      break;

    case ('importance'):
      sortierteListe = liste.sort((a1, a2) => a2.dataset.importance - a1.dataset.importance);
      break;
    
    default:
      sortierteListe = liste;
  }
  filterArticles(sortierteListe); 
}
/*
   return sortedarticles.forEach((note) => articlecontainer.appendChild(note));
};
*/


// Nach Fälligkeitsdatum sortieren 
const rbDuedate = document
    .querySelector('#btn-sort-duedate')
    .addEventListener('click', () => sortArticles('dueDate'));

// Nach Erstellungsdatum sortieren
const rbCreated = document
    .querySelector('#btn-sort-createdate')
    .addEventListener('click', () => sortArticles('id'));

// Nach Wichtigkeit sortieren
const rbImportance = document
    .querySelector('#btn-sort-importance')
    .addEventListener('click', () => sortArticles('importance'));

// Filter inkl. Abgeschlossene
const chbImportance = document
    .querySelector('#chb-erledigt')
    .addEventListener('change', () => filter());

// =========================================================================

// Notizen filtern ====================================================

function filterArticles(liste) {
  // hier fehlt noch die richtige Filterfunktion
  renderHtml(liste);
}


// Daten ins Template schreiben =============================================

function renderArray() {
  const tempausgabe = notes.map(templateAusfuellen);
  sortArticles(tempausgabe); 
}



function templateAusfuellen(note) {
  return `
    <article data-id="${note.id}" data-duedate="${note.duedate}" data-importance="${note.importance}">
       <p class="duedate">${note.duedate}</p>
       <h3 class="ausgabe-titel"> ${note.title}</h3>           
       <p class="importance">${note.importance} </p>
       <button type="button" id="${'btn-edit_' + note.id}" class="edit-button" onclick="editNote(${note.id})">Bearbeiten</button>
       <label for="${'check_notiz_' + note.id}"><input type="checkbox" id="${'check_notiz_' + note.id}" ${checkboxChecked(note.completed)}>
       Erledigt</label>
       <textarea id="ausgabe-description">${note.notiz} </textarea> 
    </article>`
  }



// Daten in <main> einfüllen
function renderHtml(sortierteGefilterteListe) {
  const ausgabeListe = sortierteGefilterteListe.join('');
  document.querySelector('main').innerHTML = ausgabeListe;
}
// bearbeiten-Button =================================================


// richtige Notiz aufrufen aus dem Storage anhand timestamp Id
function editNote(id) {
  sessionStorage.setItem('editid', id);
  location.href = eingabeurl;
  //console.log('edit url');
}



// Initialisierung =====================================================
function init() {
  styleAuslesen();
  renderArray();
}


init();