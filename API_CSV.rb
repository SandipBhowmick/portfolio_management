require 'csv'
require 'json'
#require 'open-uri'
uri =URI('https://www.nseindia.com/content/equities/EQUITY_L.csv')
s = Net::HTTP.get(uri)
a = CSV.parse(s, headers: true)
 
transformed_data = a.map { |row| row.to_h }
p "NAME              =>  CODE"
transformed_data.each do |t|
	p t["NAME OF COMPANY"]+" => "+t["SYMBOL"]
end

=begin
tweets = JSON.parse(s)
require 'csv'
CSV.open("trial.csv", "ab") do |csv|
  csv << ["text", "created_at", "name", 'id']
  csv << ["tweets"]
  end
p trial.csv


=end

#a = JSON.parse(rs)
#a =CSV.parse(rs)
#b= CSV.new(rs)
#csv = CSV.read(a, :headers=>true)

=begin
CSV.open("trial.csv", a) do |csv|
  csv << ["text", "created_at", "name", 'id']
  csv << ["tweets"]
  end=end


=begin
b= a.to_csv
CSV.foreach(b,headers: true) do |row|
    p row
  end
=end
