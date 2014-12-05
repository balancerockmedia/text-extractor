require 'rubygems'
require 'pdf/reader'

# A module for extracting text from different types of files
module TextExtractor

  # Extract text from PDF files using the PDF::Reader library
  class FromPDF
    def self.read(io)
      pages_text = ''

      reader = PDF::Reader.new(io)
      
      reader.pages.each do |page|
        pages_text.concat(page.text)
      end

      pages_text
    end
  end

end