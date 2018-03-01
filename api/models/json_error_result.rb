class JSONErrorResult
  attr_accessor :error_code, :message
  @error_code = true
  @message = nil
  def initialize(error_code, message)
    @error_code = error_code
    @message = message
  end
end