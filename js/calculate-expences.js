// get total player expences to clicked by calculate button
document.getElementById("budget-calculate").addEventListener("click", function () {
    // get player list
    const playerList = getElement("selected_palyer");

    // get total player length
    const totalPlayers = playerList.getElementsByTagName("li").length;

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
        getNotification("Please Enter Numbers In The Input Field");
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

    if (isNaN(perPlayerAmmount) === false) {
        // get total player expences ammount
        const totalPlayerExpences = perPlayerAmmount * totalPlayers;

        // get player expence display
        const playerExpenceDisplay = getElement("player_expence_display");

        // add total player expences ammount in player expence display
        playerExpenceDisplay.innerText = totalPlayerExpences;
    } else {
        getNotification("Please Enter Numbers In The Input Field");
    }

    // finally get total expences ammount
    const totalExpences = totalPlayerExpences + managerAmmount + coachAmmount;

    // get total expences display
    const TotalExpencesDisplay = getElement("total_expences_display");

    // add total expences ammount in total expences display
    TotalExpencesDisplay.innerText = totalExpences;
});
