class Share < ActiveRecord::Base

	validates 	:scrip_name, :transaction_date,:buy_sell, :presence => true
	validates 	:quantity,:rate,:brokerage, :presence => true, numericality: true	
	#validates 	:scrip_name , :presence => true,
				#:length => { :maximum =>255},
				#:uniqueness => true

	scope :sorted, lambda { order("shares.id ASC") }
	scope :unique_by_buy_sell, lambda { select('DISTINCT(buy_sell)') }
	scope :unique_by_transaction_date, lambda { select('DISTINCT(transaction_date)') }
	scope :unique_by_scrip_name, lambda { select('DISTINCT(scrip_name)') }
	scope :unique_by_quantity, lambda { select('DISTINCT(quantity)') }
	scope :unique_by_rate, lambda { select('DISTINCT(rate)') }
	scope :unique_by_user_id, lambda { select('DISTINCT(user_id)') }
end
