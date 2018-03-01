class BaseManager

  require 'json'
      
  def json_user(user)    
    {
      :uuid                => user.uuid,
      :first_name          => user.first_name,
      :last_name           => user.last_name,
      :email               => user.email,
      :bio                 => user.bio
    }
  end
  
  def json_users(users)
    result = Array.new
    users.each do |user|
      result.push(json_user(user))
    end
    
    return result
  end
  
end