class CustomButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); // Shadow DOM
    }

    connectedCallback() {
        const label = this.getAttribute('label') || 'Button';
        const color = this.getAttribute('color') || 'blue';
        
        this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="custom-button.css">
      <button class="custom-button ${color}">${label}</button>
    `;

        this.shadowRoot.querySelector('button').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('custom-click', {
                detail: { message: `${label} button clicked` },
                bubbles: true,
                composed: true
            }));
        });
    }
}

customElements.define('custom-button', CustomButton);
