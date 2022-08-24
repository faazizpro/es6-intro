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


document.getElementById('add-friend').addEventListener('click', function(){
    const friendsContainer = document.getElementById('friends');

    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
    <h3 class= "friend-name">New Friend Fahad</h3>
    <p>Something New Friend Added</p>
    `
    friendsContainer.appendChild(friendDiv);
})