function magic8Ball() {
    const question = prompt("Ask a question:");

    console.log(`You asked ${question}`);

    const randomNumber = Math.floor(Math.random() * 8) + 1;

    let answer;
    switch (randomNumber) {
        case 1:
            answer = "Yes, definitely!";
            break;
        case 2:
            answer = "It is certain.";
            break;
        case 3:
            answer = "Reply hazy, try again.";
            break;
        case 4:
            answer = "Ask again later.";
            break;
        case 5:
            answer = "Better not tell you now.";
            break;
        case 6:
            answer = "My sources say no.";
            break;
        case 7:
            answer = "Outlook not so good.";
            break;
        case 8:
            answer = "Signs point to yes.";
            break;
        default:
            answer = "Error: Something went wrong.";
    }
    console.log(`The wise man says: ${answer}`);
    alert(`The wise man says: ${answer}`);
}

magic8Ball();
