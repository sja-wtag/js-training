class CustomSelectDropdown extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    get data() {
        return JSON.parse(this.getAttribute('data') || '[]');
    }

    get multiple() {
        return this.hasAttribute('multiple');
    }

    get nested() {
        return this.hasAttribute('nested');
    }

    get useCheckbox() {
        return this.hasAttribute('checkbox');
    }

    get useRadio() {
        return this.hasAttribute('radio');
    }

    render() {
        const style = `
            <link rel="stylesheet" href="custom-select-dropdown.css">
        `;

        const list = this.renderOptions(this.data);

        const template = `
            ${style}
            <div class="dropdown">
                <div class="dropdown-selected">Select...</div>
                <div class="dropdown-list hidden">${list}</div>
            </div>
        `;

        this.shadowRoot.innerHTML = template;
        this.addListeners();
    }

    renderOptions(data, level = 0) {
        return data.map(item => {
            const hasChildren = this.nested && item.children?.length > 0;
            const inputType = this.useCheckbox ? 'checkbox' : (this.useRadio ? 'radio' : (this.multiple ? 'checkbox' : 'radio'));
            const inputName = this.useRadio || (!this.multiple && !this.useCheckbox) ? 'dropdown-option' : item.value;

            const padding = level * 15;
            const option = `
                <div class="dropdown-item" style="padding-left: ${padding}px;">
                    <label>
                        <input 
                            type="${inputType}" 
                            name="${inputName}" 
                            value="${item.value}">
                        ${item.label}
                    </label>
                </div>
            `;

            const children = hasChildren ? this.renderOptions(item.children, level + 1) : '';
            return option + children;
        }).join('');
    }

    addListeners() {
        const selected = this.shadowRoot.querySelector('.dropdown-selected');
        const list = this.shadowRoot.querySelector('.dropdown-list');

        selected.addEventListener('click', () => {
            list.classList.toggle('hidden');
        });

        this.shadowRoot.querySelectorAll('input').forEach(input => {
            input.addEventListener('change', () => {
                const selectedValues = [...this.shadowRoot.querySelectorAll('input:checked')]
                    .map(input => input.value);
                selected.textContent = selectedValues.length ? selectedValues.join(', ') : 'Select...';
            });
        });

        document.addEventListener('click', (e) => {
            if (!this.contains(e.target)) {
                list.classList.add('hidden');
            }
        });
    }
}

customElements.define('custom-select-dropdown', CustomSelectDropdown);
