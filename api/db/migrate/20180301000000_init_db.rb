class InitDb < ActiveRecord::Migration

  def up
    create_table :users do |t|
      t.string    :uuid
      t.string    :first_name
      t.string    :last_name
      t.string    :email
      t.string    :bio
      t.timestamps null:false
    end

    execute "ALTER TABLE users ALTER COLUMN id SET DATA TYPE bigint"

    require File.expand_path('../../seeds.rb', __FILE__)
  end

  def down
    
  end

end
