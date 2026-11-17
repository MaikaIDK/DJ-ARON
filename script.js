// 1. Find the form and the status message in the HTML using their ids
const form = document.getElementById('bookingForm');
const statusBox = document.getElementById('status');

// 2. Run this code when the visitor clicks "Send booking request"
form.addEventListener('submit', function (event) {
  // Stop the browser's default behavior (reloading the page)
  event.preventDefault();

  // 3. Collect everything the visitor typed
  const data = new FormData(form);

  // 4. Build the email text, line by line
  const body =
    'Name: ' + data.get('name') + '\n' +
    'Contact: ' + data.get('contact') + '\n' +
    'Event: ' + data.get('type') + '\n' +
    'Date: ' + data.get('date') + '\n' +
    'Location: ' + data.get('place') + '\n\n' +
    (data.get('msg') || '');

  const subject = 'Booking request: ' + data.get('type') + ' on ' + data.get('date');

  // 5. Make a mailto: link. encodeURIComponent makes spaces and symbols safe for a link
  const link =
    'mailto:aronresuma@gmail.com' +
    '?subject=' + encodeURIComponent(subject) +
    '&body=' + encodeURIComponent(body);

  // 6. Tell the visitor what is happening, then open their email app
  statusBox.textContent = 'Opening your email app with the request filled in.';
  window.location.href = link;
});
