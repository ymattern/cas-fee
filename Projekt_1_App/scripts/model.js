// Testdaten

const notes = [
    {"id": "123456", "duedate": "712345", "importance": 5, "completed": false, "title": "Notiz 1", "notiz": "erste Notiz"},
    {"id": "123457", "duedate": "712346", "importance": 3, "completed": false, "title": "Notiz 2", "notiz": "zweite Notiz"},
    {"id": "123458", "duedate": "712347", "importance": 1, "completed": true, "title": "Notiz 3", "notiz": "dritte Notiz"},
    {"id": "123459", "duedate": "712348", "importance": 4, "completed": false, "title": "Notiz 4", "notiz": "vierte Notiz"},
    {"id": "123460", "duedate": "712349", "importance": 5, "completed": true, "title": "Notiz 5", "notiz": "fuenfte Notiz"}
 ];



// Datentransformation 

//Checkbox markieren für abgeschlossene Notizen
function checkboxChecked(check) {
    if(check === true) {return 'checked'} else {return ''};
}





// Neue Notiz zu Liste hinzufügen
function AddNewNote() {
    notes.push({
        "id": generateId(), 
        "duedate": document.querySelector('#duedate').value, 
        "importance": document.querySelector('#importance').value, 
        "completed": false,
        "title": document.querySelector('#title').value, 
        "notiz": document.querySelector('#description').value
    });
    console.log(notes);
}

// Individuelle Notizen-ID generieren
function generateId() {
    const d = new Date();
    return d.getTime();
}
