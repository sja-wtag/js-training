function openModal() {
    document.getElementById('modal').style.display = 'block';
    adjustGridColumns();  // Adjust grid when modal opens
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Draggable modal
const modal = document.getElementById('modal');
const header = document.getElementById('modal-header');
const resizer = document.getElementById('resizer');

let offsetX, offsetY, isDragging = false;

header.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - modal.offsetLeft;
    offsetY = e.clientY - modal.offsetTop;
    document.body.style.userSelect = 'none';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        modal.style.left = `${e.clientX - offsetX}px`;
        modal.style.top = `${e.clientY - offsetY}px`;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    document.body.style.userSelect = 'auto';
});

// Adjust grid layout dynamically
function adjustGridColumns() {
    console.log("resize")
    const modalWidth = modal.offsetWidth;
    const modalItems = document.querySelector('.modal-items');

    if (modalWidth > 800) {
        modalItems.style.gridTemplateColumns = 'repeat(3, 1fr)'; // 3 columns
    } else if (modalWidth > 500) {
        modalItems.style.gridTemplateColumns = 'repeat(2, 1fr)'; // 2 columns
    } else {
        modalItems.style.gridTemplateColumns = '1fr'; // 1 column
    }
}

// Assuming your modal has an ID, e.g., <div id="myModal" class="modal">
const myModal = document.getElementById('modal'); // Or use document.querySelector('.modal');

if (myModal) {
    const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
            if (entry.target === myModal) {
                adjustGridColumns();
            }
        }
    });

    resizeObserver.observe(myModal);

} else {
    console.error("Modal element not found. Make sure its ID or class matches.");
}