class CustomCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const title = this.getAttribute('title') || 'Card';
    const theme = this.getAttribute('theme') || '';
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="../custom-card.css">
      <div class="card ${theme}">
        <h3>${title}</h3>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('custom-card', CustomCard);
