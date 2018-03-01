class JSONResult
  attr_accessor :success, :data, :details
  @success = true
  @data = nil
  @details = nil
  def initialize(success, data, details = nil)
    @success = success
    @data = data
    @details = details
  end
end