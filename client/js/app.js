var TextExtractor = {
    serverUrl: 'http://localhost:4567/',

    fileUploadFormSubmit: function(e) {
        e.preventDefault();

        // get array of files
        var files = $('.js-fileUploadForm input[type="file"]')[0].files;

        // stop if no files were selected
        if (files.length === 0) {
            return;
        }

        // clear help text
        $('.js-fileContents').empty();

        // get first file
        var selected_file = $('.js-fileUploadForm input[type="file"]')[0].files[0];

        // set up ajax request
        var xhr = new XMLHttpRequest();

        // handle ready state change event
        xhr.onreadystatechange = function(e) {
            if (xhr.readyState !== 4) {
                return;
            }

            var response;

            if (xhr.status === 200) {
                response = this.responseText;
            } else {
                response = 'Something went wrong!';
            }

            $('.js-fileContents').text(JSON.parse(response).pdf_text);

            // clear form
            $('.js-fileUploadForm').get(0).reset();
        };

        // setup FormData to be sent to API
        var formData = new FormData();
        formData.append('file', selected_file);

        // make the request
        xhr.open('POST', TextExtractor.serverUrl + 'upload', true);
        xhr.send(formData);
    },

    init: function() {
        $('.js-fileUploadForm').on('submit', TextExtractor.fileUploadFormSubmit);
    }
};

$(function() {
    TextExtractor.init();
});