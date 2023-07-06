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

const theme = document.getElementById("theme");
const elements = document.querySelectorAll('.heads, .logo, .calculator,.display,.cls,.inputbox,.row,.act,.heading,.thm');
var sun = document.getElementById("icon");

theme.addEventListener('click',function(){
    console.log("test dark theme")
    document.body.classList.toggle('dark');
    elements.forEach(function(element){
        element.classList.toggle('dark');
    })
    if(icon.classList.contains("dark")){
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }else{
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
})
