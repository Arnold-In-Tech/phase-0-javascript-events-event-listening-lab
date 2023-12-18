
function addingEventListener() {
    const input = document.getElementById('button'); // OR querySelector("input")
    
    function clickAlert() {
        alert('I was clicked!');
    }
    
    input.addEventListener('click', clickAlert);

}

addingEventListener();
