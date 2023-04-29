let li = document.querySelectorAll('.rating');
const list = [...li]

list.map((item) =>{
    item.addEventListener('click', () =>{
        console.log(item.value);
    });
});



