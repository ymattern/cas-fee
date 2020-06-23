
// STYLE SELECTOR ===================================================
function styleAuslesen() {
  if (localStorage.getItem('style') === 'dark') {
    document.body.classList.add('dark-mode');
    styleMenue.value = 'dark';
  } else {
    document.body.classList.remove('dark-mode');
  }
}
// end of STYLE SELECTOR================================================


// Formulardaten Inhalte in Speicher schreiben========================
const formSend = document
  .querySelector('#btn-submit')
  .addEventListener('click', event => {
    event.preventDefault();
    AddNewNote();
  })




// Initialisierung =====================================================
function init() {
  styleAuslesen();
}

init();
//======================================================================