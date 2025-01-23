document.addEventListener('DOMContentLoaded', () => {
    const mapContainer = document.getElementById('map-container');
    const stateNameElement = document.getElementById('state-name');
    const destinationInfoElement = document.getElementById('destination-info');
    const infoPanel = document.getElementById('info-panel');

    fetch("http://localhost:3000/destinations")
    .then(response => response.json())
    .then(destinations => {
        console.log (destinations)
        destinations.forEach(destination => {
            const stateElement = document.createElement('div');
            stateElement.textContent = destination.state;
            stateElement.classList.add('state');
            stateElement.addEventListener('click', () => displayDestination(destination));
            stateElement.addEventListener('mouseover', () => highlightState(stateElement));
            stateElement.addEventListener('mouseout', () => removeHighlight(stateElement));
            mapContainer.appendChild(stateElement);
        });
    })
    // Placeholder data loaded from db.json
    // const destinations = [
    //     {
    //         state: "California",
    //         name: "Yosemite National Park",
    //         description: "A stunning natural wonder with iconic granite cliffs and waterfalls.",
    //         flag: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg",
    //         image: "https://example.com/yosemite.jpg"
    //     },
    //     {
    //         state: "New York",
    //         name: "Statue of Liberty",
    //         description: "A symbol of freedom and democracy located in New York Harbor.",
    //         flag: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_New_York.svg",
    //         image: "https://example.com/liberty.jpg"
    //     }
    //     // Add more states as needed
    // ];

    // Render placeholders for states on the map
   

    // Display destination details
    function displayDestination(destination) {
        stateNameElement.textContent = destination.state;
        destinationInfoElement.innerHTML = `
            <h3>${destination.name}</h3>
            <p>${destination.description}</p>
            <div class="image-container">
                <img class="flag-image" src="${destination.flag}" alt="${destination.state} flag">
                <img class="destination-image" src="${destination.image}" alt="Image of ${destination.name}">
            </div>
        `;
        infoPanel.style.transition = "opacity 0.3s";
        infoPanel.style.opacity = 1;
    }

    // Highlight state element
    function highlightState(stateElement) {
        stateElement.style.backgroundColor = "#dff0d8";
        stateElement.style.cursor = "pointer";
    }

    // Remove highlight from state element
    function removeHighlight(stateElement) {
        stateElement.style.backgroundColor = "";
    }

    // Example of an additional event listener
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            clearInfoPanel();
        }
    });

    // Clear info panel
    function clearInfoPanel() {
        stateNameElement.textContent = 'Select a state';
        destinationInfoElement.innerHTML = '<p>Click on a state to see its top tourist destination.</p>';
        infoPanel.style.transition = "opacity 0.3s";
        infoPanel.style.opacity = 0;
    }
});
