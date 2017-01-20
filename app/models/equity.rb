class Equity < ActiveRecord::Base
validates 	:code, :name, :presence => true
end
