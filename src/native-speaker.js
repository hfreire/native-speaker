/*
 * Copyright (c) 2020, Hugo Freire <hugo@exec.sh>.
 *
 * This source code is licensed under the license found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import defaultsDeep from 'lodash/defaultsDeep'
import random from 'lodash/random'
import i18n from 'i18n'

const { DEFAULT_LOCALE = 'en' } = process.env

const defaultOptions = {
  defaultLocale: DEFAULT_LOCALE,
  autoReload: false,
  updateFiles: false,
  syncFiles: true
}

class NativeSpeaker {
  constructor(options = { locales: [DEFAULT_LOCALE] }) {
    this._i18n = i18n

    this.configure(options)
  }

  configure(options = {}) {
    this._options = defaultsDeep({}, options, defaultOptions)

    this._i18n.configure(this._options)
  }

  get(locale = this._options.defaultLocale, phrase, ...args) {
    const message = this._i18n.__({ phrase, locale }, ...args)

    return message instanceof Array
      ? message[random(0, message.length - 1)]
      : message
  }
}

export default new NativeSpeaker()
