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

    
  });
  