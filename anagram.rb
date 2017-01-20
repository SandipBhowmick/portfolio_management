=begin
def find_anagram(first_arg, second_arg)
    length_first_int = first_arg.length
    length_second_int = second_arg.length
    if(length_first_int == length_second_int)
    	ct=0
    	first_arg.each_char do |f|
    		n=""
    		second_arg.each_char do |m|
    			if(f == m)
    				ct=ct+1
    				n=m
    				break   				    				    		
	    		end
	    	end
	    	if (n!=f)
	    		break
	    	end
    	end
    	
    	if ct == length_second_int
    		p "a"
    		return true
    	else
    		return false
    		p "na"
       	end
    
    end
end
=end

def anagram?(a, b)
  #a.chars.sort == b.chars.sort
  p b.chars
  c=b.chars.sort
  p c
end


p anagram?("salt", "last")