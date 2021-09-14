const Filter = function() {

    let items = document.querySelectorAll('.galery__item');
    
    console.log(items);
    let buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            
            if (event.target.dataset.set == 'all') {
                items.forEach(item => {
                    item.classList.add('active');
                })
                
            }
            if (event.target.dataset.set == 'red') {
                console.log('red');
            }
            if (event.target.dataset.set == 'green') {
                console.log('green');
            }
            if (event.target.dataset.set == 'blue') {
                console.log('blue');
            }
        })
    })

    
};

let filter = new Filter();
