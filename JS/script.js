$(document).ready(function() {
    let timeLeft = 120; // 2 minutes in seconds
    let timer = setInterval(updateTimer, 1000);

    function updateTimer() {
        if (timeLeft <= 0) {
            clearInterval(timer);
            $('#timer').text("Time's up!");
            checkAnswers();
        } else {
            let minutes = Math.floor(timeLeft / 60);
            let seconds = timeLeft % 60;
            $('#timer').text(`Time Left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
            timeLeft--;
        }
    }

    $('#quiz-form').submit(function(e) {
        e.preventDefault();
        clearInterval(timer);
        checkAnswers();
    });

    function checkAnswers() {
        let score = 0;
        $('input[type=radio]:checked').each(function() {
            if ($(this).val() === '0') { // '0' marks the correct option
                score++;
            }
        });
        $('#result').html(`<h2>Your Score: ${score} / 20</h2>`);
        $('#submit').prop('disabled', true);
    }
});
