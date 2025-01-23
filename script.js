// document.addEventListener('DOMContentLoaded', () => {
//     const stateListContainer = document.getElementById('state-list');
//     const stateNameElement = document.getElementById('state-name');
//     const destinationInfoElement = document.getElementById('destination-info');
//     const stateFlagElement = document.getElementById('state-flag');
//     const destinationImageElement = document.getElementById('destination-image');
//     const interestedButton = document.getElementById('interested-button');
//     const likeButton = document.getElementById('like-button');
//     const visitorsInterestedElement = document.getElementById('visitors-interested');
//     const likesElement = document.getElementById('likes');

//     fetch("http://localhost:3000/destinations")
//     .then(response => response.json())
//     .then ( destinations => {
//         console.log(destinations)
//         destinations.forEach(destination => {
//             const stateElement = document.createElement('div');
//             stateElement.textContent = destination.state;
//             stateElement.classList.add('state-item');
//             stateElement.addEventListener('click', () => {
//                 highlightSelectedState(stateElement);
//                 displayDestination(destination);
//             });
//             stateListContainer.appendChild(stateElement);
//         });
    
//     } )
//     // Placeholder data loaded from db.json
//     const destinations = [
//         {
//             state: "California",
//             name: "Yosemite National Park",
//             description: "A stunning natural wonder featuring granite cliffs, waterfalls, giant sequoias, and rich biodiversity. Fun fact: Half Dome is one of the park's most iconic landmarks.",
//             flag: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg",
//             image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Yosemite_National_Park_Valley.jpg",
//             visitorsInterested: 0,
//             likes: 0
//         },
//         {
//             state: "New York",
//             name: "Statue of Liberty",
//             description: "An enduring symbol of freedom and democracy gifted by France in 1886. Fun fact: The statue's full name is 'Liberty Enlightening the World.'",
//             flag: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_New_York.svg",
//             image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Statue_of_Liberty.jpg",
//             visitorsInterested: 0,
//             likes: 0
//         },
//         {
//             state: "Florida",
//             name: "Walt Disney World",
//             description: "A magical theme park home to Cinderella's Castle and attracting millions yearly. Fun fact: It spans 43 square miles, making it larger than San Francisco.",
//             flag: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg",
//             image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Walt_Disney_World.jpg",
//             visitorsInterested: 0,
//             likes: 0
//         },
//         {
//             state: "Texas",
//             name: "The Alamo",
//             description: "A historic mission and fortress known for the pivotal 1836 battle for Texan independence. Fun fact: The Alamo originally served as a Spanish mission.",
//             flag: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg",
//             image: "https://upload.wikimedia.org/wikipedia/commons/6/61/The_Alamo.jpg",
//             visitorsInterested: 0,
//             likes: 0
//         },
//         {
//             state: "Hawaii",
//             name: "Waikiki Beach",
//             description: "A world-famous beach known for surfing, vibrant nightlife, and scenic ocean views. Fun fact: Waikiki means 'spouting waters' in Hawaiian.",
//             flag: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Hawaii.svg",
//             image: "https://upload.wikimedia.org/wikipedia/commons/7/76/Waikiki_Beach.jpg",
//             visitorsInterested: 0,
//             likes: 0
//         },
//         {
//             state: "Nevada",
//             name: "Las Vegas Strip",
//             description: "A dazzling stretch of resorts, casinos, and entertainment in Las Vegas. Fun fact: The strip is 4.2 miles long and hosts over 40 million visitors yearly.",
//             flag: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Flag_of_Nevada.svg",
//             image: "https://upload.wikimedia.org/wikipedia/commons/6/68/Las_Vegas_Strip.jpg",
//             visitorsInterested: 0,
//             likes: 0
//         },
//         {
//             state: "Colorado",
//             name: "Rocky Mountain National Park",
//             description: "A haven for hiking, wildlife, and alpine lakes. Fun fact: It boasts over 355 miles of hiking trails and stunning mountain vistas.",
//             flag: "https://upload.wikimedia.org/wikipedia/commons/4/46/Flag_of_Colorado.svg",
//             image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Rocky_Mountain_National_Park.jpg",
//             visitorsInterested: 0,
//             likes: 0
//         },
//         {
//             state: "Arizona",
//             name: "Grand Canyon",
//             description: "One of the Seven Natural Wonders of the World, known for its breathtaking views and geological history. Fun fact: The canyon reveals nearly 2 billion years of Earth's history.",
//             flag: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arizona.svg",
//             image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Grand_Canyon.jpg",
//             visitorsInterested: 0,
//             likes: 0
//         },
//         {
//             state: "Alaska",
//             name: "Denali National Park",
//             description: "A pristine wilderness home to North America's tallest peak, Denali. Fun fact: Denali's peak reaches 20,310 feet, making it the highest mountain in North America.",
//             flag: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Alaska.svg",
//             image: "https://upload.wikimedia.org/wikipedia/commons/2/27/Denali_National_Park.jpg",
//             visitorsInterested: 0,
//             likes: 0
//         },
//         {
//             state: "Washington",
//             name: "Mount Rainier National Park",
//             description: "An iconic peak and a paradise for outdoor enthusiasts with lush meadows and glaciers. Fun fact: Mount Rainier is considered one of the most dangerous volcanoes in the world due to its size and proximity to urban areas.",
//             flag: "https://upload.wikimedia.org/wikipedia/commons/5/54/Flag_of_Washington.svg",
//             image: "https://upload.wikimedia.org/wikipedia/commons/9/94/Mount_Rainier.jpg",
//             visitorsInterested: 0,
//             likes: 0
//         },
//         {
//             state: "Georgia",
//             name: "Savannah Historic District",
//             description: "A charming district with cobblestone streets, historic homes, and southern hospitality. Fun fact: Savannah is one of the oldest planned cities in the United States.",
//             flag: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Flag_of_Georgia_%28U.S._state%29.svg",
//             image: "https://upload.wikimedia.org/wikipedia/commons/8/86/GA_Savannah_HD_Lady_and_Sons01.jpg",
//             visitorsInterested: 0,
//             likes: 0
//         },
//         {
//             state: "Oregon",
//             name: "Crater Lake National Park",
//             description: "A deep blue lake formed in a volcanic crater, offering spectacular views and hiking trails. Fun fact: Crater Lake is the deepest lake in the United States.",
//             flag: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Oregon.svg",
//             image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Crater_lake_oregon.jpg",
//             visitorsInterested: 0,
//             likes: 0
//         },
//         {
//             state: "Illinois",
//             name: "Millennium Park",
//             description: "A public park in Chicago renowned for its art installations, including the famous Cloud Gate. Fun fact: Millennium Park hosts millions of visitors annually.",
//             flag: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Illinois.svg",
//             image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Millennium_Park.jpg",
//             visitorsInterested: 0,
//             likes: 0
//         },
//         {
//             state: "Massachusetts",
//             name: "Freedom Trail",
//             description: "A 2.5-mile path through Boston's historic sites, offering a glimpse into the American Revolution. Fun fact: The trail includes 16 historic sites.",
//             flag: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Massachusetts.svg",
//             image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Charlestown_Bridge.jpg",
//             visitorsInterested: 0,
//             likes: 0
//         },
//         {
//             state: "Virginia",
//             name: "Colonial Williamsburg",
//             description: "A living-history museum showcasing restored colonial buildings and reenactments. Fun fact: Colonial Williamsburg is the world's largest living history museum.",
//             flag: "https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Virginia.svg",
//             image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Colonial_Williamsburg%2C_VA_01.jpg",
//             visitorsInterested: 0,
//             likes: 0
//         }
//     ];

