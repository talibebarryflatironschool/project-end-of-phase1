// Global state
let animals = [];

// Main function to start the application
function main() {
    displayWildlife();
    addEventListeners();
}

// Fetch and display wildlife
async function displayWildlife() {
    try {
        const response = await fetch('http://localhost:3000/animals');
        animals = await response.json();
        renderWildlifeGallery(animals);
    } catch (error) {
        console.error('Error fetching wildlife data:', error);
    }
}

// Render wildlife gallery
function renderWildlifeGallery(animalsToDisplay) {
    const gallery = document.getElementById('wildlife-gallery');
    gallery.innerHTML = animalsToDisplay.map(animal => `
        <div class="animal-card" data-id="${animal.id}">
            <img src="${animal.imageUrl}" alt="${animal.name}">
            <div class="animal-info">
                <h3>${animal.name}</h3>
                <p>Status: ${animal.conservationStatus}</p>
                <button class="like-btn" data-id="${animal.id}">
                    ❤️ ${animal.likes}
                </button>
            </div>
        </div>
    `).join('');
}

// Add event listeners
function addEventListeners() {
    // Click event for animal cards
    document.getElementById('wildlife-gallery').addEventListener('click', handleAnimalClick);
    
    // Change event for conservation status filter
    document.getElementById('status-filter').addEventListener('change', handleStatusFilter);
    
    // Input event for search
    document.getElementById('search-input').addEventListener('input', handleSearch);
    
    // Submit event for adoption form
    document.getElementById('adoption-form').addEventListener('submit', handleAdoptionSubmit);
    
    // Click event for theme toggle
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
}

// Handle animal card click
function handleAnimalClick(event) {
    const card = event.target.closest('.animal-card');
    if (!card) return;

    const animal = animals.find(a => a.id === parseInt(card.dataset.id));
    if (!animal) return;

    const detail = document.getElementById('wildlife-detail');
    detail.innerHTML = `
        <h2>${animal.name}</h2>
        <img src="${animal.imageUrl}" alt="${animal.name}">
        <p class="image-credit">${animal.imageCredit}</p>
        <p><strong>Species:</strong> ${animal.species}</p>
        <p><strong>Conservation Status:</strong> ${animal.conservationStatus}</p>
        <p><strong>Habitat:</strong> ${animal.habitat}</p>
        <p><strong>Population:</strong> ${animal.population}</p>
        <p>${animal.description}</p>
        <button onclick="document.getElementById('adoption-form').classList.remove('hidden')">
            Adopt ${animal.name}
        </button>
    `;
}

// Handle status filter
function handleStatusFilter(event) {
    const status = event.target.value;
    const filteredAnimals = status === 'all' 
        ? animals 
        : animals.filter(animal => animal.conservationStatus === status);
    renderWildlifeGallery(filteredAnimals);
}

// Handle search
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredAnimals = animals.filter(animal => 
        animal.name.toLowerCase().includes(searchTerm)
    );
    renderWildlifeGallery(filteredAnimals);
}

// Handle adoption form submit
function handleAdoptionSubmit(event) {
    event.preventDefault();
    
    // Get form values
    const form = event.target;
    const name = form.querySelector('#adopter-name').value.trim();
    const email = form.querySelector('#adopter-email').value.trim();
    const message = form.querySelector('#adopter-message').value.trim();
    
    // Basic validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Success message
    alert(`Thank you ${name} for your interest in adoption!\nWe will contact you at ${email} soon.\n\nYour message: ${message}`);
    
    // Reset and hide form
    form.reset();
    form.classList.add('hidden');
    
    // Clear the current animal detail view
    document.getElementById('wildlife-detail').innerHTML = '<h2>Select an animal to see details</h2>';
}

// Toggle theme
function toggleTheme() {
    const body = document.body;
    const button = document.getElementById('theme-toggle');
    
    // Toggle theme class and save preference
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        button.textContent = '☀️ Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        button.textContent = '🌙 Dark Mode';
        localStorage.setItem('theme', 'light');
    }
}

// Load saved theme preference
function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const body = document.body;
    const button = document.getElementById('theme-toggle');
    
    if (savedTheme === 'dark') {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        button.textContent = '☀️ Light Mode';
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        button.textContent = '🌙 Dark Mode';
    }
}

// Start the application after DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadThemePreference();
    main();
});