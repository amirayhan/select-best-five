// get all select button from querySelectorAll
const btnSelect = document.querySelectorAll("#select");

// make a storage with blank array where we store 5 players
const selectedPlayer = [];

// select 5 players and add to the player list
for (let btn of btnSelect) {
    // btn clicked to add palyer in the list
    // and show warning when player more than 5
    btn.addEventListener("click", function (event) {
        // get the player name
        const playerName = event.target.parentNode.children[0].innerText;

        // push player name in the selectedPlayer blank array
        selectedPlayer.push(playerName);

        // when player length is smaller or equal 5, player is add
        if (selectedPlayer.length <= 5) {
            // get player list
            const playerList = document.getElementById("selected_palyer");

            // create li element or tag
            const li = document.createElement("li");

            // add player in li tag
            li.innerText = playerName;

            // add li in player list
            playerList.appendChild(li);

            // make button disabled
            btn.disabled = true;

            // also change button color
            btn.style.backgroundColor = "rgb(59 130 246)";
        }
        // show warning when player more than 5
        else {
            // get notification by id
            getNotification("You Can't Select More Than 5 Players!");
        }
    });
}
