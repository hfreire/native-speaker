/*
 * Copyright (c) 2017, Hugo Freire <hugo@exec.sh>.
 *
 * This source code is licensed under the license found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import defaults from 'lodash/defaults'
import includes from 'lodash/includes'
import random from 'lodash/random'
import i18n from 'i18n'

const { DEFAULT_LOCALE = 'en' } = process.env

const defaultOptions = {
  locales: [],
  autoReload: false,
  updateFiles: false
}

class NativeSpeaker {
  constructor(options = {}) {
    this.i18n = i18n

    this.configure(options)
  }

  configure(options = {}) {
    this.options = defaults(options, defaultOptions)

    this.i18n.configure(options)
  }

  get(locale, name, ...args) {
    if (includes(this.i18n.getLocales(), locale)) {
      this.i18n.setLocale(locale)
    } else {
      if (!includes(this.i18n.getLocales(), DEFAULT_LOCALE)) {
        throw new Error(`Default locale ${DEFAULT_LOCALE} not found`)
      }

      this.i18n.setLocale(DEFAULT_LOCALE)
    }

    const message = this.i18n.__(name, ...args)

    return message instanceof Array
      ? message[random(0, message.length - 1)]
      : message
  }
}

export default new NativeSpeaker()
