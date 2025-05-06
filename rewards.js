document.addEventListener("DOMContentLoaded", () => {
    let userPoints = 50; // Example points

    // Answer Submission
    document.getElementById("answerForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const answerText = document.getElementById("answerText").value;
        if (answerText.trim() === "") return;

        const answerDiv = document.createElement("div");
        answerDiv.classList.add("answer");
        answerDiv.innerHTML = `
            <p>${answerText}</p>
            <button class="upvote">Upvote (+5)</button>
            <button class="downvote">Downvote (-1)</button>
            <button class="delete">Delete (-5)</button>
        `;

        document.getElementById("answersContainer").appendChild(answerDiv);
        document.getElementById("answerText").value = "";

        userPoints += 5; // Reward for answering
        document.getElementById("userPoints").textContent = userPoints;
    });

    // Event Delegation for Upvote, Downvote, and Delete
    document.getElementById("answersContainer").addEventListener("click", (e) => {
        if (e.target.classList.contains("upvote")) {
            userPoints += 5;
        } else if (e.target.classList.contains("downvote")) {
            userPoints -= 1;
        } else if (e.target.classList.contains("delete")) {
            userPoints -= 5;
            e.target.parentElement.remove();
        }
        document.getElementById("userPoints").textContent = userPoints;
    });

    // Transfer Points
    document.getElementById("transferForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const receiverEmail = document.getElementById("receiverEmail").value;
        const transferPoints = parseInt(document.getElementById("transferPoints").value);

        if (userPoints < 10 || transferPoints > userPoints) {
            alert("Not enough points to transfer!");
            return;
        }

        userPoints -= transferPoints;
        document.getElementById("userPoints").textContent = userPoints;
        alert(`Transferred ${transferPoints} points to ${receiverEmail}!`);
    });
});
