job_type :rake,    "cd :path && :environment_variable=development bundle exec rake :task --silent :output"
set :output, "#{path}/log/cron.log"
every 1.day, :at => '1:56 pm' do
	rake "import:stocks_code"
end

