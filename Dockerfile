FROM ruby:2.3.3
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN mkdir /book_store
WORKDIR /book_store
ADD Gemfile /book_store/Gemfile
ADD Gemfile.lock /book_store/Gemfile.lock
RUN bundle install
ADD . /book_store
