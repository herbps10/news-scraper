// The Sliding Tabs mootools plugin is a creation of Jenna “Blueberry” Fox!
// This isn't free software, so don't forget to give me a gift of some sort!
// some idea's include poetry, drawings, songs, doodads, whosits, fuzzy things,
// software licenses, and general free stuff. Contact me at http://creativepony.com/#contact
// and let me know where you're using Sliding Tabs!
// Documentation: http://creativepony.com/journal/scripts/sliding-tabs/
// version: 1.8


var SlidingTabs = new Class({
  options: {
    startingSlide: false, // sets the slide to start on, either an element or an id 
    activeButtonClass: 'active', // class to add to selected button
    activationEvent: 'click', // you can set this to ‘mouseover’ or whatever you like
    wrap: true, // calls to previous() and next() should wrap around?
    slideEffect: { // options for effect used to animate the sliding, see Fx.Base in mootools docs
      duration: 400 // 0.4 of a second
    },
    animateHeight: true, // animate height of container
    rightOversized: 0 // how much of the next pane to show to the right of the current pane
  },
  current: null, // zero based current pane number, read only
  buttons: false,
  outerSlidesBox: null,
  innerSlidesBox: null,
  panes: null,
  fx: null, // this one animates the scrolling inside
  heightFx: null, // this one animates the height
  nexttimer: null,
  
  
  initialize: function(buttonContainer, slideContainer, options) {
    if (buttonContainer) { this.buttons = $(buttonContainer).getChildren(); }
    this.outerSlidesBox = $(slideContainer);
    this.innerSlidesBox = this.outerSlidesBox.getFirst();
   
       
    this.panes = this.innerSlidesBox.getChildren();
    
    var newdiv = document.createElement('div');
    newdiv.innerHTML=$(this.panes[0]).innerHTML;
    
    this.innerSlidesBox.appendChild(newdiv);
    
    this.panes = this.innerSlidesBox.getChildren();
    
    this.setOptions(options);
    
    
    
    this.fx = new Fx.Scroll(this.outerSlidesBox, this.options.slideEffect);
    this.heightFx = this.outerSlidesBox.effect('height', this.options.slideEffect);
    
    // set up button highlight
    this.current = this.options.startingSlide ? this.panes.indexOf($(this.options.startingSlide)) : 0;
    if (this.buttons) { this.buttons[this.current].addClass(this.options.activeButtonClass); }
    
    // add needed stylings
    this.outerSlidesBox.setStyle('overflow', 'hidden');
    this.panes.each(function(pane, index) {
      pane.setStyles({
       'float': 'left',
       'overflow': 'hidden'
      });
    }.bind(this));
    
    // stupidness to make IE work - it boggles the mind why this has any effect
    // maybe it's something to do with giving it layout?
    this.innerSlidesBox.setStyle('float', 'left');
    
    if (this.options.startingSlide) this.fx.toElement(this.options.startingSlide);
    
    // add events to the buttons
    if (this.buttons) this.buttons.each( function(button) {
      button.addEvent(this.options.activationEvent, this.buttonEventHandler.bindWithEvent(this, button));
      button.addEvent(this.options.activationEvent,canceltimer);
    }.bind(this));
    
    if (this.options.animateHeight)
      this.heightFx.set(this.panes[this.current].offsetHeight);
    
    
    // set up all the right widths inside the panes
    this.recalcWidths();
    
   // this.nexttimer=setTimeout('this.next()', 5000);
  },
  
  // to change to a specific tab, call this, argument is the pane element you want to switch to.
  changeTo: function(element, animate,changebutton) {
    if ($type(element) == 'number') element = this.panes[element - 1];
    if (!$defined(animate)) animate = true;
    
    
    var event = { cancel: false, target: $(element), animateChange: animate };
    this.fireEvent('change', event);
    if (event.cancel == true) { return; };
    
    if (animate && this.buttons) { this.buttons[this.current].removeClass(this.options.activeButtonClass); };
   
    this.current = this.panes.indexOf($(event.target));
    if (!$defined(changebutton)) changebutton = this.current;
    
    if (this.buttons) { this.buttons[changebutton].addClass(this.options.activeButtonClass); };
    
    this.fx.stop();
    if (event.animateChange) {
      this.fx.toElement(event.target);
    } else {
      this.outerSlidesBox.scrollTo(this.current * this.outerSlidesBox.offsetWidth.toInt(), 0);
    }
    
    if (this.options.animateHeight)
      this.heightFx.start(this.panes[this.current].offsetHeight);
  },
  
  // Handles a click
  buttonEventHandler: function(event, button) {
    if (event.target == this.buttons[this.current]) return;
    this.changeTo(this.panes[this.buttons.indexOf($(button))]);
  },
  
  // call this to go to the next tab
  next: function() {
    if (this.current == this.panes.length-1)
    {
    	this.changeTo(this.panes[0],false,0);
    }
    
    var next = this.current + 1;
    if (next == this.panes.length-1) {
      
      this.changeTo(this.panes[next],true,0);
      //this.reinittimer();
      return;
      
    }
    
    this.changeTo(this.panes[next]);
    
    //this.reinittimer();
  },
  
  reinittimer: function(){
  	clearTimeout ( this.nexttimer );
      
    	this.nexttimer=setTimeout('slidingtabs.next()', 5000);
  },
  
  
  // to go to the previous tab
  previous: function() {
    var prev = this.current - 1
    if (prev < 0) {
      prev = this.panes.length - 1;
      this.changeTo(this.panes[prev],false,0);
      this.current=0;
      prev--;
    }
    
    this.changeTo(this.panes[prev]);
    
    //this.reinittimer();
  },
  
  // call this if the width of the sliding tabs container changes to get everything in line again
  recalcWidths: function() {
    this.panes.each(function(pane, index) {
      pane.setStyle('width', this.outerSlidesBox.offsetWidth.toInt() - this.options.rightOversized + 'px');
    }.bind(this));
    
    this.innerSlidesBox.setStyle(
      'width', (this.outerSlidesBox.offsetWidth.toInt() * this.panes.length) + 'px'
    );
    
    // fix positioning
    if (this.current > 0) {
      this.fx.stop();
      this.outerSlidesBox.scrollTo(this.current * this.outerSlidesBox.offsetWidth.toInt(), 0);
    }
  }
});

SlidingTabs.implement(new Options, new Events);
