// get element from id
function getElement(elementTextId) {
    const elementDisplay = document.getElementById(elementTextId);
    return elementDisplay;
}

// get input value from id
function inputAmmount(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inAmmount = parseInt(inputFieldString);
    return inAmmount;
}

// get element text and convert in integer type
function elementAmmount(elementId) {
    const elementField = document.getElementById(elementId);
    const elementFieldString = elementField.innerText;
    const elementContent = parseInt(elementFieldString);
    return elementContent;
}

// get notification
function getNotification(notificationText) {
    // get notification by id
    const notification = document.getElementById("notification_content");

    // make notification content display none to block
    notification.style.display = "block";

    // get warning text by id
    const warningText = document.getElementById("warning_text");

    // add text in warning text
    warningText.innerText = notificationText;

    // when close button clicked, notification agian display none
    document.getElementById("close").addEventListener("click", function () {
        notification.style.display = "none";
    });
}
