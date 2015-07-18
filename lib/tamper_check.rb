require 'sinatra/base'
require 'digest/sha1'

class TamperCheck < Sinatra::Base
	set :root, File.expand_path('../../', __FILE__)
	@@shash = Digest::SHA1.hexdigest(File.open('public/img/image.jpg', 'rb').read)
	get '/' do
		erb :index, locals: { shash: @@shash } 
	end
end
