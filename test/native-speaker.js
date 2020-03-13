/*
 * Copyright (c) 2017, Hugo Freire <hugo@exec.sh>.
 *
 * This source code is licensed under the license found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import i18n from 'i18n'
import subject from '../src/native-speaker'

jest.mock('i18n')

describe('Native Speaker', () => {
  describe('when constructing', () => {
    it('should call i18n configure', () => {
      expect(i18n.configure).toHaveBeenCalled()
    })
  })

  describe('when configuring', () => {
    const directory = 'my-locale-path'
    const options = { directory }

    it('should call i18n configure', () => {
      subject.configure(options)

      expect(i18n.configure).toHaveBeenCalledWith(options)
    })
  })

  describe('when getting a supported locale', () => {
    const locale = 'my-locale'
    const locales = [locale]
    const name = 'my-name'
    const message = 'my-message'

    beforeEach(() => {
      i18n.getLocales = jest.fn().mockReturnValue(locales)

      i18n.__ = jest.fn().mockReturnValue(message)
    })

    it('should invoke i18n setLocale with given locale', () => {
      subject.get(locale, name)

      expect(i18n.setLocale).toHaveBeenCalledWith(locale)
    })

    it('should return locale message', () => {
      const result = subject.get(locale, name)

      expect(result).toBe(message)
    })
  })

  describe('when getting a non-supported locale', () => {
    const locales = ['en']
    const name = 'my-name'
    const message = 'my-message'

    beforeEach(() => {
      i18n.getLocales = jest.fn().mockReturnValue(locales)

      i18n.__ = jest.fn().mockReturnValue(message)
    })

    it('should invoke i18n setLocale with default locale', () => {
      subject.get('unknown-locale', name)

      expect(i18n.setLocale).toHaveBeenCalledWith('en')
    })

    it('should return default locale message', () => {
      const result = subject.get('unknown-locale', name)

      expect(result).toBe(message)
    })
  })

  describe('when getting and default locale is not found', () => {
    const locales = []
    const name = 'my-name'

    beforeEach(() => {
      i18n.getLocales = jest.fn().mockReturnValue(locales)
    })

    it('should throw default locale not found error', () => {
      expect(() => subject.get('en', name)).toThrowError('Default locale en not found')
    })
  })
})
