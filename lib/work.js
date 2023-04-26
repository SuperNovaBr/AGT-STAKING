const openbtn = document.getElementById("open-img");
const closebtn = document.getElementById("close-img");
const sidePnl = document.getElementById("sidePnl");
openbtn.addEventListener('click', () => {
  openbtn.classList.add('hidden');
  closebtn.classList.remove('hidden');
  sidePnl.classList.remove('hidden');
  sidePnl.classList.add('flex');
});
closebtn.addEventListener('click', () => {
  openbtn.classList.remove('hidden');
  closebtn.classList.add('hidden');
  sidePnl.classList.add('hidden');
  sidePnl.classList.remove('flex');
});