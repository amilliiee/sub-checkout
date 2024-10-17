document.addEventListener('DOMContentLoaded', function() {
    const radios = document.querySelectorAll('input[type="radio"]');

    function updateStyles() {
        document.querySelectorAll('.monthly, .annual').forEach(div => {
            div.style.backgroundColor = '';
            div.style.borderColor = '#ECE9FC';
        });

        const checkedRadio = document.querySelector('input[type="radio"]:checked');
        if (checkedRadio) {
            const parentDiv = checkedRadio.closest('div');
            parentDiv.style.backgroundColor = '#ECE9FC';
            parentDiv.style.borderColor = '#743EE4';
        }
    }

    updateStyles();

    radios.forEach(radio => {
        radio.addEventListener('change', updateStyles);
    });
});