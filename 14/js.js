const editableDiv = document.getElementById('editableDiv');

        editableDiv.addEventListener('click', function() {
            // Crear el textarea solo si no existe
            if (!editableDiv.querySelector('textarea')) {
                const textarea = document.createElement('textarea');
                textarea.style.width = '100%';
                textarea.style.height = '50px';
                textarea.value = editableDiv.innerHTML; // Usar innerHTML como texto

                function updateDiv() {
                    editableDiv.innerHTML = textarea.value; // Actualizar el HTML del div
                    editableDiv.removeChild(textarea); // Remover el textarea
                }

                textarea.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        updateDiv();
                    }
                });

                textarea.addEventListener('blur', updateDiv);

                editableDiv.innerHTML = '';
                editableDiv.appendChild(textarea);
                textarea.focus();
            }
        });