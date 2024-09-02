function playGame(userChoice) {
    const options = ['snake', 'water', 'glass'];
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    let result;

    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === 'snake' && computerChoice === 'water') ||
        (userChoice === 'water' && computerChoice === 'glass') ||
        (userChoice === 'glass' && computerChoice === 'snake')
    ) {
        result = `You win! ${capitalize(userChoice)} beats ${computerChoice}.`;
    } else {
        result = `You lose! ${capitalize(computerChoice)} beats ${userChoice}.`;
    }

    document.getElementById("result").textContent = `You chose ${capitalize(userChoice)}. Computer chose ${capitalize(computerChoice)}. ${result}`;
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
