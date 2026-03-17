const addSupplier = document.getElementById("addSupplier-btn");
const closeBtn = document.getElementById("close-btn");
const popUp = document.getElementById("PopUp-form");
const overlay = document.getElementById("overlay");

addSupplier.addEventListener('click', () => {
    popUp.style.display = "block";
    popUp.style.position = "absolute";
    overlay.style.display = "block";
});
closeBtn.addEventListener('click', () => {
    popUp.style.display = "none";
    overlay.style.display = "none";
})

overlay.addEventListener('click', () => {
  popUp.style.display = "none";
  overlay.style.display = "none";
});

const supplierForm = document.querySelector("#PopUp-form");

supplierForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Stop page from reloading

    const formData = new FormData(supplierForm);

    try {
        const response = await fetch('icoretech-ims-production.up.railway.app', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (result.success) {
            alert('Supplier added successfully!');
            supplierForm.reset();       // Clear the form
            popUp.style.display = 'none';  // Close the popup
            overlay.style.display = 'none';
        } else {
            alert('Something went wrong. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Could not connect to server.');
    }
});