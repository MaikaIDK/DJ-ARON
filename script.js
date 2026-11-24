const form = document.getElementById('bookingForm');
const statusBox = document.getElementById('status');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const data = new FormData(form);

  const body =
    'Name: ' + data.get('name') + '\n' +
    'Contact: ' + data.get('contact') + '\n' +
    'Event: ' + data.get('type') + '\n' +
    'Date: ' + data.get('date') + '\n' +
    'Location: ' + data.get('place') + '\n\n' +
    (data.get('msg') || '');

  const subject = 'Booking request: ' + data.get('type') + ' on ' + data.get('date');

  const link =
    'mailto:aronresuma@gmail.com' +
    '?subject=' + encodeURIComponent(subject) +
    '&body=' + encodeURIComponent(body);

  statusBox.textContent = 'Opening your email app with the request filled in.';
  window.location.href = link;
});
