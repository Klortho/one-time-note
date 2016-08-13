

const formUrl = window.location.origin + window.location.pathname;
const lastSlash = formUrl.lastIndexOf('/')
const parent = formUrl.substr(0, lastSlash + 1);
const showCgi = parent + 'show.cgi';
const postCgi = parent + 'post.cgi';


function storeNote() {
  const note = $('#note').val();
  if (note.length === 0) return false;
  console.log('note: ', note);

  // Make a random key
  const chars = 'abcdefghijklmnopqrstuvwxyz' +
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var key = '';
  for (var i = 0; i < 30; ++i) {
    key += chars.charAt(Math.floor(Math.random() * 62));
  }

  // Encrypt
  var cipher = CryptoJS.AES.encrypt(note, key).toString();
  console.log('cipher: ', cipher);

  const k0 = key.substring(0, 15);
  const k1 = key.substring(15);

  const showUrl = showCgi + '?' + k0 + '#' + k1;

  $.post(postCgi, { k0: k0, cipher: cipher })
    .done(function(data) {
      console.log("Data Loaded: " + data);


      $('#head').text('Here\'s the URL to your note');
      $('#note').style = 'display: none';

      $('url').text

      return;
    })
    .fail(function(err) {
      const msg = 'Problem trying to create the note on the server. ' +
        'Sorry! Please tell the author of this tool.';
      console.error(msg);
      alert(msg);
      return;
    });

  return false;
}



/*
  // Decrypt
  var plain = CryptoJS.AES.decrypt(cipher, key)
    .toString(CryptoJS.enc.Utf8);
  console.log('plain: ', plain);
*/



