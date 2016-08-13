# Custom Mission-Impossible style note

This is a start at a clone of privnote, but I didn't get
very far. I think that privnote is actually okay, since
the last major version came out.
I probably won't get back to this one.

## How this works

This is the main form. "index.html" should raedirect here.
The user types in his or her note, and clicks the button.
At that point, the client encrypts the note using an auto-
generated key. The key is 30 random, base 64 characters.

The JS then POSTS to post.cgi, sending the first half of
the key and the ciphertext. post.cgi stores the ciphertext
in a data file.

Oh, shoot, the place I wanted to deploy it to doesn't let
me write to the filesystem.


## Third-party libraries

* jQuery: version 3.1.0
* crypto-js, version 3.1.6, downloaded on 2016-08-13 from
  [here](https://github.com/brix/crypto-js/archive/3.1.6.zip)


