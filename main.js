// Function to display songs of an album
function showSongs(albumName, songs) {
    // Get the album title and songs list elements
    const albumTitle = document.getElementById('album-title');
    const songsList = document.getElementById('songs-list');
    const songsDisplay = document.getElementById('songs-display');

    // Update the album title
    albumTitle.textContent = 'Songs from ${albumName}';

    // Clear previous songs 
    songsList.innerHTML = '';

    // Add the songs to the list
    songs.forEach(song => {
        const li = document.createElement('li');
        li.textContent = song;
        songsList.appendChild(li);
    });

    // Show the songs display section
    songsDisplay.style.display = 'block';
}
