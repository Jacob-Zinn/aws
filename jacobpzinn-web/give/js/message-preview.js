function testing() {
  let message = document.getElementById(`message`);
  let to = document.getElementById(`to`);
  let from = document.getElementById(`from`);

  message.innerText =  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo libero, tempore debitis quasi rem id quia expedita eveniet enim deserunt ducimus nobis amet commodi quisquam assumenda excepturi vel earum consectetur.`;
  to.innerText = `Happy Gilmore`;
  from.innerText = `Jacob`;
}
// zzz delete ^

function getMessagePreview(message, to, from) {
  console.log(`preview message showing`);
  let messagePreview = document.getElementById(`messagePreview`);

  message.classList.remove(`altborder`);
  to.classList.remove(`altborder`);
  from.classList.remove(`altborder`);
  messagePreview.innerHTML = ``;

  let headerDiv = document.createElement(`div`);
  headerDiv.classList.add(`flex`);
  headerDiv.style.justifyContent = `space-between`;
  headerDiv.style.border = `1px solid var(--gray)`;
  headerDiv.style.borderRadius = `.5rem .5rem 0 0`;
  logoDiv = document.createElement("div");
  headerDiv.appendChild(logoDiv);
  logoElement = document.createElement(`h3`);
  logoElement.classList.add(`text-color-primary`);
  logoElement.innerText = "give";
  logoElement.style.padding = `.3rem .5rem`;
  logoDiv.appendChild(logoElement);
  let headerTextElement = document.createElement(`p`);
  headerTextElement.innerText = `a message, just for you`;
  headerTextElement.classList.add(`text-color-primary`);
  headerTextElement.style.padding = `.3rem .8rem`;
  headerDiv.appendChild(headerTextElement);

  let messageContainerDiv = document.createElement(`div`);
  messageContainerDiv.style.border = `1px solid var(--gray)`;
  messageContainerDiv.style.borderRadius = `0 0 .5rem .5rem`;
  let messageDiv = document.createElement(`div`);
  messageDiv.style.padding = `.6rem .8rem`;
  messageContainerDiv.appendChild(messageDiv);
  let toElement = document.createElement(`p`);
  toElement.innerText = `${to.innerText},`;
  let messageElement = document.createElement(`p`);
  messageElement.innerText = message.innerText;
  messageElement.style.padding = `1rem 0`;
  messageElement.style.textAlign = `center`;
  let fromElement = document.createElement(`p`);
  fromElement.innerText = `yours truly,\n${from.innerText}`;
  fromElement.style.textAlign = `end`;
  messageDiv.appendChild(toElement);
  messageDiv.appendChild(messageElement);
  messageDiv.appendChild(fromElement);

  messagePreview.appendChild(headerDiv);
  messagePreview.appendChild(messageContainerDiv);

}

function requireMessagePreviewFields(emptyElementArray) {
  let message = document.getElementById(`messagePreview`);
  const errorText = document.createElement(`p`);
  errorText.innerText = `You're message is half baked! Please fill out the rest of the fields.`;
  message.innerHTML = ``;
  message.appendChild(errorText);

  for (element of emptyElementArray) {
    element.classList.add(`altborder`);
  }
}

document.getElementById(`previewBtn`).addEventListener(`click`, () => {
  let message = document.getElementById(`message`);
  let to = document.getElementById(`to`);
  let from = document.getElementById(`from`);
  if (
    message.innerText.length === 0 ||
    to.innerText.length === 0 ||
    from.innerText.length === 0
  ) {
    let emptyElementArray = [];
    if (message.innerText.length === 0) {
      emptyElementArray.push(message);
    }
    if (to.innerText.length === 0) {
      emptyElementArray.push(to);
    }
    if (from.innerText.length === 0) {
      emptyElementArray.push(from);
    }
    requireMessagePreviewFields(emptyElementArray);
  } else {
    getMessagePreview(message, to, from);
  }
});
