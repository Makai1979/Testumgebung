$(document).ready(() => {

    if(localStorage.getItem('students') != null) { // != -> Ungleich
        var array = JSON.parse(localStorage.getItem('students'));
        $('#studentsCount').text(array.length);

    }
})
