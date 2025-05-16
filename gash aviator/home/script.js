function validateAccess(event) {
    event.preventDefault();

    const activationCode = document.getElementById("activationCode").value;
    const bettingUrl = document.getElementById("bettingUrl").value;
    const formMessage = document.getElementById("formMessage");
    const validActivationCode = "123Gashema@";

    // Regular expression to validate URL pattern for betting sites
    const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)(bet|betting|casino|gamble)(\/.*)?$/;

    if (activationCode !== validActivationCode) {
        formMessage.textContent = "Invalid activation code.";
        formMessage.style.color = "red";
    } else if (!urlPattern.test(bettingUrl)) {
        formMessage.textContent = "Please enter a valid betting website URL.";
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = "";
        document.getElementById("accessForm").style.display = "none";
        document.getElementById("content").style.display = "block";
    }
}
