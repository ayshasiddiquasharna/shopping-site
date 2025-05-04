// JavaScript for dynamic content
document.getElementById('add-member-btn').addEventListener('click', function () {
    const teamList = document.getElementById('team-list');
    const newMember = prompt('Enter the name of the new team member:');

    if (newMember) {
        const listItem = document.createElement('li');
        listItem.textContent = newMember;
        teamList.appendChild(listItem);
    }
});
