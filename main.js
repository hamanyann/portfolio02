// ナビゲーションバーの開閉
const checkbox = document.getElementById('drawer_input');
const navigation = document.querySelector('.nav_content');

checkbox.addEventListener('click', function (event) {
  if (checkbox.checked) {
    navigation.classList.add('nav_checked');
  } else {
    navigation.classList.remove('nav_checked');
  }
});

document.addEventListener('click', function (event) {
  if (!event.target.closest('input#drawer_input')) {
    navigation.classList.remove('nav_checked');
  }
});
navigation.addEventListener('click', function (event) {
  event.stopPropagation();
});
