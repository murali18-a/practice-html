const appState = {
    events: [
        { id: 1, name: 'Neighborhood Music Night', date: '2026-06-05', category: 'Music', location: 'Park Square', seats: 20, registered: 0, description: 'Live music, food trucks, and family fun.' },
        { id: 2, name: 'Volunteer Cleanup', date: '2026-05-20', category: 'Community', location: 'River Walk', seats: 15, registered: 5, description: 'Help keep our river and trails clean.' },
        { id: 3, name: 'Baking Workshop', date: '2026-07-02', category: 'Workshop', location: 'Community Center', seats: 12, registered: 12, description: 'Hands-on baking with local chefs.' },
        { id: 4, name: 'Art Festival', date: '2026-06-18', category: 'Art', location: 'Main Street', seats: 30, registered: 10, description: 'Local artists, live demos, and family activities.' }
    ],
    registrations: []
};

function pageReady() {
    console.log('Welcome to the Community Portal');
    alert('Community Portal page fully loaded');
    const exercise = document.body.dataset.ex;
    const output = document.querySelector('#output');
    if (!exercise || !output) {
        return;
    }
    switch (exercise) {
        case '1': renderExercise1(output); break;
        case '2': renderExercise2(output); break;
        case '3': renderExercise3(output); break;
        case '4': renderExercise4(output); break;
        case '5': renderExercise5(output); break;
        case '6': renderExercise6(output); break;
        case '7': renderExercise7(output); break;
        case '8': renderExercise8(output); break;
        case '9': renderExercise9(output); break;
        case '10': renderExercise10(output); break;
        case '11': renderExercise11(output); break;
        case '12': renderExercise12(output); break;
        case '13': renderExercise13(output); break;
        case '14': renderExercise14(output); break;
        default: output.textContent = 'Exercise page not found.';
    }
}

function renderExercise1(output) {
    const paragraph = document.createElement('p');
    paragraph.textContent = 'This exercise uses an external JavaScript file and logs to the console.';
    output.appendChild(paragraph);
}

function renderExercise2(output) {
    const eventName = 'Community Jazz Evening';
    const eventDate = '2026-06-05';
    let availableSeats = 25;
    availableSeats--;
    const message = `Event: ${eventName} | Date: ${eventDate} | Seats left: ${availableSeats}`;
    const paragraph = document.createElement('p');
    paragraph.textContent = message;
    output.appendChild(paragraph);
}

function renderExercise3(output) {
    const upcoming = [];    
    const now = new Date();
    appState.events.forEach(event => {
        if (new Date(event.date) > now && event.seats - event.registered > 0) {
            upcoming.push(event);
        }
    });
    if (upcoming.length === 0) {
        output.textContent = 'No upcoming events with available seats.';
        return;
    }
    upcoming.forEach(event => {
        const card = document.createElement('div');
        card.className = 'event-card';
        card.textContent = `${event.name} on ${event.date} (${event.seats - event.registered} seats left)`;
        output.appendChild(card);
    });
    try {
        handleRegistration(upcoming[0]);
    } catch (error) {
        const errorMessage = document.createElement('p');
        errorMessage.className = 'error';
        errorMessage.textContent = `Registration error: ${error.message}`;
        output.appendChild(errorMessage);
    }
}

function handleRegistration(event) {
    if (!event) {
        throw new Error('No event selected for registration');
    }
    if (event.registered >= event.seats) {
        throw new Error('Event is full');
    }
    event.registered += 1;
    console.log(`Registered to ${event.name}. Total registered: ${event.registered}`);
}

function renderExercise4(output) {
    const registerCounts = {};
    function addEvent(event) {
        appState.events.push(event);
    }
    function registerUser(eventId, user) {
        const event = appState.events.find(item => item.id === eventId);
        if (!event) throw new Error('Event not found');
        if (event.registered >= event.seats) throw new Error('Event full');
        event.registered += 1;
        appState.registrations.push({ ...user, eventId });
        const key = event.category;
        registerCounts[key] = (registerCounts[key] || 0) + 1;
        return registerCounts;
    }
    function filterEventsByCategory(category, callback) {
        const filtered = appState.events.filter(e => e.category === category);
        return callback(filtered);
    }
    addEvent({ id: 5, name: 'Gardening Workshop', date: '2026-08-01', category: 'Workshop', location: 'Greenhouse', seats: 18, registered: 2, description: 'Learn seasonal planting.' });
    const result = filterEventsByCategory('Workshop', list => list.map(item => item.name).join(', '));
    const stats = registerUser(5, { name: 'Asha Patel', email: 'asha@example.com' });
    output.innerHTML = `<p>Workshops available: ${result}</p><p>Total registrations for Workshop category: ${stats.Workshop}</p>`;
}

