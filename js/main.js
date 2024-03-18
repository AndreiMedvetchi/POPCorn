 document.addEventListener('DOMContentLoaded', function () {
            const showAnswerButtons = document.querySelectorAll('.show-answer');
            showAnswerButtons.forEach(button => {
                button.addEventListener('click', function () {
                    const answer = this.nextElementSibling;
                    if (answer.style.display === 'none') {
                        answer.style.display = 'block';
                        
                    } else {
                        answer.style.display = 'none';
                    }
                });
            });
        });