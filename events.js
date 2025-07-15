document.addEventListener('DOMContentLoaded', () => {
    const clickBtn = document.getElementById('clickBtn');
    const textInput = document.getElementById('textInput');
    const box = document.getElementById('box');

    // Mouse event
    clickBtn.addEventListener('click', () => {
        alert('Button clicked!');
    });

    // Keyboard event
    textInput.addEventListener('keydown', (e) => {
        console.log(`Key pressed: ${e.key}`);
    });

    // Focus & Blur
    textInput.addEventListener('focus', () => {
        console.log('Input focused');
    });
    textInput.addEventListener('blur', () => {
        console.log('Input blurred');
    });

    // Mouseover
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'orange';
        box.textContent = 'Mouse Over!';
    });

    // Mouseout
    box.addEventListener('mouseout', () => {
        box.style.backgroundColor = 'lightblue';
        box.textContent = 'Hover me';
    });

    // Window Resize
    window.addEventListener('resize', () => {
        console.log('Window resized');
    });

    // Clipboard
    textInput.addEventListener('paste', () => {
        console.log('Pasted content!');
    });

    document.getElementById('copyBtn').addEventListener('click', () => {
        const input = document.getElementById('copyText');
        input.select();
        document.execCommand('copy');

        const originalText = document.getElementById('copyBtn').textContent;
        document.getElementById('copyBtn').textContent = "Copied!";
        setTimeout(() => {
            document.getElementById('copyBtn').textContent = originalText;
        }, 1000);
    });
});

document.querySelectorAll('.ripple-button').forEach(button => {
    button.addEventListener('click', function (e) {
        const circle = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        circle.style.width = circle.style.height = `${size}px`;
        circle.style.left = `${e.clientX - rect.left - size / 2}px`;
        circle.style.top = `${e.clientY - rect.top - size / 2}px`;
        this.appendChild(circle);

        setTimeout(() => circle.remove(), 600);
    });
});