function renderExercise5(output) {
    class Event {
        constructor(name, date, seats) {
            this.name = name;
            this.date = date;
            this.seats = seats;
            this.registered = 0;
        }
    }
    Event.prototype.checkAvailability = function() {
        return this.registered < this.seats;
    };
    const sample = new Event('Forest Hike', '2026-06-25', 20);
    const availability = sample.checkAvailability() ? 'Available' : 'Full';
    const entries = Object.entries(sample).map(([key, value]) => `${key}: ${value}`).join('; ');
    output.innerHTML = `<p>${sample.name} availability: ${availability}</p><p>Fields: ${entries}</p>`;
}

function renderExercise6(output) {
    const extraEvents = [
        { name: 'Choir Concert', category: 'Music' },
        { name: 'Digital Art Show', category: 'Art' },
        { name: 'Outdoor Yoga', category: 'Workshop' }
    ];
    appState.events.push(...extraEvents.map((ev, index) => ({ id: 10 + index, ...ev, date: '2026-06-30', seats: 20, registered: 4, location: 'Local Hall', description: 'Community event.' })));
    const musicEvents = appState.events.filter(ev => ev.category === 'Music');
    const cards = musicEvents.map(ev => `• ${ev.name} (${ev.category})`).join('\n');
    output.innerHTML = `<pre>${cards}</pre>`;
}

function renderExercise7(output) {
    const eventsContainer = document.createElement('div');
    appState.events.forEach(event => {
        const card = document.createElement('div');
        card.className = 'event-card';
        card.innerHTML = `<h3>${event.name}</h3><p>${event.description || 'No description available.'}</p><p>Date: ${event.date}</p><p>Location: ${event.location}</p><p>Seats left: ${event.seats - event.registered}</p>`;
        const button = document.createElement('button');
        button.textContent = 'Register';
        button.onclick = () => registerForEvent(event.id, card);
        card.appendChild(button);
        eventsContainer.appendChild(card);
    });
    output.appendChild(eventsContainer);
}

function registerForEvent(eventId, card) {
    const event = appState.events.find(e => e.id === eventId);
    if (!event || event.registered >= event.seats) {
        alert('Cannot register: event full or missing.');
        return;
    }
    event.registered += 1;
    const seatsText = card.querySelector('p:nth-child(5)');
    if (seatsText) seatsText.textContent = `Seats left: ${event.seats - event.registered}`;
    alert(`Registered for ${event.name}`);
}

function renderExercise8(output) {
    const controls = document.createElement('div');
    controls.innerHTML = `
        <label>Filter category</label>
        <select id="filterCategory">
            <option value="all">All</option>
            <option value="Music">Music</option>
            <option value="Workshop">Workshop</option>
            <option value="Art">Art</option>
            <option value="Community">Community</option>
        </select>
        <label>Quick search</label>
        <input id="quickSearch" placeholder="Type event name..." />
        <div id="eventsList"></div>
    `;
    output.appendChild(controls);
    const select = document.getElementById('filterCategory');
    const search = document.getElementById('quickSearch');
    const eventsList = document.getElementById('eventsList');
    function refresh() {
        const category = select.value;
        const query = search.value.toLowerCase();
        const filtered = appState.events.filter(event => {
            const matchCategory = category === 'all' || event.category === category;
            const matchSearch = event.name.toLowerCase().includes(query);
            return matchCategory && matchSearch;
        });
        eventsList.innerHTML = '';
        filtered.forEach(event => {
            const card = document.createElement('div');
            card.className = 'event-card';
            card.textContent = `${event.name} - ${event.category} - ${event.date}`;
            const btn = document.createElement('button');
            btn.textContent = 'Register';
            btn.onclick = () => registerForEvent(event.id, card);
            card.appendChild(btn);
            eventsList.appendChild(card);
        });
    }
    select.onchange = refresh;
    search.onkeydown = refresh;
    refresh();
}

