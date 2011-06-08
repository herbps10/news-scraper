require 'open-uri'

time = Time.now
Dir.mkdir(time.month.to_s) if not File.directory?(time.month.to_s)
Dir.mkdir(time.month.to_s + "/" + time.day.to_s) if not File.directory?(time.month.to_s + "/" + time.day.to_s)

fronturl = 'http://www.newseum.org/todaysfrontpages/default.asp?p_size=907'

frontcontent = open(fronturl).read

codes = frontcontent.scan(/[A-Z]+_[A-Z]+/).uniq

count = 0
codes.each do |code|
	next if code.include? "CONTAINER" or code.include? "CONTENT" or code.include? "SHOWCASE"

	path = time.month.to_s + "/" + time.day.to_s + "/" + code + ".jpg"
	imageurl = "http://webmedia.newseum.org/newseum-multimedia/dfp/jpg8/lg/#{code}.jpg"
	
	puts imageurl
	File.open(path, "wb") { |f| f.write open(imageurl).read }
	
	count += 1
	
	sleep(2)
end
