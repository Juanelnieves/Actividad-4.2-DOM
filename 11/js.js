document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('.selectable li');

    listItems.forEach(item => {
        item.addEventListener('click', function(event) {
            // Previene que se clicke predeterminadamente
            event.preventDefault();

            if (event.ctrlKey || event.metaKey) {
                // cntrl O cmd para multi-select
                this.classList.toggle('selected');
            } else {
                // Desseleccionar los demas
                listItems.forEach(li => {
                    li.classList.remove('selected');
                });
                // Seleccionar el clickado
                this.classList.add('selected');
            }
        });
    });
});
