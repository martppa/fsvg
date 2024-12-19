# FSVG

This tiny script will let you apply fill property to SVGs fetched from URLs in vanilla HTML. This script is compatible with Tailwindcss.

## Installation

Include the script in your page header:
```html
<script src="https://unpkg.com/fsvg@1.0.1/index.js"></script>
```

## Usage

Just declare a ```<div>``` with all attributes you woud add to the ```<img>``` tag, add to it ```fsvg``` class property.

### Usage with vanilla HTML/CSS

```html
<div height="64" width="64" src="[svg url]" class="fsvg" style="fill: red;"></div>
```

### Usage with Tailwindcss

```html
<div height="64" width="64" src="[svg url]" class="fsvg fill-blue-500"></div>
```

## License

This code is under the MIT license. You are warned!
