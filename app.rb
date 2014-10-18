require 'sinatra'
require 'newrelic_rpm'

newrelic_ignore '/ping'

get '/ping' do
   # ...
end

get '/' do
  send_file 'index.html'
end

get '/:name' do
   send_file "#{params[:name]}.html"
end