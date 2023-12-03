//your JS code here. If required.
const band = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

    // Function to strip out specified words from the beginning of the band names
    function stripWords(bandName) {
        const ignoredWords = ['The', 'A', 'An'];
        const words = bandName.split(' ');
        return ignoredWords.includes(words[0]) ? words.slice(1).join(' ') : bandName;
    }

    // Sort and display the bands
    const sortedBands = band.sort((a, b) => stripWords(a) > stripWords(b) ? 1 : -1);

    const bandList = document.getElementById('bands');
    sortedBands.forEach(band => {
        const listItem = document.createElement('li');
        listItem.textContent = stripWords(band);
        bandList.appendChild(listItem);
    });