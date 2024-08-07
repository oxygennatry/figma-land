// function openPopup() {
//     document.getElementById("myPopup").style.display = "block";
//   }

//   function closePopup() {
//     document.getElementById("myPopup").style.display = "none";
//   }

const popup = document.getElementById('popup');
const openPopupBtn = document.getElementById('open-popup');
const closePopupBtn = document.querySelector('.close-popup');

function openPopup() {
    popup.style.display = 'block';
}

function closePopup() {
    popup.style.display = 'none';
}

openPopupBtn.addEventListener('click', openPopup);
closePopupBtn.addEventListener('click', closePopup);