//      Render the state list dynamically
     
//     Highlight the selected state
//     function highlightSelectedState(selectedElement) {
//         const allStates = document.querySelectorAll('.state-item');
//         allStates.forEach(state => state.style.color = '');
//         selectedElement.style.color = 'neon green';
//     }

//     // Display destination details in the info panel
//     function displayDestination(destination) {
//         stateNameElement.textContent = destination.state || "Unknown State"; // Ensure content is always visible
//         stateNameElement.style.display = 'block'; // Ensure visibility

//         destinationInfoElement.style.backgroundColor = 'black'; // Set the background color to black
//         destinationInfoElement.innerHTML = `
//             <div style="display: flex; justify-content: space-around; align-items: center;">
//                 <img src="${destination.flag}" alt="${destination.state} flag" style="width: 45%; border-radius: 5px;">
//                 <img src="${destination.image}" alt="Image of ${destination.name}" style="width: 45%; border-radius: 5px;">
//             </div>
//             <h3>${destination.name}</h3>
//             <p style="color: red; font-weight: bold;">${destination.description}</p>
//             <label for="interested-count">Number of Interested Visitors: </label>
//             <input type="number" id="interested-count" min="1" style="margin-bottom: 1rem;"><br>
//             <button id="update-interested" style="margin-bottom: 1rem;">Update Interested Visitors</button>
//             <label for="likes-count">Number of Likes: </label>
//             <input type="number" id="likes-count" min="1" style="margin-bottom: 1rem;"><br>
//             <button id="update-likes" style="margin-bottom: 1rem;">Update Likes</button>
//         `;

