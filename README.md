# react-smart-slider

[![npm version](https://img.shields.io/npm/v/react-smart-slider.svg)](https://www.npmjs.com/package/react-smart-slider)
[![downloads](https://img.shields.io/npm/dt/react-smart-slider.svg)](https://www.npmjs.com/package/react-smart-slider)
[![dependencies](https://david-dm.org/therkverma/react-smart-slider.svg)](https://david-dm.org/therkverma/react-smart-slider)
[![devDependencies](https://david-dm.org/therkverma/react-smart-slider/dev-status.svg)](https://david-dm.org/therkverma/react-smart-slider?type=dev)


Easy to use React JS smart slider

[Demo](https://github.com/therkverma/react-smart-slider/) - [Codesandbox Playground](https://codesandbox.io/s/jpo4ypo9wv)

![Preview](https://res.cloudinary.com/therkverma-github-io/image/upload/fl_animated/v1547231907/react-smart-slider.png)

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

##### autoSlideInterval {number} default: 2000

Set autoSlideInterval value for autoScroll. By default it will be 3000ms. It is minimum time period you can set more than default time value.


### License

See the [License](LICENSE) file.
