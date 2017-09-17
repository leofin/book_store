module Api
  class BooksController < ApplicationController
    def list
      puts "params: #{params.inspect}"
      filters = params.permit(:query, :author)

      query = filters[:query]
      author_filter = filters[:author]

      books = Book

      if query
        query = "%" + query + "%"
        books = Book.where("title ilike ? or description ilike ?", query, query) 
      end
      books = books.where("author ilike ?", "%" + author_filter + "%") if author_filter

      books = books.all unless query || author_filter

      render json: {data: books, total: books.count}
    end
  end
end
