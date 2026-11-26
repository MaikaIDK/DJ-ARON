const form = document.getElementById('bookingForm');
const statusBox = document.getElementById('status');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const data = new FormData(form);
  const to = 'aronresuma@gmail.com';

  const body =
    'Name: ' + data.get('name') + '\n' +
    'Contact: ' + data.get('contact') + '\n' +
    'Event: ' + data.get('type') + '\n' +
    'Date: ' + data.get('date') + '\n' +
    'Location: ' + data.get('place') + '\n\n' +
    (data.get('msg') || '');

  const subject = 'Booking request: ' + data.get('type') + ' on ' + data.get('date');

  const mailto =
    'mailto:' + to +
    '?subject=' + encodeURIComponent(subject) +
    '&body=' + encodeURIComponent(body);

  const gmail =
    'https://mail.google.com/mail/?view=cm&fs=1&to=' + to +
    '&su=' + encodeURIComponent(subject) +
    '&body=' + encodeURIComponent(body);

  statusBox.textContent = 'Opening your email app. ';

  const link = document.createElement('a');
  link.href = gmail;
  link.target = '_blank';
  link.rel = 'noopener';
  link.textContent = 'Nothing opened? Send it with Gmail instead.';
  statusBox.appendChild(link);

  window.location.href = mailto;
});
