let messageCount = 0;
const info = "Number of messages you have sent Jay since last reloading: ";
/* When user fills out the form and click "Submit", displays their message in messages.html and increases
   messageCount. Messagecount */
const handleSubmitForm = () => {
  const form = document.querySelector('form');
  let message = "";

  form.addEventListener('submit', (event) => {

    event.preventDefault();

    let nameInput = form.querySelector('input[type="text"]');
    let messageInput = form.querySelector('input[type="textarea"]');

    if (nameInput.value == "" || messageInput.value == "") {
      alert("You haven't filled out one of the fields. Please fill in your name and message");
    } else {
      messageCount++;
      // Add messageCount to cookie

      message = `Thank you ${nameInput.value} for sending me this message: "${messageInput.value}".`;
      nameInput.value = "";
      messageInput.value = "";
      // console.log(message + "Hahaha" + messageCount);
      document.getElementById("thank-you").innerText = message;

      document.getElementById("client-count").innerText = info + messageCount;

      document.cookie = `messageCount=${messageCount}`;


      // fetch('http://localhost:3000/', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ messageCount }),
      // })
      //   .then(response => {
      //     if (response.ok) {
      //       console.log('Message count sent to server successfully');
      //     } else {
      //       console.error('Failed to send message count to server');
      //     }
      //   })
      //   .catch(error => {
      //     console.error('Error sending message count to server:', error);
      //   });
    }
  });
}


document.addEventListener("DOMContentLoaded", (event) => {
  // We wrap each question in a try-catch so that way even if
  // your code for one question errors, the other ones
  // will work.
  try {
    handleSubmitForm();
  } catch (e) {
    console.error(e);
  }

  // try {
  //   addRandomShit();
  // } catch (e) {
  //   console.error(e);
  // }

  // try {
  //   question3();
  // } catch (e) {
  //   console.error(e);
  // }
});






/*  TODO 1: Input validation. DONE
    TODO 2: When user clicks submit in more.html, clear all fields and save Name and Message to cookies DONE
    Load Name and Message to a third page named messages.html, saying "At time..., you send message ... to Jay"
    TODO 3: Add a change background button 
    TODO 4 (if time permits): Flip each CSS card about class/hobbies when being hovered */