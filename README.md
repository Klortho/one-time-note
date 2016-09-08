# one-time-note

A service that let's your write Mission-Impossible style
notes that can only be viewed once.

This is a stab at making a clone of
[privnote](https://privnote.com), undertaken because I didn't trust
them. In an early blog post I read of the author's, he seemed
a bit tone-deaf to the concerns that people might not be
willing to take his word for it that he destroyed logs on his
server, etc. Also, privnote, it seems, uses an old library and
algorithm for AES encryption:
[gibberish-aes](https://github.com/mdp/gibberish-aes), the
README for which says:

> This library is a quite old, and uses an older and
> non-authenticated cipher mode, CBC. There are better
> and more frequently maintained alternatives

So, it would be good to finish this one.


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


