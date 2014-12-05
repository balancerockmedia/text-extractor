require 'sinatra'
require 'json'
require './lib/text_extractor'

before do
  # set content type to JSON
  content_type :json

  # allow CORS requests
  headers 'Access-Control-Allow-Origin' => '*',
    'Access-Control-Allow-Methods' => ['OPTIONS', 'GET', 'POST', 'PUT', 'DELETE'],
    'Access-Control-Allow-Headers' => 'Content-Type'
end

# added so preflight requests succeed
options '*' do
  200
end

# routes
get '/' do
  'Nothing here to see...'
end

post '/upload' do
  text = TextExtractor::FromPDF.read(params[:file][:tempfile])

  {:pdf_text => text}.to_json
end