class CreateEquities < ActiveRecord::Migration
  def up
    create_table :equities do |t|
    	t.string "code"
    	t.string "name"
      t.timestamps null: false
    end
  end
  def down
  	drop_table :equities
  end
end
