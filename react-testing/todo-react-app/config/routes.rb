Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :todos, only: [:index, :show, :update, :create, :destroy]
  end
end
