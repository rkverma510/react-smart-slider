# react-smart-slider

[![npm version](https://img.shields.io/npm/v/react-smart-slider.svg)](https://www.npmjs.com/package/react-smart-slider)
[![downloads](https://img.shields.io/npm/dt/react-smart-slider.svg)](https://www.npmjs.com/package/react-smart-slider)
[![dependencies](https://david-dm.org/therkverma/react-smart-slider.svg)](https://david-dm.org/therkverma/react-smart-slider)
[![devDependencies](https://david-dm.org/therkverma/react-smart-slider/dev-status.svg)](https://david-dm.org/therkverma/react-smart-slider?type=dev)


Easy to use React JS smart slider

[Demo](https://github.com/therkverma/react-smart-slider/) - [Codesandbox Playground](https://codesandbox.io/s/jpo4ypo9wv)

![Preview](https://res.cloudinary.com/therkverma-github-io/image/upload/fl_apng/v1547741460/react-smart-slider.png)

### Installation

```sh
npm install react-smart-slider
```

### Overview

#### Smart slider:

```javascript
React.render(<SmartSlider slides={slidesArray} autoSlide={true} />, document.body);
```

Now you can style it as you want. Checkout the `index.html` example to see how.

### Properties

##### Pass slides {slidesArray}

For Example:-
```javascript
const slidesArray = [
      {
        title: "Caption 1", url: "https://i.imgur.com/7u8i7L1.jpg"
      },
      {
        title: "Caption 2", url: "https://i.imgur.com/E8gkF2f.jpg"
      },
      {
        title: "Caption 3",
        url: "https://i.imgur.com/t2a1zLi.jpg",

        // Set this key, with every slide if you want to update style for specific slide caption, Otherwise don't set it.
        customCaptionStyle: {
          "color": "#7fffd4",
          "font-weight": "bold",
        }
      },
    ];
```
slidesArray is the set of images, that you want to add, caption title value is optional, if you don't want to show caption on image then leave it blank.
    If you want to style diffrent design for every slide's caption then pass style on `customCaptionStyle` key of slide's object, otherwise leave it blank.


##### captionStyle {object} (Optional)

The `captionStyle` is used for update captionStyle for all caption. if you to change and apply same style on all caption, then create `captionStyle` key like this:-

```javascript
const captionStyle = {
      "color": "#ffe4c4",
      "font-weight": "bold"
    }
```


##### showIndicators {boolean} default: true

The image slider's indicator will be visible or not.


##### autoSlide {boolean} default: false

Set true if you want to autoScroll slider image, by default it is false.


##### autoSlideInterval {number} default: 3000

Set autoSlideInterval value for autoScroll. By default it will be 3000ms. It is minimum time period you can set more than default time value.


### License

See the [License](LICENSE) file.
