Rails.application.routes.draw do
  root to: "roots#root"
  resources :users, only: [:new, :create, :show]
  resource :session, only: [:new, :create, :destroy]
  resources :notes, defaults: { format: :json }, only: [:index, :show, :create] do
    resource :favorite, only: [:create, :destroy]
    resources :gist_files, only: [:index]
  end
  resources :gist_files, defaults: { format: :json }, only: [:create, :update, :show]
end
