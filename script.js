function marl() {
    let marlg = document.getElementById('cass').value;
    let marlm = document.getElementById('passc').value;
    
    if(marlg == "marlgian" && marlm == "iloveyou") {
        location.href = 'home.html';
    } else {
        alert('Incorrect Username or Password');
    }
}