class Share < ActiveRecord::Base
	scope :sorted, lambda { order("shares.id ASC") }
end
