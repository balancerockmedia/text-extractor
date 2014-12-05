Text Extractor API
==================

### Description

This API exposes an endpoint for uploading a PDF file and recieving back the text contents.

### To run the app ###

* `bundle install`
* `ruby app.rb`

### Docs

#### Upload File

##### Request

POST /upload
Content-Type: multipart/form-data

##### Response - Success

HTTP/1.1 200 OK
Content-Type: application/json

{ "pdf_text": "Lorem ipsum dolor sit amet." }

##### Response - Failure (Internal Server Error)

HTTP/1.1 500 Internal Server Error