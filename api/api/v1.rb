module ReactNative
  module API
    class V1 < Grape::API
      
      version '1.0', using: :path
      default_format :json
      format :json
      rescue_from :all
      error_formatter :json, ReactNative::CustomErrorFormatter
      prefix :api
      
      before do
        header['Access-Control-Allow-Origin'] = '*'         
        header['Access-Control-Allow-Headers'] = '*'
        header['Access-Control-Allow-Credentials'] = 'true'
      end
      
      helpers do        
        def limit(limit = nil)
          if params[:limit]
            @limit = params[:limit].to_i
          else
            @limit = limit ? limit : 10
          end

          @limit
        end

        def page(page = nil)
          if params[:page]
            @page = params[:page].to_i
          else
            @page = page ? page : 1
          end

          @page
        end

        def offset
          (page - 1) * limit
        end
      end
      
      get :ping do
        "pong" 
      end
      
    end
  end
end
