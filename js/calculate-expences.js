// get total player expences to clicked by calculate button
document.getElementById("budget-calculate").addEventListener("click", function () {
    // get player list
    const playerList = getElement("selected_palyer");

    // get total player length
    const totalPlayers = playerList.getElementsByTagName("li").length;

    // when player list is empty, show this notification
    if (totalPlayers === 0) {
        getNotification("Please select any player first.");
    } else {
        // get per player ammount
        const perPlayerAmmount = inputAmmount("per_player");
        if (isNaN(perPlayerAmmount) === false) {
            // get total player expences ammount
            const totalPlayerExpences = perPlayerAmmount * totalPlayers;

            // get player expence display
            const playerExpenceDisplay = getElement("player_expence_display");

            // add total player expences ammount in player expence display
            playerExpenceDisplay.innerText = totalPlayerExpences;
        } else {
            getNotification("Please enter amount in the input field");
        }
    }
});

// get total Expences Ammount by clicked total Expences button
document.getElementById("total-calculate").addEventListener("click", function () {
    // get total player expences ammount
    const totalPlayerExpences = elementAmmount("player_expence_display");

    // get manager expence ammount
    const managerAmmount = inputAmmount("manager");

    // get coach expence ammount
    const coachAmmount = inputAmmount("coach");

    if (isNaN(managerAmmount) === false && isNaN(coachAmmount) === false) {
        // finally get total expences ammount
        const totalExpences = totalPlayerExpences + managerAmmount + coachAmmount;

        // get total expences display
        const TotalExpencesDisplay = getElement("total_expences_display");

        // add total expences ammount in total expences display
        TotalExpencesDisplay.innerText = totalExpences;
    } else {
        getNotification("Please enter amount in the input field");
    }
});

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
