var webdriverio = require('webdriverio');
var assert = require('assert');
var path = require('path');

var client = {};

describe('Home Page', function() {
    this.timeout(99999999);

    beforeEach(function(done) {
        client = webdriverio.remote({
            desiredCapabilities: {
                browserName: 'phantomjs'
            }
        });

        client.init();

        client.setViewportSize({
            width: 1024,
            height: 768
        });

        done();
    });

    it('should show default message if no file is selected to upload', function(done) {
        client
            .url('http://localhost:8080')

            .submitForm('.js-fileUploadForm')

            .getText('.js-fileContents', function(err, text) {
                assert.equal(text, "Upload a PDF to see it's contents printed here.");
            })

            .call(done);
    });

    it('should upload a sample PDF and display the text content', function(done) {
        var fileToUpload = path.join(__dirname, '..', 'fixtures', 'adobe_sample.pdf');

        client
            .url('http://localhost:8080')
 
            .chooseFile('.js-fileUploadForm input[type="file"]', fileToUpload)

            .submitForm('.js-fileUploadForm')

            .waitForText('.js-fileContents')

            .getText('.js-fileContents', function(err, text) {
                assert.equal(text, 'This is a sample PDF file. If you can read this, you already have Adobe Acrobat Reader installed on your computer.');
            })

            .call(done);
    });

    afterEach(function(done) {
        client.end(done);
    });
});
