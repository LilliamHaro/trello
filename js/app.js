window.addEventListener('load', function() {
  var input = document.getElementById('input');
  input.addEventListener('click', function(event) {
    var form = document.getElementById('form');
    var button = document.getElementById('button');
    var cross = document.getElementById('cross');
    form.setAttribute('class', 'form-post-click');
    input.setAttribute('class', 'input-pre-click input-post-click');
    button.setAttribute('class', 'button-post-click');
    cross.setAttribute('class', 'fa fa-times');
  });
  button.addEventListener('click', function(event) {
    if (input.value === '') {
      button.disabled = true;
    } else {
    var nameList = document.createElement('p');
    nameList.innerHTML = input.value;
    nameList.setAttribute('class', 'paragraph name-list');
    var newCard = document.createElement('p');
    newCard.setAttribute('class', 'paragraph underline');
    newCard.innerHTML = 'Añadir una tarjeta...';
    var newBoard = document.createElement('div');

    newBoard.setAttribute('class', 'form-post-click');
    newBoard.appendChild(nameList);
    newBoard.appendChild(newCard);
    document.getElementById('main').insertBefore(newBoard, document.getElementById('main').lastElementChild);
    document.getElementById('input').value = '';
    }
    newCard.addEventListener('click', function(event) {
      newCard.setAttribute('class', 'pre-click');
      var newForm = document.createElement('form');
      newForm.setAttribute('id', 'form');
      var card = document.createElement('textarea');
      card.setAttribute('id', 'card');
      newForm.appendChild(card);
      card.setAttribute('class', 'textarea-card');
      var newSaveButton = document.createElement('input');
      newSaveButton.setAttribute('class', 'button-post-click');
      newSaveButton.setAttribute('type', 'submit');
      newSaveButton.setAttribute('value', 'Añadir');
      newBoard.appendChild(newForm);
      newBoard.appendChild(newSaveButton);
      newSaveButton.addEventListener('click', function(event) {
        var savedCard = document.createElement('p');
        savedCard.innerHTML = document.getElementById('card').value;
        savedCard.setAttribute('class', 'paragraph');
        newBoard.appendChild(savedCard);
        card.value = '';
      });
    });
  });
});

// falta arreglar para que los div vayan a la derecha del otro
// validar los vacios