//         visitorsInterestedElement.textContent = destination.visitorsInterested;
//         likesElement.textContent = destination.likes;

//         document.getElementById('update-interested').onclick = () => {
//             const interestedCountInput = document.getElementById('interested-count');
//             const newCount = parseInt(interestedCountInput.value, 10);
//             if (!isNaN(newCount) && newCount > 0) {
//                 destination.visitorsInterested = newCount;
//                 visitorsInterestedElement.textContent = destination.visitorsInterested;
//             } else {
//                 alert('Please enter a valid number of interested visitors.');
//             }
//         };

//         document.getElementById('update-likes').onclick = () => {
//             const likesCountInput = document.getElementById('likes-count');
//             const newLikes = parseInt(likesCountInput.value, 10);
//             if (!isNaN(newLikes) && newLikes > 0) {
//                 destination.likes = newLikes;
//                 likesElement.textContent = destination.likes;
//             } else {
//                 alert('Please enter a valid number of likes.');
//             }
//         };

//         interestedButton.style.display = 'inline-block';
//         likeButton.style.display = 'inline-block';

//         interestedButton.onclick = () => {
//             destination.visitorsInterested++;
//             visitorsInterestedElement.textContent = destination.visitorsInterested;
//         };

//         likeButton.onclick = () => {
//             destination.likes++;
//             likesElement.textContent = destination.likes;
//         };
//     }
//     document.getElementById('update-interested').addEventListener('click', () => {
//         const interestedCountInput = document.getElementById('interested-count');
//         const newCount = parseInt(interestedCountInput.value, 10);
//         if (!isNaN(newCount) && newCount > 0) {
//             destination.visitorsInterested = newCount;
//             visitorsInterestedElement.textContent = destination.visitorsInterested;
//         } else {
//             alert('Please enter a valid number of interested visitors.');
//         }
//     });
    
//     document.getElementById('update-likes').addEventListener('click', () => {
//         const likesCountInput = document.getElementById('likes-count');
//         const newLikes = parseInt(likesCountInput.value, 10);
//         if (!isNaN(newLikes) && newLikes > 0) {
//             destination.likes = newLikes;
//             likesElement.textContent = destination.likes;
//         } else {
//             alert('Please enter a valid number of likes.');
//         }
//     });
    
//     interestedButton.style.display = 'inline-block';
//     likeButton.style.display = 'inline-block';
    
//     interestedButton.addEventListener('click', () => {
//         destination.visitorsInterested++;
//         visitorsInterestedElement.textContent = destination.visitorsInterested;
//     });
    
//     likeButton.addEventListener('click', () => {
//         destination.likes++;
//         likesElement.textContent = destination.likes;
//     });
    
//     // Reset the info panel when the Escape key is pressed
//     document.addEventListener('keydown', (event) => {
//         if (event.key === 'Escape') {
//             resetInfoPanel();
//         }
//     });

//     function resetInfoPanel() {
//         stateNameElement.textContent = 'Select a State';
//         stateFlagElement.style.display = 'none';
//         destinationImageElement.style.display = 'none';
//         destinationInfoElement.style.backgroundColor = ''; // Reset the background color
//         destinationInfoElement.innerHTML = '<p>Click on a state to see its top tourist destination.</p>';
//         interestedButton.style.display = 'none';
//         likeButton.style.display = 'none';

//         // Reset state list highlight
//         const allStates = document.querySelectorAll('.state-item');
//         allStates.forEach(state => state.style.color = '');
//     }

//     // Ensure state name is visible by default
//     stateNameElement.textContent = 'Select a State';
//     stateNameElement.style.display = 'block';
// });

