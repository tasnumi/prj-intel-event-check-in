const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

let count = 0;
let teamNetZero = 0;
let teamWaterWise = 0;
let teamRenewables = 0;
let winningTeam;
let highestCount = 0;

const maxCount = 10;
//handle form submission
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = nameInput.value;
    const team = teamSelect.value;
    const teamName = teamSelect.selectedOptions[0].text;

    console.log(name, team, teamName);

    count++;
    console.log("Total check-ins:", count);

    const percentageCalculation = Math.round((count / maxCount) * 100);
    const progressBar = document.getElementById("progressBar");
    progressBar.style.width = percentageCalculation + "%";
    
    const teamCounter = document.getElementById(team + "Count");
    let teamCount = parseInt(teamCounter.textContent) + 1;

    if(teamCount <= maxCount) {
        teamCounter.textContent = teamCount;
    }
    winningTeam = calculateHighestTeam(teamNetZero, teamWaterWise, teamRenewables, winningTeam, highestCount, team, teamCount);
    
    const attendanceCounter = document.getElementById("attendeeCount");
    
    let attendanceCount = parseInt(attendanceCounter.textContent) + 1; 
    if(attendanceCount <= maxCount) {
        attendanceCounter.textContent = attendanceCount;
    }
    
    const greetingElement = document.getElementById("greeting");
    greetingElement.textContent = `Welcome, ${name} from ${teamName}`;
    greetingElement.classList.add("success-message");
    greetingElement.style.display = "block";

    if(attendanceCount >= maxCount) {
        greetingElement.innerHTML = `<strong>Congratulations to ${winningTeam} on the win!</strong>`;
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
    form.reset();
})

function calculateHighestTeam(teamNetZero, teamWaterWise, teamRenewables, winningTeam, highestCount, team, teamCount) {
    if(team === "zero") {
        teamNetZero++;
    }
    else if(team === "water") {
        teamWaterWise++;
    }
    else if(team === "power") {
        teamRenewables++;
    }

    highestCount = Math.max(teamNetZero, teamWaterWise, teamRenewables);
    if(highestCount === teamNetZero) {
        return winningTeam = "Team Net Zero";
    }

    else if(highestCount === teamWaterWise) {
        return winningTeam = "Team Water Wise";
    }

    else if(highestCount === teamRenewables) {
        return winningTeam = "Team Renewables";
    }

    return winningTeam;
}