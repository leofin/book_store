Rails.application.routes.draw do
  devise_for :admins
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :books

  namespace :api, path: '/api' do
    get '/books', to: 'books#list', as: :get_books
  end

  get '/', to: 'public_books#index', as: :index

end
