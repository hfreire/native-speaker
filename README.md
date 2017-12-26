# A modern language :cn: :us: localisation library built on top of i18n

[![Build Status](https://travis-ci.org/hfreire/native-speaker.svg?branch=master)](https://travis-ci.org/hfreire/native-speaker)
[![Coverage Status](https://coveralls.io/repos/github/hfreire/native-speaker/badge.svg?branch=master)](https://coveralls.io/github/hfreire/native-speaker?branch=master)
[![](https://img.shields.io/github/release/hfreire/native-speaker.svg)](https://github.com/hfreire/native-speaker/releases)
[![Version](https://img.shields.io/npm/v/native-speaker.svg)](https://www.npmjs.com/package/native-speaker)
[![Downloads](https://img.shields.io/npm/dt/native-speaker.svg)](https://www.npmjs.com/package/native-speaker) 

> A modern language :cn: :us: localisation library built on top of i18n

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

### How to contribute
You can contribute either with code (e.g., new features, bug fixes and documentation) or by [donating 5 EUR](https://paypal.me/hfreire/5). You can read the [contributing guidelines](CONTRIBUTING.md) for instructions on how to contribute with code. 

All donation proceedings will go to the [Sverige för UNHCR](https://sverigeforunhcr.se), a swedish partner of the [UNHCR - The UN Refugee Agency](http://www.unhcr.org), a global organisation dedicated to saving lives, protecting rights and building a better future for refugees, forcibly displaced communities and stateless people.

### License
Read the [license](./LICENSE.md) for permissions and limitations.
