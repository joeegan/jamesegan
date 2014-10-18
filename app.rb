require 'sinatra'

get '/' do
  send_file 'index.html'
end

get '/:name' do
   send_file "#{params[:name]}.html"
end