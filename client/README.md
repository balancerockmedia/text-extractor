Text Extractor UI
=================

### To run the app ###

* `bower install`
* Browse to index.html using your local web server

### To execute the tests ###

* `npm install`
* Install and run selenium standalone server version 2.43 (2.44 has a bug and will not work with phantomjs)
* Install phantomjs and add to your system path
* Install mocha and http-server globally (or locally if you prefer) `npm install -g mocha http-server`
* Start local webserver by running `http-server ./`
* Execute tests with `mocha test/pages`
