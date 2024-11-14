// Function to change the background color
document.getElementById('changeColorButton').addEventListener('click', function() {
    const colors = ['#FF6347', '#FFD700', '#90EE90', '#20B2AA', '#FF1493'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
