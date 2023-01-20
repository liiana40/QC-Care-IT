const btnNext = document.getElementById("btnNext");
let answer = "";

btnNext.addEventListener('click', function() {
    document.getElementById("answer").innerHTML = "<button class='blog-topic text-tiny' id='btnDisplayAnswer'>Display Answer</button>";
    fetch('http://jservice.io/api/random')
    .then(
        function(response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' + 
                    response.status);
                return;
            }
            
            response.json().then(function(data) {
                answer = data[0].answer;
                const question = data[0].question;
                const category = data[0].category.title;
                document.getElementById("question").innerHTML = question;
                document.getElementById("category").innerHTML = "<h3>Category: " + category + "</h3>";
                // document.getElementById("answer").innerHTML = answer;
                document.getElementById("answer").style.display = "block";
                document.getElementById("btnDisplayAnswer").addEventListener('click', function() {
                    document.getElementById("answer").innerHTML = answer;
                })
                //displayAnswerButton();
            });
        }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
});

function displayAnswerButton() {
    
    // document.getElementById("answer").innerHTML = "<button id='btnDisplayAnswer'>Display Answer</button>";
}

btnDisplayAnswer.addEventListener('click', function() {
    document.getElementById("answer").innerHTML = answer;
});