require 'open-uri'

require 'urls'

time = Time.now
Dir.mkdir(time.month.to_s) if not File.directory?(time.month.to_s)
Dir.mkdir(time.month.to_s + "/" + time.day.to_s) if not File.directory?(time.month.to_s + "/" + time.day.to_s)

Sources.urls.each do |key, index|
	path = time.month.to_s + "/" + time.day.to_s + "/" + key + "/"
	
	Dir.mkdir(path) if not File.directory?(path)

	system("cd " + path + " && wget -p -k " + index )
end
