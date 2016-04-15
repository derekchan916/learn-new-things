class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.integer :category_id, null: false
      t.string :description, null: false
      t.integer :units_in_stock, null: false
      t.integer :unit_weight, null: false
      t.integer :price, null: false
      t.integer :

      t.timestamps null: false
    end
  end
end
