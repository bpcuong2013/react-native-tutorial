workers_count = ENV['WEB_WORKER'] || 1
workers Integer(workers_count)

threads_count_min = Integer(ENV['WEB_THREADS_MIN'] || 2)
threads_count_max = Integer(ENV['WEB_THREADS_MAX'] || 16)
threads threads_count_min, threads_count_max

preload_app!

port_number = ENV['PORT'] || 3000
port        port_number

env = ENV['APP_ENV'] || 'development'
environment ENV['APP_ENV'] || 'development'
DATABASE_URL = ENV['DATABASE_URL'] ||= 'postgres://postgres:postgres@localhost:5432/ReactNative'
on_worker_boot do
  ActiveSupport.on_load(:active_record) do
    ActiveRecord::Base.establish_connection(DATABASE_URL)    
    ActiveRecord::ConnectionAdapters::ConnectionManagement
  end
end

before_fork do
  ActiveRecord::Base.connection_pool.disconnect!
end

puts "|----------------------------------------------------------"
puts "|ANTI-ENV : - #{env}"
puts "|SERVER AT: - PORT = #{port_number}"
puts "|           - WORKER = #{workers_count}"
puts "|           - THREAD_COUNT = #{threads_count_min}->#{threads_count_max}"
puts "|----------------------------------------------------------"
