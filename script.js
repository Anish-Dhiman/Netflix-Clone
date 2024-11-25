
const faqBoxes = document.querySelectorAll('.faqbox');

faqBoxes.forEach(box => {
    box.addEventListener('click', () => {

        box.classList.toggle('active');

        const answer = box.nextElementSibling;

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});

