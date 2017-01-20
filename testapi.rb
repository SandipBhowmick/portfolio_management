require 'rubygems'
require 'httparty'

class EdutechionalResty
  include HTTParty
  base_uri "finance.google.com/"

  def posts
    self.class.get('/finance/info?client=ig&q=NSE:ANDHRABANK')
  end
end

api = EdutechionalResty.new
#puts api.posts
#api.posts.each do |post|
#	p "Title: #{post["t"]} "
#end
puts api.posts.class




