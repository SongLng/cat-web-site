const hour = new Date().getHours();
const min = new Date().getMinutes();


function createItem() {

  const newListItem = document.createElement('li');
  newListItem.classList.add('actions__log--line');
  const time = `${hour}:${min}`;
  let reaction;
  let reactionText;

if(this.classList.contains('smile')){
  reaction = 'smile'
  reactionText = 'was added to Likes';
} else if(this.classList.contains('heart')){
  reaction = 'heart';
  reactionText = 'was added to Favourites';
} else {
  reaction = 'sad'
  reactionText = 'was added to Dislikes';
}



  const listItemContent = `
    <div class="actions__log--time">${time}</div>
        <div class="actions__log--wrapper">
          <div class="actions__log--text">Image Id: <b>fQSunHvl8</b> ${reactionText}</div>
          <svg class="actions__log--img ${reaction}">
              <use href="./images/icons.svg#${reaction}"></use>
          </svg>
        </div>
      `;

  newListItem.insertAdjacentHTML('beforeend', listItemContent);

  addItemToList(newListItem);
}




const actionsLog = document.querySelector('.actions__log--list');





const buttons = document.querySelectorAll('.reactions__button')

buttons.forEach(button => button.addEventListener('click', createItem))

function addItemToList(element) {
  actionsLog.appendChild(element);
}
