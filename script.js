const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");

imageInput.addEventListener("change", function () {
    const file = imageInput.files[0];
    if (file) {
        preview.src = URL.createObjectURL(file);
        preview.style.display = "block";
    }
});

function predictDisease() {
    // Dummy result (replace with ML backend later)
    const diseases = [
        "Healthy Plant 🌱",
        "Early Blight 🍂",
        "Late Blight 🍄"
    ];

    const randomResult = diseases[Math.floor(Math.random() * diseases.length)];
    document.getElementById("output").innerText = randomResult;
}
