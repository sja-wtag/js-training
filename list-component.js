
class ListComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
          <style>
            .list-container {
              display: flex;
              flex-direction: column;
              gap: 12px;
            }

            .item {
              display: flex;
              align-items: center;
              gap: 10px;
              background-color: #f0f8ff;
              padding: 12px;
              border-radius: 6px;
              border-left: 4px solid #007BFF;
              font-size: 1.1rem;
              transition: background-color 0.3s;
            }

            .emoji {
              font-size: 1.5rem;
            }

            .no-results {
              text-align: center;
              color: #777;
              font-style: italic;
              padding: 10px 0;
            }
          </style>
          <div class="list-container" id="listContainer"></div>
        `;

        this.items = [
            { name: 'Apple', emoji: '🍎' },
            { name: 'Banana', emoji: '🍌' },
            { name: 'Orange', emoji: '🍊' },
            { name: 'Grapes', emoji: '🍇' },
            { name: 'Pineapple', emoji: '🍍' }
        ];

        this.filteredItems = [...this.items];
        this.listContainer = this.shadowRoot.getElementById('listContainer');
    }

    connectedCallback() {
        this.showImage = this.getAttribute('showimage') === 'true';

        this.render();

        document.getElementById('searchInput')?.addEventListener('input', (e) => {
            this.filterItems(e.target.value);
        });
    }

    filterItems(query) {
        const lowerQuery = query.toLowerCase();
        this.filteredItems = this.items.filter(item =>
            item.name.toLowerCase().includes(lowerQuery)
        );
        this.render();
    }

    render() {
        this.listContainer.innerHTML = '';

        if (this.filteredItems.length === 0) {
            this.listContainer.innerHTML = '<p class="no-results">🚫 No fruits match your search.</p>';
            return;
        }

        this.filteredItems.forEach(item => {
            const div = document.createElement('div');
            div.className = 'item';

            if (this.showImage) {
                const emoji = document.createElement('span');
                emoji.className = 'emoji';
                emoji.textContent = item.emoji;
                div.appendChild(emoji);
            }

            const nameSpan = document.createElement('span');
            nameSpan.textContent = item.name;

            div.appendChild(nameSpan);
            this.listContainer.appendChild(div);
        });
    }
}

customElements.define('list-component', ListComponent);