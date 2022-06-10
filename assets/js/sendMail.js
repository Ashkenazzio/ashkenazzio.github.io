const form = document.getElementById('contact-form');

function sendMail(e) {
  e.preventDefault();
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const msg = document.getElementById('msg');
  const cc = document.getElementById('cc');
  const ccValue = $(cc).prop('checked');

  Email.send({
    SecureToken: '3cb4de1c-2285-4668-9a3f-61401f303e17',
    To: 'ashkenazzio@gmail.com',
    From: email.value,
    Cc: ccValue ? email.value : undefined,
    Subject: `[NEW CONTACT - ${name.value} ] ` + subject.value,
    Body: msg.value,
  }).then((message) => alert(message));
}

form.addEventListener('submit', sendMail);
