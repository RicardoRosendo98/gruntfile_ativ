document.addEventListener('', function() {
    document.getElementById('form-valida').addEventListener('submit', function(e) {
        e.preventDefault();

            if(e.key === "Enter") {
                const btn = document.querySelector("#submit");

                btn.click();
            }

    });
})
