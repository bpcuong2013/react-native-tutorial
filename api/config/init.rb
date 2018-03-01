module ReactNative

  module API

    class Init < Rack::Cascade
      def initialize
        super [ ReactNative::API::V1 ]
      end
    end

  end

end