document.addEventListener('DOMContentLoaded', () => {
    const stateListContainer = document.getElementById('state-list');
    const stateNameElement = document.getElementById('state-name');
    const destinationInfoElement = document.getElementById('destination-info');
    const stateFlagElement = document.getElementById('state-flag');
    const destinationImageElement = document.getElementById('destination-image');
    const interestedButton = document.getElementById('interested-button');
    const likeButton = document.getElementById('like-button');
    const visitorsInterestedElement = document.getElementById('visitors-interested');
    const likesElement = document.getElementById('likes');

    // Fetch destinations from db.json and handle errors
    fetch("http://localhost:3000/destinations")
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json();
        })
        .then(destinations => renderStateList(destinations))
        .catch(error => {
            console.error("Error fetching destinations:", error);
            alert("Failed to load destinations. Please try again later.");
        });

    // Render the state list dynamically
    function renderStateList(destinations) {
        destinations.forEach(destination => {
            const stateElement = document.createElement('div');
            stateElement.textContent = destination.state;
            stateElement.classList.add('state-item');
            stateElement.addEventListener('click', () => {
                highlightSelectedState(stateElement);
                displayDestination(destination);
            });
            stateListContainer.appendChild(stateElement);
        });
    }

    // Highlight the selected state
    function highlightSelectedState(selectedElement) {
        const allStates = document.querySelectorAll('.state-item');
        allStates.forEach(state => state.style.color = '');
        selectedElement.style.color = 'neon green';
    }

    // Display destination details in the info panel
    function displayDestination(destination) {
        stateNameElement.textContent = destination.state || "Unknown State";
        stateNameElement.style.display = 'block';

        destinationInfoElement.style.backgroundColor = 'black';
        destinationInfoElement.innerHTML = `
            <div style="display: flex; justify-content: space-around; align-items: center;">
                <img src="${destination.flag}" alt="${destination.state} flag" style="width: 45%; border-radius: 5px;">
                <img src="${destination.image}" alt="Image of ${destination.name}" style="width: 45%; border-radius: 5px;">
            </div>
            <h3>${destination.name}</h3>
            <p style="color: red; font-weight: bold;">${destination.description}</p>
            <label for="interested-count">Number of Interested Visitors: </label>
            <input type="number" id="interested-count" min="1" style="margin-bottom: 1rem;"><br>
            <button id="update-interested" style="margin-bottom: 1rem;">Update Interested Visitors</button>
            <label for="likes-count">Number of Likes: </label>
            <input type="number" id="likes-count" min="1" style="margin-bottom: 1rem;"><br>
            <button id="update-likes" style="margin-bottom: 1rem;">Update Likes</button>
        `;

        visitorsInterestedElement.textContent = destination.visitorsInterested;
        likesElement.textContent = destination.likes;

        // Attach event listeners for updating counts
        document.getElementById('update-interested').addEventListener('click', () => updateInterested(destination));
        document.getElementById('update-likes').addEventListener('click', () => updateLikes(destination));

        // Show buttons for incrementing values
        interestedButton.style.display = 'inline-block';
        likeButton.style.display = 'inline-block';

        interestedButton.addEventListener('click', () => incrementInterested(destination));
        likeButton.addEventListener('click', () => incrementLikes(destination));
    }

    // Update interested count
    function updateInterested(destination) {
        const interestedCountInput = document.getElementById('interested-count');
        const newCount = parseInt(interestedCountInput.value, 10);
        if (!isNaN(newCount) && newCount > 0) {
            destination.visitorsInterested = newCount;
            visitorsInterestedElement.textContent = destination.visitorsInterested;
        } else {
            alert('Please enter a valid number of interested visitors.');
        }
    }

    // Update likes count
    function updateLikes(destination) {
        const likesCountInput = document.getElementById('likes-count');
        const newLikes = parseInt(likesCountInput.value, 10);
        if (!isNaN(newLikes) && newLikes > 0) {
            destination.likes = newLikes;
            likesElement.textContent = destination.likes;
        } else {
            alert('Please enter a valid number of likes.');
        }
    }

    // Increment interested count
    function incrementInterested(destination) {
        destination.visitorsInterested++;
        visitorsInterestedElement.textContent = destination.visitorsInterested;
    }

    // Increment likes count
    function incrementLikes(destination) {
        destination.likes++;
        likesElement.textContent = destination.likes;
    }

    // Reset the info panel when the Escape key is pressed
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            resetInfoPanel();
        }
    });

    // Reset the info panel to its initial state
    function resetInfoPanel() {
        stateNameElement.textContent = 'Select a State';
        stateFlagElement.style.display = 'none';
        destinationImageElement.style.display = 'none';
        destinationInfoElement.style.backgroundColor = '';
        destinationInfoElement.innerHTML = '<p>Click on a state to see its top tourist destination.</p>';
        interestedButton.style.display = 'none';
        likeButton.style.display = 'none';

        const allStates = document.querySelectorAll('.state-item');
        allStates.forEach(state => state.style.color = '');
    }

    // Ensure state name is visible by default
    stateNameElement.textContent = 'Select a State';
    stateNameElement.style.display = 'block';
});
