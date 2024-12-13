document.addEventListener("DOMContentLoaded", () => {
    const feedItems = document.querySelectorAll('.feed-item');
    const feedContainer = document.getElementById('feed');
    const articles = {
        tech: ['Articolo su Intelligenza Artificiale', 'Innovazioni nei dispositivi mobili', 'Il futuro della robotica'],
        travel: ['Migliori mete del 2024', 'Gita in Cison di Valmarino', 'Città e paesi poco conosciuti da visitare in Italia'],
        lifestyle: ['Consigli e lifestyle? Sei nel posto giusto!', 'consigli di bellezza, lifestyle e benessere', 'Sette buone pratiche per riappropriarsi della routine con gentilezza']
    };

    // Funzione per mostrare articoli con transizione
    function displayArticles(category) {
        if (articles[category]) {
            feedContainer.classList.add('fade-out'); // Effetto di dissolvenza
            setTimeout(() => {
                feedContainer.innerHTML = `
                    <h2>Articoli su ${capitalize(category)}:</h2>
                    <ul class="article-list">
                        ${articles[category].map(article => `<li>${article}</li>`).join('')}
                    </ul>
                    <button id="reset-feed">Torna al Feed</button>
                `;
                feedContainer.classList.remove('fade-out');
                feedContainer.classList.add('fade-in');
                addResetListener(); // Aggiungi il listener al pulsante di reset
            }, 300);
        } else {
            feedContainer.innerHTML = `<p>Nessun articolo disponibile per la categoria: <strong>${category}</strong>.</p>`;
        }
    }

    // Funzione per resettare il feed
    function resetFeed() {
        feedContainer.classList.add('fade-out');
        setTimeout(() => {
            feedContainer.innerHTML = `
                <div class="feed-item" data-category="tech">Articolo su tecnologia</div>
                <div class="feed-item" data-category="travel">Articolo sui viaggi</div>
                <div class="feed-item" data-category="lifestyle">Articolo su migliorare il tuo livestyle</div>
            `;
            feedContainer.classList.remove('fade-out');
            feedContainer.classList.add('fade-in');
            attachFeedListeners(); // Riassegna i listener ai nuovi elementi
        }, 300);
    }

    // Funzione per aggiungere listener al feed
    function attachFeedListeners() {
        const newFeedItems = document.querySelectorAll('.feed-item');
        newFeedItems.forEach(item => {
            item.addEventListener('click', () => {
                const category = item.getAttribute('data-category');
                displayArticles(category);
            });
        });
    }

    // Listener del pulsante "Torna al Feed"
    function addResetListener() {
        const resetButton = document.getElementById('reset-feed');
        if (resetButton) {
            resetButton.addEventListener('click', resetFeed);
        }
    }

    // Funzione per capitalizzare la prima lettera
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // Effetto fade iniziale
    feedContainer.classList.add('fade-in');

    // Assegna i listener iniziali agli elementi del feed
    attachFeedListeners();
});
