# Custom Mission-Impossible style note

This is a stab at making a clone of
[privnote](https://privnote.com), because I didn't trust
them. But, after getting started, I came around to a better
understanding of how the algorithm there works (basically,
the same way I had in mind that it *should* work).

So, privnote is *probably* okay; ever since the last major
version came out. So, I probably won't ever get back to
finishing this one.

## How it works

It's expected that this will be used only over HTTPS.

The entry point is just an HTML form, "tnwsd.html". The
"index.html" page should redirect to that one.

The user types in his or her note, and clicks the button.
The *client* encrypts the note using an
auto-generated key that should be long enough to resist
brute force hacking for the foreseeable future. The key
is 30 random, base 64 characters.

The JS then POSTS to post.cgi, sending the first half of
the key and the ciphertext. post.cgi stores the ciphertext
in a data file, using the first half lf the key as f
filename.



## Third-party libraries

* jQuery: version 3.1.0
* crypto-js, version 3.1.6, downloaded on 2016-08-13 from
  [here](https://github.com/brix/crypto-js/archive/3.1.6.zip)


