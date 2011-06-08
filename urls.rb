class Sources
	@@urls = {
		"aljazeera" => "http://aljazeera.com/",
		"newyorktimes" => "http://nytimes.com/",
		"cnn" => "http://cnn.com/",
		"bbc" => "http://bbc.co.uk/",
		"fox" => "http://foxnews.com/",
		"derspiegel" => "http://www.spiegel.de/international/",
		"jpost" => "http://www.jpost.com/",
		"haaretz" => "http://www.haaretz.com/",
		"theindenpendent" => "http://www.independent.co.uk/",
		"thetimesofindia" => "http://timesofindia.indiatimes.com/"
	}

	def self.urls
		@@urls
	end
end
