function rollbutton() {
    const diceCount = document.getElementById('diceCount').value;
    const result = document.getElementById('result');
    const imageContainer = document.getElementById('image');
    const value = [];
    const images = [];

    for (let i = 0; i < diceCount; i++) {
        const randomValue = Math.floor(Math.random() * 6) + 1;
        value.push(randomValue);
        images.push(`<img src="dadu/${randomValue}.png">`);
    }

    result.textContent = `Hasil: ${value.join(', ')}`;
    imageContainer.innerHTML = images.join('');
}
