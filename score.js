const storedScores = JSON.parse(localStorage.getItem("userData"));
const highScoresArea = document.querySelector("#highScoresList");
const backBtn = document.querySelector("#backButton");
const clearBtn = document.querySelector("#clearScores");


function displayScores() {
    if (storedScores !== null) {
        let scoreList = document.createElement("ol");
        scoreList.className = "scoreListClass";
        for (let i = 0; i < storedScores.length; i++) {
            let initials = storedScores[i].inits;
            let scores = storedScores[i].userScore
            let scoreEntry = document.createElement("li");
            scoreEntry.innerHTML = initials + " ------------ [ " + scores + " ]";
            scoreList.appendChild(scoreEntry);
        }
        highScoresArea.appendChild(scoreList);
    }
};

displayScores();

backBtn.addEventListener("click", function () {
    location.href = "index.html";
});

clearBtn.addEventListener("click", function () {
    highScoresArea.innerHTML = "";
    window.localStorage.clear();

});