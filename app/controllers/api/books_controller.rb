module Api
  class BooksController < ApplicationController
    def list
      puts "params: #{params.inspect}"
      filters = params.permit(:query, :author, :order, :size, :page)

      query = filters[:query]
      author_filter = filters[:author]
      order = filters[:order]
      size = filters[:size].to_i == 0 ? 5 : filters[:size].to_i
      page = filters[:page] ? filters[:page].to_i : 0
      offset = size * page

      query = "%" + query + "%"
      books = Book.where("title ilike ? or description ilike ?", query, query).
              where("author ilike ?", "%" + author_filter + "%").
              order(title: order.to_sym)
      paged_books = books.limit(size).offset(offset)

      render json: {data: paged_books, total: books.count, page: page}
    end
  end
end
