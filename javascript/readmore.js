function extraContent(elementId) {
    var additionalContent = document.getElementById(elementId);
    var button = additionalContent.parentElement.querySelector('button');

    if (additionalContent.style.display === 'none') {
        additionalContent.style.display = 'block';
        button.textContent = 'Read Less';
    } else {
        additionalContent.style.display = 'none';
        button.textContent = 'Read More';
    }
}