Rails.application.routes.draw do
  namespace :api do
    get 'sessions/new'
  end

  namespace :api do
    get 'sessions/create'
  end

  namespace :api do
    get 'sessions/destroy'
  end

  get 'static_pages/root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:new, :create, :destory]
    resources :users, only: [:new, :create]
  end

  root "static_pages#root"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
