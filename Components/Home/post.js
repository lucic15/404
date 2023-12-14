
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('post-btn').addEventListener('click', openPost);
  document.getElementById('btn').addEventListener('click', openPost);

  document.addEventListener('click', function (event) {
    const postContainer = document.getElementById('postContainer');
    if (!postContainer.contains(event.target) && event.target.id !== 'post-btn') {
      postContainer.style.display = 'none';
      clearInputs();
    }
  });
});

function openPost() {
  // Display Post
  const postContainer = document.getElementById('postContainer');
  postContainer.style.display = 'flex';
}
function closePost() {
  // Display Post
  const postContainer = document.getElementById('postContainer');
  postContainer.style.display = 'none';
}
function createPost() {
  // Create Post
  const postContent = document.getElementById('postContent').value;
  const fileInput = document.getElementById('fileInput');
  const postTitle = document.getElementById('postTitle').value;

  // Check if the text input is empty
  if (!postContent.trim()) {
    alert('Text input is required!');
    return;
  }

  const file = fileInput.files[0];

  const cardElement = document.createElement('div');
  cardElement.classList.add('card');
  cardElement.style.width = '18rem';

  const cardImg = document.createElement('img');
  cardImg.classList.add('card-img-top');

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = postTitle;

  const cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardText.textContent = postContent;

  const cardLink = document.createElement('a');
  cardLink.classList.add('btn', 'btn-primary');
  cardLink.href = '#';
  cardLink.textContent = 'Delete';
  cardLink.addEventListener('click', deletePost.bind(null, cardElement));

  if (file) {
    const fileType = file.type.split('/')[0];
    const fileUrl = URL.createObjectURL(file);

    if (fileType === 'image') {
      cardImg.src = fileUrl;
    } else if (fileType === 'video') {
      return;
    }
  }

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardElement.appendChild(cardImg);
  cardBody.appendChild(cardLink);

  cardElement.appendChild(cardBody);

  // Delete img if src is empty
  if (!cardImg.src) {
    cardImg.remove();
  }

  document.getElementById('posts').appendChild(cardElement);

  document.getElementById('postContainer').style.display = 'none';
  clearInputs();
}


function deletePost(cardElement) {
  //Post Delete
  cardElement.remove();
}

function clearInputs() {
  //Input Clear
  document.getElementById('postContent').value = '';
  document.getElementById('fileInput').value = ''; 
  document.getElementById('postTitle').value = '';
}