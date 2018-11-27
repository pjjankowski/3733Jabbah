function loadFunc() {
    document.getElementById("loginText").innerHTML = prompt("Please enter your secret code", "w35stV1rg1n14");

    const resp2 = prompt("Please enter your desired interval in minutes", "15min, 30min");
    let numIntervals = 540 / resp2;
    console.log(resp2);
    console.log(numIntervals);

    let myTable = "<table><tr><td>TIME</td>";
    myTable += "<td>MON</td>";
    myTable += "<td>TUE</td>";
    myTable += "<td>WED</td>";
    myTable += "<td>THU</td>";
    myTable += "<td>FRI</td></tr>";

    for (let i = 0; i < numIntervals; i++) {
        let currTime = (i*resp2);
        myTable += "<tr><td>"+currTime+"</td>";
        myTable += "<td><button type='button' onclick='bookFunc()'>Click Me!</button></td>";
        myTable += "<td><button type='button' onclick='bookFunc()'>Click Me!</button></td>";
        myTable += "<td><button type='button' onclick='bookFunc()'>Click Me!</button></td>";
        myTable += "<td><button type='button' onclick='bookFunc()'>Click Me!</button></td>";
        myTable += "<td><button type='button' onclick='bookFunc()'>Click Me!</button></td></tr>";
    }

    myTable += "</table>";
    /**console.log(myTable);*/
    document.getElementById("tablePrint").innerHTML = myTable;
}

function bookFunc(){
    window.confirm("Please confirm you want to book");
}

function loginSubmit(){
    console.log("yeehaw");
}

function openCreateMenu(){}

function pullParticipantSchedule(){}