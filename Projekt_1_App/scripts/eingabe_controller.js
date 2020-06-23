
// STYLE SELECTOR ===================================================
function styleAuslesen() {
  if (localStorage.getItem('style') === 'dark') {
    document.body.classList.add('dark-mode');
    styleMenue.value = 'dark';
  } else {
    document.body.classList.remove('dark-mode');
  }
}
// end of STYLE SELECTOR ==============================================


// Formulardaten Inhalte in Speicher schreiben ========================
const formSend = document
  .querySelector('#btn-submit')
  .addEventListener('click', event => {
    event.preventDefault();
    AddNewNote();
  })

// Eingabe abbrechen ===================================================
const btnCancel = document
  .getElementById('#btn-cancel')
  .addEventListener('click', event => {
    event.preventDefault();
    // alle Felder leeren
    resetForm();
  }
  )

  // Alle Formularfelder leeren ========================================
  function resetForm() {
    document.getElementsByTagName("form").reset();
  }

  // Seitenwechsel von Eingabeformular auf Notizenliste ================


// Initialisierung =====================================================
function init() {
  styleAuslesen();
}

init();
//======================================================================