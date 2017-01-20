 namespace :import do 
 	desc "import stocks code from nse site as csv file" 	
 	task :stocks_code => :environment do
 		require 'csv'
		require 'json'
		uri =URI('https://www.nseindia.com/content/equities/EQUITY_L.csv')
		s = Net::HTTP.get(uri)
		a = CSV.parse(s, headers: true)
		transformed_data = a.map { |row| row.to_h }
		transformed_data.each do |t|
			@equity_in = Equity.find_by(code:  t["SYMBOL"])
			if !@equity_in 
				@new_equity=Equity.new(:code => t["SYMBOL"], :name => t["NAME OF COMPANY"]+"----->"+t["SYMBOL"])
				@new_equity.save
			else
				if @equity_in.name != t["NAME OF COMPANY"]+"----->"+t["SYMBOL"]
					@equity.update_attributes(:name => t["NAME OF COMPANY"]+"----->"+t["SYMBOL"])
				end
			end
        
		end

 	end
 	

 end