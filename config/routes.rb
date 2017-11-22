Rails.application.routes.draw do
  namespace :api do
    get 'users/new'
  end

  namespace :api do
    get 'users/create'
  end

  namespace :api do
    get 'users/destroy'
  end

  get 'sessions/new'

  get 'sessions/create'

  get 'sessions/destroy'

  get 'users/new'

  get 'users/create'

  get 'users/edit'

  get 'users/update'

  get 'users/show'

  get 'users/destroy'

  get 'users/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
