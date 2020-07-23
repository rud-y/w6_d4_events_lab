document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector("#new-item-form");
  form.addEventListener('submit', handleFormSubmit);
})

const handleFormSubmit = function(event) {
  event.preventDefault();
  const resultParagraph = document.querySelector("#reading-list");
        resultParagraph.appendChild(listItemMaster);
        restultParagraph.textContent = this;
   
  const listItemMaster = document.createElement('li');
      listItemMaster.textContent = list;
      

const listItemTitle = document.createElement('li');
      listItemTitle.textContent = event.target.title.value;
      listItemTitle.classList.add('title');
const listItemAuthor = document.createElement('li');
      listItemAuthor.textContent = event.target.author.value;
      listItemAuthor.classList.add('author');
const listItemCategory = document.createElement('li');
      listItemCategory.textContent = event.target.category.value;
      listItemCategory.classList.add('category');
 

const list = document.createElement('ul');
    list.appendChild(listItemTitle);
    list.appendChild(listItemAuthor);
    list.appendChild(listItemCategory);
      
};

