// const myModal = new boostrap.Modal('#exampleModalCenter');
// console.log(myModal)
// document.querySelector('.btn-close').addEventListener('click', ()=>{
//   console.log(click)
//   myModal.hide();

// });

const closeButton = document.getElementById('closeButton');
const modal = document.getElementById('exampleModalCenter');


closeButton.addEventListener('click', () => {
  modal.style.display = 'none'; // Hides the modal
  window.location.href = '';
});

const closeBtn = document.getElementById('closeBtn');
const model = document.getElementById('exampleModelCenter');
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none'; // Hides the modal
  window.location.href = '';
});


const editableContent = document.getElementById('editableContent');
const editButton = document.getElementById('editButton');

let isEditing = false;

editButton.addEventListener('click', () => {
  isEditing = !isEditing;

  if (isEditing) {
    editableContent.contentEditable = true;
    editableContent.style.backgroundColor = "#f0f0f0";
    editButton.textContent = 'Save';
  } else {
    editableContent.contentEditable = false;
    editableContent.style.backgroundColor = "";
    editButton.textContent = 'Edit';

    // Add your logic to save the edited content here
    const editedContent = editableContent.textContent;
    console.log("Edited content:", editedContent); // Replace with your saving logic (e.g., sending to server)
  }
});

// const threeDotButton = document.querySelector('.three-dot-button');
// const menuContent = document.querySelector('.menu-content');

// threeDotButton.addEventListener('click', () => {
//   menuContent.classList.toggle('hidden');  // Toggle visibility using classList
// });

// for dot menu
function toggleFrame(frameId) {
  const frame = document.getElementById(frameId);
  frame.classList.toggle('visible');
  frame.classList.toggle('hidden');
}

function removeFrames() {
  const frames = document.querySelectorAll('.frame');
  frames.forEach(frame => {
      frame.classList.add('hidden');
      frame.classList.remove('visible');
  });
}





