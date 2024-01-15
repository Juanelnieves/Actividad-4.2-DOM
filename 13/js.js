document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.getElementById('genres');

    // Mostrar el valor y el texto de la opción seleccionada actualmente
    function showSelectedOption() {
        const selectedOption = selectElement.options[selectElement.selectedIndex];
        alert(`Valor: ${selectedOption.value}, Texto: ${selectedOption.text}`);
    }

    // Añadir una nueva opción
    function addNewOption() {
        const newOption = new Option('Classic', 'classic');
        selectElement.add(newOption);
    }

    // Mostrar la opción seleccionada inicialmente
    showSelectedOption();

    // Añadir la nueva opción "Classic"
    addNewOption();

    // Seleccionar la nueva opción "Classic", sin mostrar alerta
    selectElement.value = 'classic';
});