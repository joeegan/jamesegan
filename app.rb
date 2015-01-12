require 'sinatra'

get '/' do
  send_file 'public/index.html'
end

get '/:name' do
   send_file "public/#{params[:name]}.html"
end