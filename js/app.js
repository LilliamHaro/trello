window.addEventListener('load', function() {
  var input = document.getElementById('input');
  var counter = 0;
  var allContainer = document.getElementById('main');
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
      // agregando titulo
      // definimos el contenedor de toda la tabla
      var newBoard = document.createElement('div');
      newBoard.setAttribute('id', 'div');
      newBoard.setAttribute('class', 'form-post-click');
      // definimos el contenedor del titulo de la tabla
      var nameList = document.createElement('p');
      nameList.innerHTML = input.value;
      nameList.setAttribute('class', 'paragraph name-list');
      // anexando tabla al documento
      allContainer.insertBefore(newBoard, allContainer.lastElementChild);
      // anexando nombre de lista a la tabla
      newBoard.appendChild(nameList);
      // agregando opcion de agregar nuevas tareas
      var newTask = document.createElement('div');
      newTask.setAttribute('class', 'paragraph underline');
      newTask.innerHTML = 'Añadir una tarjeta...';
      newBoard.appendChild(newTask);
      input.value = '';
      // se agrupa el num de newTask existentes para saber con cual se está trbajando
      var arrNewTask = document.getElementsByClassName('paragraph underline');
      // evento al hacer en la opcion agregar nueva tarea
      arrNewTask[arrNewTask.length - 1].addEventListener('click', function(event) {
        // desaparece la opcion agregar nueva tarea
        newTask.setAttribute('class', 'pre-click');
        // se crea un formulario (form-textarea-button)
        var form = document.createElement('form');
        form.setAttribute('id', 'form');
        var textArea = document.createElement('textarea');
        textArea.setAttribute('id', 'card');
        textArea.setAttribute('class', 'textarea-card');
        form.appendChild(textArea);
        var saveButton = document.createElement('input');
        saveButton.setAttribute('type', 'submit');
        saveButton.setAttribute('class', 'button-post-click');
        saveButton.setAttribute('value', 'Añadir');
        // form.appendChild(saveButton);
        // se anexa el formulario al documento
        var contForm = document.createElement('div');
        contForm.appendChild(form);
        contForm.appendChild(saveButton);
        newBoard.appendChild(contForm);
        textArea.focus();
        saveButton.addEventListener('click', function(event) {
          var task = document.createElement('div');
          task.setAttribute('class', 'paragraph');
          task.setAttribute('id', 'task' + counter);
          task.innerHTML = textArea.value;
          newBoard.insertBefore(task, newBoard.lastElementChild);
          textArea.value = '';
          textArea.focus();
        });
      });
    }
  });
});

// falta arreglar para que los div vayan a la derecha del otro
// validar los vacios
