Body
====

A small library providing an utility method to wait for the body element.

## Installation

```
npm install @skyrpex/body --save
```

## Usage

```javascript
import body from "@skyrpex/body";
body(body => body.addClass("super-body"));
```

```javascript
import body from "@skyrpex/body";
body.append($("<button/>").html("Test"));
// Sugar for: body(body => body.append($("<button/>").html("Test"));
```
