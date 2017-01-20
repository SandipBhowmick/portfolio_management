require 'json'
#require 'open-uri'
uri =URI('http://finance.google.com/finance/info?client=ig&q=NSE:BANKBARODA')
rs = Net::HTTP.get(uri)
foo = JSON[rs[4..-1]].first
p foo['t'],foo['l']
