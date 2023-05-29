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

// reset all field and display
document.getElementById("reset").addEventListener("click", function () {
    // clear player list you can use it
    // get player list
    // const playerList = getElement("selected_palyer");
    // get total player length
    // const totalPlayers = playerList.getElementsByTagName("li");
    // while (totalPlayers.length > 0) {
    //     playerList.removeChild(totalPlayers[0]);
    // }

    // reload full page to reset
    location.reload();

    // get all field and display ammount and clear all
    document.getElementById("per_player").value = "";
    document.getElementById("player_expence_display").innerText = "0";
    document.getElementById("manager").value = "";
    document.getElementById("coach").value = "";
    document.getElementById("total_expences_display").innerText = "0";
});
