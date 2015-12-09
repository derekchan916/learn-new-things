Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :todos, only: [:index, :show, :create, :destroy, :update]
  end
end
