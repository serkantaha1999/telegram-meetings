class CreateMeetings < ActiveRecord::Migration[7.1]
  def change
    create_table :meetings do |t|
      t.string :code
      t.string :name

      t.timestamps
    end
  end
end
