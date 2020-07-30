class CreateLinks < ActiveRecord::Migration[5.2]
  def change
    create_table :links do |t|
      t.string :name
      t.string :link
      t.string :category
      t.string :section
      t.string :language
      t.string :blurb
      t.belongs_to :topic, foreign_key: true, index: true

      t.timestamps
    end
  end
end
