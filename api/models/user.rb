class User < ActiveRecord::Base
  
  attr_accessor :access_token

  before_create do
    self.uuid = SecureRandom.uuid
  end

end
