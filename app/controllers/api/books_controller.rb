module Api
  class BooksController < ApplicationController
    def list
      books = Book.all
      render json: {data: books, total: books.count}
    end
  end
end
