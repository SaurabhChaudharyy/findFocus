document.getElementById('blocker-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var website = document.getElementById('website').value;
    // Add the website to your list of blocked websites here
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(website));
    document.getElementById("blocked-websites").appendChild(li);
    document.getElementById('website').value = '';
});
