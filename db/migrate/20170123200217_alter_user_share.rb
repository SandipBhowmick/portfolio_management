class AlterUserShare < ActiveRecord::Migration
  def change
  	
  	add_column "users", "user_name", :string
  	add_column "shares", "user_name", :string

  	
  	add_index "users", "user_name"
  	add_index "shares", "user_name"



  end
end
