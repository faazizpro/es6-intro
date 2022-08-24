document.getElementById('apply-bg').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor = 'lightblue';
    }

})

document.getElementById('center-third').addEventListener('click', function(){
    const friend3 = document.getElementById('third-friend');
    friend3.style.textAlign = 'center';
    friend3.style.textDecoration = 'underline'
})