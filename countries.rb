#/usr/bin/ruby

file = File.new("countries.txt", "r")

while(line = file.gets)
	parts = line.split(";")
	country = parts[0]
	
	num = `grep '#{country}' -i -o pdf/6/13/text/* | wc -l`

	puts country + ": " + num.to_s
end

file.close
