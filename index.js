document.addEventListener('DOMContentLoaded', () => {
    const themeCheckbox = document.getElementById('theme-checkbox');
    const body = document.body;
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('.search-input');
    const charactersContainer = document.getElementById('characters-container');

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

    const renderCharacters = (characters) => {
        charactersContainer.innerHTML = '';
        if (characters.length === 0) {
            charactersContainer.innerHTML = '<p class="no-results">No se encontraron personajes con ese nombre.</p>';
            return;
        }

        characters.forEach(character => {
            const characterElement = document.createElement('article');
            characterElement.classList.add('character');
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

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = searchInput.value.trim();
        fetchCharacters(searchTerm);
    });

    fetchCharacters();

});
