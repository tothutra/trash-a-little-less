var toggleBtn = document.querySelector('.sidebar-toggle');
var sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', function() {
  sidebar.classList.toggle('is-closed');
})
