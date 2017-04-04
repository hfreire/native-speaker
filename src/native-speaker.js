/*
 * Copyright (c) 2017, Hugo Freire <hugo@exec.sh>.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

const DEFAULT_LOCALE = process.env.DEFAULT_LOCALE || 'en'

const _ = require('lodash')

const i18n = require('i18n')

const { join } = require('path')

const defaultOptions = {
  autoReload: false,
  updateFiles: false,
  localePath: join(__dirname, '../locale')
}

class NativeSpeaker {
  constructor (options = {}) {
    this.i18n = i18n

    this.configure(options)
  }

  configure (options = {}) {
    this.options = _.defaults(options, defaultOptions)

    const i18nOptions = _.omit(this.options, 'localePath')
    i18nOptions.directory = this.options.localePath

    this.i18n.configure(i18nOptions)
  }

  get (locale, name, ...args) {
    if (_.includes(this.i18n.getLocales(), locale)) {
      this.i18n.setLocale(locale)
    } else {
      if (!_.includes(this.i18n.getLocales(), DEFAULT_LOCALE)) {
        throw new Error(`Default locale ${DEFAULT_LOCALE} not found`)
      }

      this.i18n.setLocale(DEFAULT_LOCALE)
    }

    const message = this.i18n.__(name, ...args)

    return message instanceof Array ? message[ _.random(0, message.length - 1) ] : message
  }
}

module.exports = new NativeSpeaker()
