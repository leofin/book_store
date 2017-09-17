module Api
  class BooksController < ApplicationController
    def list
      puts "params: #{params.inspect}"
      filters = params.permit(:query, :author, :order)

      query = filters[:query]
      author_filter = filters[:author]
      order = filters[:order]

      query = "%" + query + "%"
      books = Book.where("title ilike ? or description ilike ?", query, query).
              where("author ilike ?", "%" + author_filter + "%").
              order(title: order.to_sym)

      render json: {data: books, total: books.count}
    end
  end
end
