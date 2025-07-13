document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('myInput');
    const optionsBox = document.getElementById('dropdownOptions');
    const options = optionsBox.querySelectorAll('.dropdown-option');
  
    input.addEventListener('focus', () => {
      console.log("focused");
      optionsBox.style.display = 'block';
    });
  
    input.addEventListener('blur', () => {
        console.log("blurred");
      // Delay hiding to allow option click
      setTimeout(() => {
        optionsBox.style.display = 'none';
      }, 150);
    });
  
    options.forEach(option => {
      option.addEventListener('click', () => {
        input.value = option.textContent;
        optionsBox.style.display = 'none';
      });
    });
  });
  