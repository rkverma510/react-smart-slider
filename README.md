# react-smart-slider
Easy to use React JS smart slider

### Installation

```sh
npm install react-smart-slider
```

### Overview

#### Smart slider:

```javascript
React.render(<SmartSlider slides={slidesArray} />, document.body);
```

Now you can style it as you want. Checkout the `index.html` example to see how.

### Properties

##### slides {sliesArray} default: [{title: "caption_title", url: "https://www.abc.jpg/"}]

sliesArray is the set of images, that you want to add, caption title value is optional, if you don't want to show caption on image then leave it blank.

##### showIndicators {boolean} default: true

The image slider's indicator will be visible or not.

##### autoSlide {boolean} default: false

Set true if you want to autoScroll slider image, by default it is false.

##### autoSlideInterval {number} default: 3000

Set autoSlideInterval value for autoScroll. By default it will be 3000ms. It is minimum time period you can set more than default time value.


### License

See the [License](LICENSE) file.