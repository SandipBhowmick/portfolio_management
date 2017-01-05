Rails.application.routes.draw do

  resources :shares, only: [:index, :new, :create, :update, :edit, :destroy]
 end
