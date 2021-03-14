document.addEventListener('DOMContentLoaded', (event) => { //waits until page loads to start, otherwise devourBtn is null

    // change to 'devoured'
    const devourBtn = document.querySelectorAll('.devour-button');

    devourBtn.forEach(item => {
        item.addEventListener('click', (e) => {
            //handle click
            e.preventDefault();

            const dataId = e.target.getAttribute('data-id');
            const id = parseInt(dataId);

            const devouredTrue = {
                devoured: true,
            };

            fetch(`/api/burgers/${id}`, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify(devouredTrue),
            }).then((response) => { 
                if (response.ok) {
                    location.reload(''); 
                  } else {
                    alert('Oops, something went wrong!');
                  }
            });
        });
    });

    //create new burger
    const submitForm = document.getElementById('burgerForm');

    submitForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const burgerName = document.getElementById('burger-input').value.trim();
        const newBurger = {
            burger_name: burgerName,
        };

        fetch(`api/burgers`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(newBurger),
        }).then(() => {
            document.getElementById('burger-input').value = '';
            location.reload('');
        });
    });

}); // final brackets

