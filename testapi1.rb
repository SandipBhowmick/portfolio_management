require 'json'

#uri = URI('http://finance.google.com/finance/info?client=i&q=NSE:ANDHRABANK')
uri =URI('http://finance.google.com/finance/info?client=ig&q=NSE:ANDHRABANK')

rs = Net::HTTP.get(uri)

rs.delete! '//'

a = JSON.parse(rs) 

p a[0]["t"]+" => "+a[0]["l"] 
#obj = data[:t]
#p obj
#p json["t"]

#p JSON.parse(params["t"])
#res.slice! "//"
#p res