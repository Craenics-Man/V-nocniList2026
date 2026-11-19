// ===================================
// CHRISTMAS WISHLIST 2026
// JavaScript
// ===================================


// ============================
// CHRISTMAS SNOW
// ============================

const snowContainer = document.createElement("div");

snowContainer.id = "snow-container";
document.body.appendChild(snowContainer);

function createSnowflake() {

    const snowflake = document.createElement("div");

    snowflake.classList.add("snowflake");
    snowflake.innerHTML = "❄";

    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
    snowflake.style.animationDuration = Math.random() * 5 + 5 + "s";
    snowflake.style.opacity = Math.random();

    snowContainer.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 10000);
}

// Creates a snowflake every 150 milliseconds
setInterval(createSnowflake, 150);


// ============================
// CHRISTMAS COUNTDOWN
// ============================

const countdownElement = document.getElementById("countdown");

function updateCountdown() {

    const christmas = new Date("2026-12-24T00:00:00");
    const now = new Date();

    const difference = christmas - now;

    // If Christmas has arrived
    if (difference <= 0) {

        countdownElement.innerHTML = "🎄 Štědrý den je tady!";
        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    // Updates the HTML
    countdownElement.innerHTML = `

        <div class="time-box">
            <span>${days}</span>
            <small>DNY</small>
        </div>

        <div class="time-box">
            <span>${hours}</span>
            <small>HOD</small>
        </div>

        <div class="time-box">
            <span>${minutes}</span>
            <small>MIN</small>
        </div>

        <div class="time-box">
            <span>${seconds}</span>
            <small>SEC</small>
        </div>

    `;
}

// First update
updateCountdown();

// Updates every second
setInterval(updateCountdown, 1000);


// ============================
// CHRISTMAS MESSAGE BUTTON
// ============================

const surpriseButton = document.getElementById("surprise-button");

const surpriseMessage = document.getElementById("surprise-message");

surpriseButton.addEventListener("click", function () {

    surpriseMessage.classList.toggle("visible");

    if (surpriseMessage.classList.contains("visible")) {

        surpriseButton.innerText = "Schovat zprávu ↑";

    } else {

        surpriseButton.innerText = "Otevřít vánoční zprávu 🎁";

    }

});


// ============================
// CONSOLE MESSAGE
// ============================

console.log("🎄 Christmas JavaScript loaded successfully!");
console.log("💻 Wishlist system online!");