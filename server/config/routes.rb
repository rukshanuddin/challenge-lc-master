Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, constraints: { format: :json }, defaults: { format: :json } do
    resources :operators, only: %i(index)
    resources :postes, only: %i(index)
    resources :products, only: %i(index)
    resources :items, only: [:index, :create, :destroy, :update]
    resources :operators_poste, only: [:index, :create, :destroy, :update]

    resources :topics, only: [:index, :show]
    resources :links, only: [:index, :create, :destroy, :update]
  end
end
