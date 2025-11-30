document.addEventListener('DOMContentLoaded', () => {
    const themeCheckbox = document.getElementById('theme-checkbox');
    const body = document.body;
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('.search-input');
    const charactersContainer = document.getElementById('characters-container');

    // --- Lógica del Tema ---
    const applyTheme = (isDark) => {
        if (isDark) {
            body.classList.add('dark-mode');
            themeCheckbox.checked = true;
        } else {
            body.classList.remove('dark-mode');
            themeCheckbox.checked = false;
        }
    };

    themeCheckbox.addEventListener('change', () => {
        const isDark = themeCheckbox.checked;
        applyTheme(isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    const savedTheme = localStorage.getItem('theme');
    applyTheme(savedTheme === 'dark');

    // --- Lógica de la API y renderizado ---
    const renderCharacters = (characters) => {
        charactersContainer.innerHTML = ''; // Limpia el contenedor
        if (characters.length === 0) {
            charactersContainer.innerHTML = '<p class="no-results">No se encontraron personajes con ese nombre.</p>';
            return;
        }

        characters.forEach(character => {
            const characterElement = document.createElement('article');
            characterElement.classList.add('character');
            // Usando la estructura de tarjeta mejorada
            characterElement.innerHTML = `
                <img src="${character.image}" alt="Imagen de ${character.name}">
                <div class="character-info">
                    <h2>${character.name}</h2>
                    <p><strong>Status:</strong> ${character.status}</p>
                    <p><strong>Species:</strong> ${character.species}</p>
                </div>
            `;
            charactersContainer.appendChild(characterElement);
        });
    };

    const fetchCharacters = (name = '') => {
        const apiUrl = `https://rickandmortyapi.com/api/character/?name=${name}`;
        
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    // Si la API devuelve un error (ej. 404), lo manejamos como si no hubiera resultados
                    return Promise.resolve({ results: [] });
                }
                return response.json();
            })
            .then(data => {
                renderCharacters(data.results || []);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                charactersContainer.innerHTML = '<p class="no-results">Ocurrió un error al buscar los personajes.</p>';
            });
    };

    // --- Evento de Búsqueda ---
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que la página se recargue
        const searchTerm = searchInput.value.trim();
        fetchCharacters(searchTerm);
    });

    // Carga inicial de todos los personajes
    fetchCharacters();
});