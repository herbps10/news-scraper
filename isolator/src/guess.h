class Guess {
	private:
	int x, y;
	int width, height;
	Image image;

	public:
	Guess(Image newimage);
	Guess();
	
	void setCoordinates(int newx, int newy);
	void setDimensions(int newwidth, int newheight);

	int fitness();
	int grow();

	void draw();
};
