let modals = document.getElementsByClassName('modal')
let buttons = document.getElementsByClassName('modal-control')
let add_book = document.getElementsByClassName('btnAddBook')

for (let i=0; i<buttons.length; i++) {
  buttons[i].onclick = function() {
    buttons[i].style.display = "block"
  }
  window.onclick = function(event) {
    if (modals[i].style.display === "none"){
        modals[i].style.display = "none"
    }
}
}
