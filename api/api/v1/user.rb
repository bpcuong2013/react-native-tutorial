module ReactNative
  module API
    class V1 < Grape::API
      resource :users do
        #---------------------------------------------------------
        # GET users?page=1&limit=10
        #---------------------------------------------------------
        desc "Retrive users"
        get do
          begin
            UserManager.new.get_users(offset, limit)
          rescue => ex
            LOG.fatal(ex)
            JSONResult.new(false, JSONErrorResult.new(ErrorCode::SYSTEM_ERROR, ErrorMessage::SYSTEM_ERROR), ex.to_s)
          end          
        end
        
        #---------------------------------------------------------
        # POST user/create
        #---------------------------------------------------------
        desc "Create user"
        params do
          requires :email, type: String 
          requires :first_name, type: String
          requires :last_name, type: String
          optional :bio, type: String
        end
        post :create do
          begin
            UserManager.new.create_user(params[:email], 
                                        params[:first_name],
                                        params[:last_name],
                                        params[:bio])
          rescue => ex
            LOG.fatal(ex)
            JSONResult.new(false, JSONErrorResult.new(ErrorCode::SYSTEM_ERROR, ErrorMessage::SYSTEM_ERROR), ex.to_s)
          end          
        end
        
      end
    end
  end
end