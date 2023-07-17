var votes = [{
    "building": "Debart",
    "votes": 0
},
{
    "building": "Dome",
    "votes": 0
},
{
    "building": "Fitzpatrick-Cushing",
    "votes": 0
},
{
    "building": "Stinson-Remick",
    "votes": 0
}

]

function submit(num){
    votes[num].votes += 1;
    document.getElementById("vote").innerHTML =('Total votes: ' + votes[num].votes);
}