function renderExercise9(output) {
    const status = document.createElement('p');
    status.className = 'loading';
    status.textContent = 'Loading event data...';
    output.appendChild(status);
    fetch('events.json')
        .then(response => response.json())
        .then(data => {
            status.textContent = 'Events loaded successfully.';
            const list = document.createElement('ul');
            data.forEach(event => {
                const item = document.createElement('li');
                item.textContent = `${event.name} - ${event.date}`;
                list.appendChild(item);
            });
            output.appendChild(list);
        })
        .catch(error => {
            status.className = 'error';
            status.textContent = `Failed to load events: ${error.message}`;
        });
}

async function renderExercise10(output) {
    const cloneList = [...appState.events];
    function formatEvent({ name, date, category = 'General' }) {
        return `${name} (${category}) on ${date}`;
    }
    const eventDescriptions = cloneList.map(formatEvent);
    output.innerHTML = `<pre>${eventDescriptions.join('\n')}</pre>`;
}

function renderExercise11(output) {
    output.innerHTML = `
        <form id="registrationForm">
            <label>Name</label>
            <input name="name" type="text" />
            <label>Email</label>
            <input name="email" type="email" />
            <label>Select event</label>
            <select name="eventId">
                ${appState.events.map(event => `<option value="${event.id}">${event.name}</option>`).join('')}
            </select>
            <button type="submit">Submit Registration</button>
            <p id="formMessage"></p>
        </form>
    `;
    const form = document.getElementById('registrationForm');
    const message = document.getElementById('formMessage');
    form.onsubmit = function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const name = formData.get('name').trim();
        const email = formData.get('email').trim();
        const eventId = Number(formData.get('eventId'));
        if (!name || !email) {
            message.className = 'error';
            message.textContent = 'Please enter your name and email.';
            return;
        }
        message.className = 'success';
        message.textContent = `Registered ${name} for event ID ${eventId}.`;
    };
}

function renderExercise12(output) {
    output.innerHTML = `
        <button id="submitRegistration">Send registration to server</button>
        <p id="ajaxMessage"></p>
    `;
    const btn = document.getElementById('submitRegistration');
    const ajaxMessage = document.getElementById('ajaxMessage');
    btn.onclick = function() {
        ajaxMessage.className = 'loading';
        ajaxMessage.textContent = 'Sending registration...';
        const payload = { name: 'Riya', email: 'riya@example.com', eventId: 1 };
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            })
                .then(response => {
                    if (!response.ok) throw new Error('Network response not OK');
                    return response.json();
                })
                .then(data => {
                    ajaxMessage.className = 'success';
                    ajaxMessage.textContent = `Server response received. Registration ID: ${data.id}`;
                })
                .catch(error => {
                    ajaxMessage.className = 'error';
                    ajaxMessage.textContent = `Registration failed: ${error.message}`;
                });
        }, 1200);
    };
}

function renderExercise13(output) {
    output.innerHTML = `
        <p>Open browser DevTools Console and Network tab to inspect registration flow.</p>
        <button id="debugSubmit">Debug registration</button>
        <pre id="debugLog"></pre>
    `;
    const debugSubmit = document.getElementById('debugSubmit');
    const debugLog = document.getElementById('debugLog');
    debugSubmit.onclick = () => {
        debugLog.textContent = 'Step 1: Preparing request...\nStep 2: Sending payload...\nStep 3: Checking response...';
        console.log('Debug: form submit handler started');
        console.log('Debug: current events count', appState.events.length);
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: 'Debug User', eventId: 1 })
        })
            .then(response => response.json())
            .then(data => {
                debugLog.textContent += `\nStep 4: Response received. id=${data.id}`;
                console.log('Debug: fetch payload sent', data);
            })
            .catch(error => {
                debugLog.textContent += `\nError: ${error.message}`;
                console.error('Debug fetch error', error);
            });
    };
}

function renderExercise14(output) {
    output.innerHTML = `
        <p id="jqueryStatus">Loading jQuery functions...</p>
        <div id="jqueryEvents"></div>
        <p>Benefit of frameworks: they make UI state and data updates easier to manage at scale.</p>
    `;
    if (window.jQuery) {
        $('#jqueryStatus').text('jQuery loaded successfully.');
        const container = $('#jqueryEvents');
        appState.events.slice(0, 3).forEach(event => {
            const card = $(
                `<div class="event-card"><h3>${event.name}</h3><button class="fadeBtn">View</button></div>`
            );
            card.find('.fadeBtn').click(() => card.fadeOut(400, () => card.fadeIn(400)));
            container.append(card);
        });
    } else {
        document.getElementById('jqueryStatus').textContent = 'jQuery failed to load. Please check connectivity.';
    }
}

document.addEventListener('DOMContentLoaded', pageReady);
