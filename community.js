// community.js

// Otwieranie modalu tworzenia grupy
function openCreateGroupModal() {
    document.getElementById('createGroupModal').style.display = 'flex';
}

// Zamykanie modalu tworzenia grupy
function closeCreateGroupModal() {
    document.getElementById('createGroupModal').style.display = 'none';
}

// Obsługa formularza tworzenia grupy
document.getElementById('createGroupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const groupName = document.getElementById('groupName').value;
    const groupDescription = document.getElementById('groupDescription').value;

    alert(`Grupa "${groupName}" została utworzona!`);
    closeCreateGroupModal();
});

// Dołączanie do grupy
function joinGroup(groupName) {
    alert(`Dołączyłeś do grupy "${groupName}"!`);
}