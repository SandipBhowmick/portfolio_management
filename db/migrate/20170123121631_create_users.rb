class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :user_id
      t.string :password_digest
      t.string :share_id

      t.timestamps null: false
    end
    add_index :users, :user_id 
  end
end
