const preview = document.getElementById("preview");

document.getElementById("imageInput").addEventListener("change", e => {
  const file = e.target.files[0];
  preview.src = URL.createObjectURL(file);
  preview.style.display = "block";
});

function predict() {
  const disease = "Early Blight";
  document.getElementById("output").innerText = disease;
  document.getElementById("treatmentText").innerText =
    "Use fungicide and remove infected leaves.";
}

/* Language Support */
function changeLanguage() {
  const lang = document.getElementById("language").value;

  if (lang === "te") {
    uploadText.innerText = "ఆకును అప్లోడ్ చేయండి";
    resultTitle.innerText = "ఫలితం";
    treatTitle.innerText = "చికిత్స సూచన";
  }
  if (lang === "hi") {
    uploadText.innerText = "पत्ता अपलोड करें";
    resultTitle.innerText = "परिणाम";
    treatTitle.innerText = "उपचार सुझाव";
  }
  if (lang === "en") {
    uploadText.innerText = "Upload Leaf Image";
    resultTitle.innerText = "Diagnosis Result";
    treatTitle.innerText = "Treatment Suggestion";
  }
}
