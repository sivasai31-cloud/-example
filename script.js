/* LOGIN */
let demoOTP = "1234";

function sendOTP() {
  document.getElementById("otpBox").style.display = "block";
  document.getElementById("loginMsg").innerText =
    "Demo OTP sent: 1234";
}

function verifyOTP() {
  if (document.getElementById("otpInput").value === demoOTP) {
    window.location.href = "index.html";
  } else {
    document.getElementById("loginMsg").innerText = "Invalid OTP";
  }
}

/* IMAGE PREVIEW */
imageInput?.addEventListener("change", e => {
  preview.src = URL.createObjectURL(e.target.files[0]);
  preview.style.display = "block";
});

/* AI DEMO */
function predict() {
  document.getElementById("output").innerText = "Early Blight";
  document.getElementById("confidence").innerText = "Confidence: 87%";

  document.getElementById("dos").innerText =
    "Use fungicide, remove infected leaves";

  document.getElementById("donts").innerText =
    "Avoid excess watering";

  document.getElementById("weatherTip").innerText =
    "High humidity detected. Monitor crops carefully.";
}

/* LANGUAGE AUTO-DETECT */
window.onload = () => {
  const lang = navigator.language.slice(0,2);
  if (lang === "te") changeLanguage("te");
  else if (lang === "hi") changeLanguage("hi");
};

function changeLanguage(force) {
  const lang = force || document.getElementById("language").value;

  if (lang === "te") {
    uploadText.innerText = "ఆకును అప్లోడ్ చేయండి";
    resultTitle.innerText = "ఫలితం";
  }
  if (lang === "hi") {
    uploadText.innerText = "पत्ता अपलोड करें";
    resultTitle.innerText = "परिणाम";
  }
}

