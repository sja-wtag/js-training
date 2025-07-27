class ModalComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
        <style>
          :host {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 9999;
          }

          :host(.visible) {
            display: flex;
          }

          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.3);
            backdrop-filter: none;
            z-index: 1;
          }

          .modal {
            position: relative;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            min-width: 300px;
            min-height: 150px;
            z-index: 2;
            resize: none;
            overflow: auto;
            cursor: default;
          }

          .resizable {
            resize: both;
            overflow: auto;
          }

          .header {
            cursor: move;
            user-select: none;
            font-weight: bold;
            margin-bottom: 10px;
          }

          .close-btn {
            position: absolute;
            top: 10px;
            right: 12px;
            font-size: 18px;
            cursor: pointer;
            display: none;
          }

          .close-btn.visible {
            display: block;
          }
        </style>
        <div class="overlay"></div>
        <div class="modal" id="modal">
          <div class="header" id="dragHandle">Modal Header</div>
          <span class="close-btn" id="closeBtn">❌</span>
          <div class="content">
            <slot></slot>
          </div>
        </div>
      `;
    }

    connectedCallback() {
        this.modal = this.shadowRoot.getElementById('modal');
        this.overlay = this.shadowRoot.querySelector('.overlay');
        this.closeBtn = this.shadowRoot.getElementById('closeBtn');
        this.dragHandle = this.shadowRoot.getElementById('dragHandle');

        // Attributes
        this.showClose = this.getAttribute('closebutton') !== 'false';
        this.enableBlur = this.getAttribute('blur') === 'true';
        this.isDraggable = this.getAttribute('draggable') === 'true';
        this.isResizable = this.getAttribute('resizable') === 'true';

        // Apply styles and listeners
        if (this.showClose) {
            this.closeBtn.classList.add('visible');
            this.closeBtn.addEventListener('click', () => this.close());
        }

        if (this.enableBlur) {
            this.overlay.style.backdropFilter = 'blur(5px)';
        }

        if (this.isResizable) {
            this.modal.classList.add('resizable');
        }

        if (this.isDraggable) {
            this.makeDraggable();
        } else {
            this.dragHandle.style.display = 'none';
        }

        // Clicking outside modal closes it (optional)
        this.overlay.addEventListener('click', () => this.close());
    }

    // Methods for external control
    open() {
        this.classList.add('visible');
    }

    close() {
        this.classList.remove('visible');
    }

    // Drag logic
    makeDraggable() {
        let offsetX = 0, offsetY = 0, isDragging = false;

        this.dragHandle.addEventListener('mousedown', (e) => {
            isDragging = true;
            offsetX = e.clientX - this.modal.getBoundingClientRect().left;
            offsetY = e.clientY - this.modal.getBoundingClientRect().top;
            document.addEventListener('mousemove', drag);
            document.addEventListener('mouseup', stopDrag);
        });

        const drag = (e) => {
            if (!isDragging) return;
            this.modal.style.position = 'absolute';
            this.modal.style.top = `${e.clientY - offsetY}px`;
            this.modal.style.left = `${e.clientX - offsetX}px`;
        };

        const stopDrag = () => {
            isDragging = false;
            document.removeEventListener('mousemove', drag);
            document.removeEventListener('mouseup', stopDrag);
        };
    }
}

customElements.define('modal-component', ModalComponent);