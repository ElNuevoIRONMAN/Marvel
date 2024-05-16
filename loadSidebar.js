// Función para cargar el contenido del archivo HTML externo
function loadSidebar() {
    // Realiza una solicitud HTTP para obtener el contenido de sidebar.html
    fetch('sidebar.html')
        .then(response => {
            // Verifica que la solicitud fue exitosa
            if (!response.ok) {
                throw new Error(`Error al cargar el archivo: ${response.statusText}`);
            }
            return response.text(); // Obtiene el texto del archivo HTML
        })
        .then(html => {
            // Inserta el contenido HTML en el contenedor especificado
            const container = document.getElementById('right-column-container');
            if (container) {
                container.innerHTML = html;
            } else {
                console.error('No se encontró el contenedor para insertar el contenido.');
            }
        })
        .catch(error => {
            console.error('No se pudo cargar el archivo HTML:', error);
        });
}

// Llama a la función para cargar el contenido de sidebar.html cuando se carga la página
document.addEventListener('DOMContentLoaded', loadSidebar);
