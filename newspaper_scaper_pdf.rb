require 'open-uri'


base_path = "/root/news-scraper/pdf/"

time = Time.now

#month = time.month.to_s
#day = time.day.to_s
month = "6"
day = "12"

Dir.mkdir(base_path + month) if not File.directory?(base_path + month)
Dir.mkdir(base_path + month + "/" + day) if not File.directory?(base_path + month + "/" + day)

fronturl = 'http://www.newseum.org/todaysfrontpages/default.asp?p_size=907'

frontcontent = open(fronturl).read

codes = frontcontent.scan(/[A-Z]+_[A-Z]+/).uniq

count = 0
codes.each do |code|
	next if code.include? "CONTAINER" or code.include? "CONTENT" or code.include? "SHOWCASE"

	path = base_path + month + "/" + day+ "/" + code + ".pdf"

	next if File.exists? path

	imageurl = "http://webmedia.newseum.org/newseum-multimedia/dfp/pdf" + day + "/#{code}.pdf"
	
	puts imageurl

	begin
	File.open(path, "wb") { |f| f.write open(imageurl).read }
	
	rescue OpenURI::HTTPError
		puts "Couldn't find that file"
	end
	
	count += 1
	
	sleep(2)
end
