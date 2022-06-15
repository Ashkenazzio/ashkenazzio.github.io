const form = document.getElementById('contact-form');

function sendMail(e) {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const msg = document.getElementById('msg');
  const cc = document.getElementById('cc');
  const ccValue = $(cc).prop('checked');

  Email.send({
    SecureToken: '85c5a24f-3659-46e1-b176-eb8131cd702d',
    To: 'ashkenazzio@gmail.com',
    From: email.value,
    Cc: ccValue ? email.value : undefined,
    Subject: `[NEW CONTACT - ${name.value} ] ` + subject.value,
    Body: msg.value + '<br /><br /> ~Sent from Omri\'s portfolio form~',
  }).then((message) => alert(message));
}
