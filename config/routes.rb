Rails.application.routes.draw do

	resources :users do
	  resources :shares do
	  		collection do
	    		match 'search' => 'shares#search', via: [:get, :post], as: :search
	  		end
		end
	end	
 end
