class CreateShares < ActiveRecord::Migration
  def up
    create_table :shares do |t|
    	t.string "scrip_name", :limit => 250 
    	t.date "transaction_date" 
    	t.string "buy_sell" 
    	t.integer "quantity" 
    	t.integer "rate" 
    	t.integer "brokerage" 
    	t.integer "net_rate" 
    	t.integer "net_value" 
    	t.integer "bank_balance" 
    	t.integer "demat_balance"
    	t.string "user_id" 
        t.timestamps null: false
    end
  end

  def down
  	drop_table :shares
  end
end
