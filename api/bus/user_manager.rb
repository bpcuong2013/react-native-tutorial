class UserManager < BaseManager
     
  def get_users(offset, limit)
    return json_users(User.offset(offset).limit(limit))
  end
  
  def create_user(email, first_name, last_name, bio)
    if User.find_by(:email => email) != nil
        return JSONResult.new(false, ErrorCode::EMAIL_IN_USED)
    end
    
    user = User.create(:email => email,
                       :first_name => first_name, 
                       :last_name => last_name,
                       :bio => bio)
    return json_user(user)    
  end
      
end