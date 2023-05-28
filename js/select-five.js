const btnSelect = document.querySelectorAll("#select");
const selectedPlayer = [];
for (let btn of btnSelect) {
    btn.addEventListener("click", function (event) {
        // get the player name
        const playerName = event.target.parentNode.children[0].innerText;

        selectedPlayer.push(playerName);

        if (selectedPlayer.length <= 5) {
            const playerList = document.getElementById("selected_palyer");
            const li = document.createElement("li");
            li.innerText = playerName;
            playerList.appendChild(li);
            btn.disabled = true;
            btn.style.backgroundColor = "rgb(59 130 246)";
        } else {
            const notification = document.getElementById("notification_content");
            notification.style.display = "block";

            const warningText = document.getElementById("warning_text");
            warningText.innerText = "You Can't Select More Than 5 Players";

            document.getElementById("close").addEventListener("click", function () {
                notification.style.display = "none";
            });
        }
    });
}
