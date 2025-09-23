const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

let count = 0;
const maxCount = 50;
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
    teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

    const attendanceCounter = document.getElementById("attendeeCount");
    attendanceCounter.textContent = parseInt(attendanceCounter.textContent) + 1;

    const messageElement = document.getElementById("greeting");
    messageElement.textContent = `Welcome, ${name} from ${teamName}`;
    messageElement.classList.add("success-message");
    messageElement.style.display = "block";
    console.log(message);

    form.reset();
})