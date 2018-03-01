window.onload = function() {
    
    var buttons = document.getElementById('buttons');
    var clear = document.getElementById('clear');
    var answer = document.getElementById('answer');
    
    buttons.addEventListener('click', function(e) {
        console.log(e.target);
        if (e.target.nodeName === 'LI') {
            var v = e.target.innerHTML;
            if (v === '=') {
                try {
                    answer.innerHTML = eval(answer.innerHTML);
                } catch(e) {
                    answer.innerHTML = e.message;
                }
            } else {
            answer.innerHTML += v;
            }
        }
    });
    

    clear.addEventListener('click', function() {
            answer.innerHTML = '';
    });
};


