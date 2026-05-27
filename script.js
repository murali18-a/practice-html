function goToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView();
}

function enlargeImage(imgElement) {
    const overlay = document.getElementById('imageOverlay');
    const enlargedImg = document.getElementById('enlargedImage');
    enlargedImg.src = imgElement.src;
    enlargedImg.alt = imgElement.alt || '';
    overlay.classList.add('show');
    enlargedImg.classList.add('show');
}

function closeEnlargedImage() {
    const overlay = document.getElementById('imageOverlay');
    const enlargedImg = document.getElementById('enlargedImage');
    if (overlay) overlay.classList.remove('show');
    if (enlargedImg) enlargedImg.classList.remove('show');
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeEnlargedImage();
});

function handleFormSubmit(e) {
    e.preventDefault();
    const fullName = (document.getElementById('fullName') || {}).value || '';
    const email = (document.getElementById('email') || {}).value || '';
    const output = document.getElementById('registrationOutput');
    if (output) {
        output.textContent = `Thank you, ${fullName}! Your registration has been received. Confirmation sent to ${email}.`;
        output.classList.add('show');
        setTimeout(() => output.classList.remove('show'), 4000);
    }
    const form = document.getElementById('registrationForm');
    if (form) form.reset();
}

function handleEventTypeChange(value) {
    const fees = {
        music: 'Music Festival - $15',
        sports: 'Sports Event - $25',
        art: 'Art Fair - $10',
        food: 'Food Drive - FREE',
        gardening: 'Gardening Workshop - $5',
        book: 'Book Club - FREE'
    };
    const feeDisplay = document.getElementById('feeDisplay');
    if (!feeDisplay) return;
    if (value && fees[value]) {
        feeDisplay.innerHTML = `<strong>Fee:</strong> ${fees[value]}`;
        feeDisplay.classList.add('show');
    } else {
        feeDisplay.classList.remove('show');
        feeDisplay.innerHTML = '';
    }
}

function countCharacters() {
    const message = (document.getElementById('message') || {}).value || '';
    const el = document.getElementById('charCount');
    if (el) el.textContent = message.length + ' characters';
}

function countFeedbackCharacters() {
    const feedback = (document.getElementById('feedbackText') || {}).value || '';
    const el = document.getElementById('feedbackCharCount');
    if (el) el.textContent = feedback.length + ' characters';
}

const phonePattern = /^\+?[0-9 \-()]{7,20}$/;
function validatePhoneNumber(val) {
    if (!val) return true;
    if (!phonePattern.test(val)) {
        alert('Please enter a valid phone number');
        return false;
    }
    return true;
}

function submitFeedback() {
    const selectedEvent = (document.getElementById('selectedEvent') || {}).value || '';
    const feedbackText = (document.getElementById('feedbackText') || {}).value || '';
    if (!selectedEvent) { alert('Please select an event'); return; }
    if (!feedbackText) { alert('Please provide feedback'); return; }
    const output = document.getElementById('feedbackOutput');
    if (output) {
        output.textContent = 'Thank you for your feedback!';
        output.classList.add('show');
        setTimeout(() => output.classList.remove('show'), 3000);
    }
    const form = document.getElementById('feedbackForm');
    if (form) form.reset();
    const countEl = document.getElementById('feedbackCharCount');
    if (countEl) countEl.textContent = '0 characters';
}

function handleVideoCanPlay() {
    const el = document.getElementById('videoStatus');
    if (!el) return;
    el.textContent = 'Video ready to play!';
    el.classList.add('show');
    setTimeout(() => { el.classList.remove('show'); el.textContent = ''; }, 2000);
}

function saveEventPreference() {
    const selected = (document.getElementById('preferenceSelect') || {}).value || '';
    if (!selected) return;
    localStorage.setItem('preferredEventType', selected);
    const events = { music: 'Music Festival', sports: 'Sports Event', art: 'Art Fair', food: 'Food Drive', gardening: 'Gardening Workshop', book: 'Book Club' };
    const text = events[selected] || '';
    const prefText = document.getElementById('preferenceText');
    if (prefText) prefText.textContent = text;
    const saved = document.getElementById('savedPreference');
    if (saved) saved.style.display = 'block';
    const out = document.getElementById('preferenceOutput');
    if (out) { out.textContent = 'Your preference has been saved!'; out.classList.add('show'); setTimeout(() => out.classList.remove('show'), 2000); }
}

function loadEventPreference() {
    const saved = localStorage.getItem('preferredEventType');
    if (!saved) return;
    const select = document.getElementById('preferenceSelect');
    if (select) select.value = saved;
    const events = { music: 'Music Festival', sports: 'Sports Event', art: 'Art Fair', food: 'Food Drive', gardening: 'Gardening Workshop', book: 'Book Club' };
    const text = events[saved] || '';
    const prefText = document.getElementById('preferenceText');
    if (prefText) prefText.textContent = text;
    const savedDiv = document.getElementById('savedPreference');
    if (savedDiv) savedDiv.style.display = 'block';
}

function clearAllPreferences() {
    localStorage.clear();
    sessionStorage.clear();
    const savedDiv = document.getElementById('savedPreference');
    if (savedDiv) savedDiv.style.display = 'none';
    const out = document.getElementById('preferenceOutput');
    if (out) { out.textContent = 'All preferences cleared!'; out.classList.add('show'); setTimeout(() => out.classList.remove('show'), 2000); }
}

function findNearbyEvents() {
    const geolocationResult = document.getElementById('geolocation-result');
    const errorMessage = document.getElementById('errorMessage');
    if (geolocationResult) geolocationResult.classList.remove('show');
    if (!navigator.geolocation) {
        if (errorMessage) { errorMessage.textContent = 'Geolocation is not supported.'; errorMessage.classList.add('show'); }
        return;
    }
    const options = { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 };
    navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const accuracy = position.coords.accuracy;
        if (geolocationResult) {
            geolocationResult.innerHTML = `<h3>Your Location:</h3><p><strong>Latitude:</strong> ${latitude.toFixed(6)}</p><p><strong>Longitude:</strong> ${longitude.toFixed(6)}</p><p><strong>Accuracy:</strong> ±${accuracy.toFixed(0)} meters</p>`;
            geolocationResult.classList.add('show');
        }
    }, function(error) {
        let errorMsg = 'An error occurred.';
        if (error.code === error.PERMISSION_DENIED) errorMsg = 'Location access denied.';
        else if (error.code === error.POSITION_UNAVAILABLE) errorMsg = 'Location information unavailable.';
        else if (error.code === error.TIMEOUT) errorMsg = 'Location request timed out.';
        if (errorMessage) { errorMessage.textContent = errorMsg; errorMessage.classList.add('show'); }
    }, options);
}

window.addEventListener('load', function() { loadEventPreference(); });

window.addEventListener('beforeunload', function(e) {
    const form = document.getElementById('registrationForm');
    if (!form) return;
    const hasData = Array.from(form.elements).some(el => el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' ? (el.value && el.value.trim() !== '') : false);
    if (hasData) {
        e.returnValue = 'You have unsaved data.';
        return 'You have unsaved data.';
    }
});
