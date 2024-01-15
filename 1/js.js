function createCalendar(elem, year, month) {
    let days = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];
    let d = new Date(year, month - 1, 1);
    let table = '<table><tr><th>' + days.join('</th><th>') + '</th></tr><tr>';

    for (let i = 0; i < d.getDay(); i++) {
        table += '<td></td>';
    }

    while (d.getMonth() === month - 1) {
        table += '<td>' + d.getDate() + '</td>';
        if (d.getDay() % 7 === 6) { 
            table += '</tr><tr>';
        }
        d.setDate(d.getDate() + 1);
    }

    if (d.getDay() !== 0) {
        for (let i = d.getDay(); i < 7; i++) {
            table += '<td></td>';
        }
    }

    table += '</tr></table>';
    elem.innerHTML = table;
}

window.onload = () => {
    createCalendar(document.getElementById('calendar-container'), 2023, 1);
};