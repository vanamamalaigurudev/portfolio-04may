console.log("Portfolio Loaded Successfully!");
function showCert(certId) {

    // Hide all
    const certs = document.querySelectorAll(".cert-box");
    certs.forEach(c => c.style.display = "none");

    // Show selected
    const selected = document.getElementById(certId);
    selected.style.display = "block";
}
