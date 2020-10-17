async function copyDiscordTag() {
    var tempInput = document.createElement("input");
    tempInput.value = "CursedBlackCat#7801";
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    var discordBtn = document.getElementById("discordBtn");
    discordBtn.innerHTML = "<i class=\"fab fa-discord\"></i>Copied!";
    await new Promise(r => setTimeout(r, 2000));
    discordBtn.innerHTML = "<i class=\"fab fa-discord\"></i>Discord";
}