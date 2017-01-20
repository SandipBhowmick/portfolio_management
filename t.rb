def autocorrect(term)

   if(term == 'jhatka')

      term = 'jhatkaa'

   else

      autocorrect(term)

   end

   return 'term'

end

def abc 
 
b= autocorrect("jhatka")
p b

end

abc