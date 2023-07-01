function DiscordTag(){
    var discord = document.getElementById("discordtag");
    discord.select();
    document.execCommand("copy");
    alert("Discord Username Copied\ntgamerxd")
}

function clearScreen(){
    document.getElementById("result").value = "";
}

function display(val){
    document.getElementById("result").value += val;
}

function calculate(){
    var x = document.getElementById("result").value;
    var y = eval(x);
    document.getElementById("result").value = y;
}