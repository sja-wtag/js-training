class CustomModal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const title = this.getAttribute('title') || 'Modal Title';
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="../custom-modal.css">
      <div class="modal-backdrop">
        <div class="modal-content">
          <span class="modal-close" onclick="this.getRootNode().host.close()">&times;</span>
          <h3>${title}</h3>
          <slot></slot>
        </div>
      </div>
    `;
  }

  open() {
    this.shadowRoot.querySelector('.modal-backdrop').style.display = 'flex';
  }

  close() {
    this.shadowRoot.querySelector('.modal-backdrop').style.display = 'none';
  }
}
customElements.define('custom-modal', CustomModal);
