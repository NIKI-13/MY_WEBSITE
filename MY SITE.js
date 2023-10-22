document.getElementById('about').addEventListener('click', function() {
    document.getElementById('popupContainer').style.display = 'flex';
});

function closeAbout() {
    document.getElementById('popupContainer').style.display = 'none';
}


document.getElementById('contact').addEventListener('click', function() {
    document.getElementById('contactContainer').style.display = 'flex';
});

function closeContact() {
    document.getElementById('contactContainer').style.display = 'none';
}

