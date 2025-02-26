// Ini Javascript External

function validateForm() {
    let nameInput = document.getElementById('name-input');

    // Kondisi Validasinya
    if (nameInput.value == '') {
        alert('Nama tidak boleh kosong');
    } else {
        alert('Welcome ' + nameInput.value);
    }
}

// For Index Identifier
let indexBanner = 0;

showBanner();

function nextBanner() {
    // Increment IndexBanner
    indexBanner += 1;
    showBanner();
}

function showBanner() {
    let banner = document.getElementsByClassName('main-banner');

    // Reset Condition
    if (indexBanner > banner.length - 1) {
        indexBanner = 0;
    }

    // Loop untuk hide semua
    for (let i = 0; i < banner.length; i++) {
        banner[i].style.display = 'none';
    }

    // Show Banner
    banner[indexBanner].style.display = 'block';
}

// Auto Play
setInterval(nextBanner, 3000);