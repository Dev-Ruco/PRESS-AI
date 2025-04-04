function toggleProfileDropdown() {
  const dropdown = document.getElementById('accountDropdown');
  if (dropdown) dropdown.classList.toggle('show');
}

function toggleNotifications() {
  const dropdown = document.getElementById('notificationsDropdown');
  if (dropdown) dropdown.classList.toggle('show');
}

window.addEventListener('click', function (e) {
  const profile = document.getElementById('accountDropdown');
  const notifications = document.getElementById('notificationsDropdown');

  if (profile && !e.target.closest('.account')) {
    profile.classList.remove('show');
  }

  if (notifications && !e.target.closest('.notification-wrapper')) {
    notifications.classList.remove('show');
  }
});

document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active'));
    item.classList.add('active');
  });
});
