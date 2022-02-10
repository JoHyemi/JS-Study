const write = document.querySelector('.write');
const memo = document.querySelector('.memo');
const memos = document.querySelector('.memos');



function getMemo() {
  for(let i = 0; i < localStorage.length; i++) {
    let memoBox = localStorage.getItem(`memo${i}`);
    memos.innerHTML += `
    <article class="memoBox">${memoBox}</article>
    `
  }

};
getMemo();

write.addEventListener('click', ()=> {
  localStorage.setItem(`memo${localStorage.length}`, memo.value);
  memo.value = '';
  memos.innerHTML = '';
  getMemo();
})