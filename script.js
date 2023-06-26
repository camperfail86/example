var textTemplate = document.querySelector('#message-template').content;
var chatmessage = textTemplate.querySelector('.chat-message');
var form = document.querySelector('.chat-form');
var chat = document.querySelector('.chat-content');
var divChat = chat.children;
console.log(divChat);
var input = form.querySelector('.chat-form-input');  

form.addEventListener('submit', function(evt) {
  evt.preventDefault();

  var textInput = input.value;
  let newMessage = textTemplate.cloneNode(true);
  var text_newMessage = newMessage.querySelector('.chat-message-text');
  text_newMessage.textContent = textInput;
  closeMessage(newMessage);
  chat.appendChild(newMessage);
  input.value = '';
})

var closeMessage = function (Message) {
  var closeButton = Message.querySelector('.chat-message-button');
  closeButton.addEventListener('click', function () {
    Message.remove();
  });
}

/* Техническое задание

Мяу! Длительность прогулки зависит от нескольких условий.

Если идёт дождь, гулять я не хожу. В этом случае длительность прогулки равняется 0. А вот если дождя нет, всё зависит от температуры на улице:

Во-первых, если температура от 10°C (включительно) до 15°C (не включая это значение), я гуляю 30 минут.

Во-вторых, если температура от 15°C (включительно) до 25°C (не включая значение), я гуляю 40 минут.

В-третьих, при температуре от 25°C (включительно) до 35°C (включительно), я гуляю 20 минут.

В остальных случаях я никуда не выхожу: либо очень холодно, либо очень жарко.

Результат программы – время прогулки. Его необходимо записать в переменную minutes.

*/

