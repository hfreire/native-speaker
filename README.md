# A modern language :cn: :us: localisation library built on top of i18n

[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Build Status](https://travis-ci.org/hfreire/native-speaker.svg?branch=master)](https://travis-ci.org/hfreire/native-speaker)
[![Coverage Status](https://coveralls.io/repos/github/hfreire/native-speaker/badge.svg?branch=master)](https://coveralls.io/github/hfreire/native-speaker?branch=master)
[![Greenkeeper badge](https://badges.greenkeeper.io/hfreire/native-speaker.svg)](https://greenkeeper.io/)
[![](https://img.shields.io/github/release/hfreire/native-speaker.svg)](https://github.com/hfreire/native-speaker/releases)
[![](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/npm/v/native-speaker.svg)](https://www.npmjs.com/package/native-speaker)
[![Downloads](https://img.shields.io/npm/dt/native-speaker.svg)](https://www.npmjs.com/package/native-speaker) 

### Features
* Supports [Bluebird](https://github.com/petkaantonov/bluebird) :bird: promises :white_check_mark:

### How to install
```
npm install native-speaker
```

### How to use

#### Use it in your app
```javascript
const Locale = require('native-speaker')

const message = Locale.get('hello_world', 'en')
```

#### Available environment variables
Variable | Description | Required | Default value
:---:|:---:|:---:|:---:
DEFAULT_LOCALE | The locale to be used when the desired locale is not available. | false | `en`
