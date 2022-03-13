const form = document.querySelector('#submit')

form.addEventListener('click', function(e){

    e.preventDefault();

    const name = document.querySelector('#name')
    const value = name.value;

    console.log(value);
})
