window.addEventListener('load', function() {
  // definimos el elemnto que va a escuchar el evento
  var input = document.getElementById('input');
  // definimos el contenedor de todos los elemntos
  var allContainer = document.getElementById('main');
  // ------------------------------------------EVENTO CLICK EN EL INPUT----------------------------------------------------------
  input.addEventListener('click', function(event) {
    input.value = '';
    var form = document.getElementById('form');
    var button = document.getElementById('button');
    var cross = document.getElementById('cross');
    form.setAttribute('class', 'form-post-click');
    input.setAttribute('class', 'input-pre-click input-post-click');
    button.setAttribute('class', 'button-post-click');
    cross.setAttribute('class', 'fa fa-times');
  });
  // ------------------------------------------EVENTO CLICK AL AÑADIR TABLA-------------------------------------------------------
  button.addEventListener('click', function(event) {
    // validamos que el campo no esté vacío
    if (input.value === '') {
      // si el campo está vacío no se agrega nada
    } else {
      // definimos el contenedor de la nueva tabla
      var newBoard = document.createElement('div');
      newBoard.setAttribute('id', 'div');
      newBoard.setAttribute('class', 'form-post-click');
      // definimos el titulo de la tabla
      var nameList = document.createElement('p');
      nameList.innerHTML = input.value;
      nameList.setAttribute('class', 'paragraph name-list');
      // anexamos la tabla al contenedor principal
      allContainer.insertBefore(newBoard, allContainer.lastElementChild);
      // anexando nombre de lista a la tabla
      newBoard.appendChild(nameList);
      // agregamos la opcion de agregar nuevas tareas
      var newTask = document.createElement('div');
      newTask.setAttribute('class', 'paragraph underline');
      newTask.innerHTML = 'Añadir una tarjeta...';
      newBoard.appendChild(newTask);
      // limpiamos el input que ya usamos
      input.value = '';
      // ---------------------------------------EVENTO CLICK AL AGREGAR NUEVA TAREA---------------------------------------------
      newTask.addEventListener('click', function(event) {
        // desaparece la opcion agregar nueva tarea
        newTask.setAttribute('class', 'pre-click');
        // se crea un formulario (form-textarea-button)
        var form = document.createElement('form');
        // form.setAttribute('id', 'form');
        var textArea = document.createElement('textarea');
        textArea.setAttribute('id', 'card');
        textArea.setAttribute('class', 'textarea-card');
        form.appendChild(textArea);
        var saveButton = document.createElement('input');
        saveButton.setAttribute('type', 'submit');
        saveButton.setAttribute('class', 'button-post-click');
        saveButton.setAttribute('value', 'Añadir');
        var contForm = document.createElement('div');
        contForm.appendChild(form);
        contForm.appendChild(saveButton);
        // se anexa el contenedor del formulario al documento
        newBoard.appendChild(contForm);
        // se aplica al text area del formulario que se acaba de crear
        textArea.focus();
        // --------------------------------------EVENTO CLICK AL GUARDAR UNA TAREA---------------------------------------------
        saveButton.addEventListener('click', function(event) {
          // se crea un contenedor con el texto escrito en el formulario anterior
          var task = document.createElement('div');
          task.setAttribute('class', 'paragraph');
          task.setAttribute('id', 'task');
          // validamos que no sea un texto vacío
          if (textArea.value !== '') {
            saveButton.disabled = false;
            task.innerHTML = textArea.value;
            // se anexa la nueva tarea a la tabla
            newBoard.insertBefore(task, newBoard.lastElementChild);
            // se limpia el textarea que usamos
            textArea.value = '';
            // se aplica focus al mismo textarea por si el usuario desea agregar un anueva tarea
            textArea.focus();
          } else {
            // si hay texto vacio no se agrega nada
          }
        });
      });
    }
  });
});
