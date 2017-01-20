Rails.application.routes.draw do

  resources :shares do
  		collection do
    		match 'search' => 'shares#search', via: [:get, :post], as: :search
  		end
	end

	# resources :equitys , only:[:index]
 
 end
