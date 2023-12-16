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

  const cardMedia = document.createElement(file ? (file.type.startsWith('image/') ? 'img' : (file.type.startsWith('video/') ? 'video' : 'div')) : 'div');
  cardMedia.classList.add(file ? 'card-img-top' : 'placeholder');

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = postTitle;

  // Add the following line to set the data-title attribute
  cardElement.setAttribute('data-title', postTitle);

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
          cardMedia.src = fileUrl;
      } else if (fileType === 'video') {
          cardMedia.src = fileUrl;
          cardMedia.setAttribute('controls', 'controls');
      }
  }

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardElement.appendChild(cardMedia);
  cardBody.appendChild(cardLink);

  cardElement.appendChild(cardBody);

  // Delete media if src is empty
  if (!cardMedia.src) {
      cardMedia.remove();
  }

  document.getElementById('posts').appendChild(cardElement);

  document.getElementById('postContainer').style.display = 'none';
  clearInputs();
}

function deletePost(cardElement) {
  // Post Delete
  cardElement.remove();
}

function clearInputs() {
  // Input Clear
  document.getElementById('postContent').value = '';
  document.getElementById('fileInput').value = '';
  document.getElementById('postTitle').value = '';
}

// Add JavaScript to handle search functionality
document.getElementById('searchBar').addEventListener('input', function () {
  var searchValue = this.value.toLowerCase();

  // Loop through each card
  document.querySelectorAll('.card').forEach(function (card) {
      var title = card.dataset.title.toLowerCase();

      // If the card title includes the search value, show the card; otherwise, hide it
      card.style.display = title.includes(searchValue) ? 'block' : 'none';
  });
});