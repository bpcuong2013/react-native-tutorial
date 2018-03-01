module ReactNative  
  module CustomErrorFormatter
    require 'json'    
    def self.call message, backtrace, options, env
      LOG.fatal(message.to_s)
      LOG.fatal(backtrace.join("\n"))
      JSONResult.new(false, JSONErrorResult.new(ErrorCode::SYSTEM_ERROR, ErrorMessage::SYSTEM_ERROR), message).to_json
    end

  end
end
