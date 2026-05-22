// View Navigation
document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and views
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
        
        // Add active class to clicked button and corresponding view
        button.classList.add('active');
        const targetId = button.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});

// Participant Submission Flow
function submitApplication() {
    const form = document.getElementById('submission-form');
    const successMsg = document.getElementById('submission-success');
    
    // Animate form out and success message in
    form.style.opacity = '0';
    setTimeout(() => {
        form.classList.add('hidden');
        successMsg.classList.remove('hidden');
        successMsg.style.opacity = '0';
        setTimeout(() => {
            successMsg.style.opacity = '1';
        }, 50);
    }, 300);
}

function resetForm() {
    const form = document.getElementById('submission-form');
    const successMsg = document.getElementById('submission-success');
    
    form.reset();
    
    successMsg.style.opacity = '0';
    setTimeout(() => {
        successMsg.classList.add('hidden');
        form.classList.remove('hidden');
        form.style.opacity = '0';
        setTimeout(() => {
            form.style.opacity = '1';
        }, 50);
    }, 300);
}

// Judging Portal Scoring
function updateScore(slider, scoreId) {
    document.getElementById(scoreId).innerText = slider.value;
    calculateTotal();
}

function calculateTotal() {
    const sliders = document.querySelectorAll('.range-slider');
    let total = 0;
    sliders.forEach(slider => {
        total += parseInt(slider.value);
    });
    
    document.getElementById('total-score').innerText = `${total} / 100`;
}

// Modal Logic
function openInviteModal() {
    document.getElementById('invite-modal').classList.add('active');
}

function closeInviteModal() {
    document.getElementById('invite-modal').classList.remove('active');
}

// File Upload interaction simulation
const fileInput = document.getElementById('file-upload');
if (fileInput) {
    fileInput.addEventListener('change', (e) => {
        const area = document.querySelector('.file-upload-area p');
        if (e.target.files.length > 0) {
            area.innerText = `Selected file: ${e.target.files[0].name}`;
            area.style.color = 'var(--mcx-blue)';
        } else {
            area.innerText = 'Drag and drop your files here or click to browse';
            area.style.color = '';
        }
    });
}
