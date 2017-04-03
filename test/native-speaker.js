/*
 * Copyright (c) 2017, Hugo Freire <hugo@exec.sh>.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

describe('Native Speaker', () => {
  let subject
  let i18n

  before(() => {
    i18n = td.object([ 'configure', 'getLocales', 'setLocale', '__' ])
  })

  afterEach(() => td.reset())

  describe('when constructing', () => {
    beforeEach(() => {
      subject = require('../src/native-speaker')
    })

    it('should require i18n with properties', () => {
      subject.i18n.should.have.deep.property('.configure')
      subject.i18n.should.have.deep.property('.getLocales')
      subject.i18n.should.have.deep.property('.setLocale')
      subject.i18n.should.have.deep.property('.__')
    })
  })

  describe('when configuring', () => {
    const localePath = 'my-locale-path'
    const options = { localePath }

    beforeEach(() => {
      td.replace('i18n', i18n)

      subject = require('../src/native-speaker')
    })

    it('should call i18n configure', () => {
      subject.configure(options)

      td.verify(i18n.configure(), { ignoreExtraArgs: true, times: 2 })
    })
  })

  describe('when getting a supported locale', () => {
    const locale = 'my-locale'
    const name = 'my-name'
    const message = 'my-message'

    beforeEach(() => {
      td.replace('i18n', i18n)
      td.when(i18n.getLocales()).thenReturn([ locale ])
      td.when(i18n.__(name)).thenReturn(message)

      subject = require('../src/native-speaker')
    })

    it('should invoke i18n setLocale', () => {
      subject.get(locale, name)

      td.verify(i18n.setLocale(locale), { times: 1 })
    })

    it('should return locale message', () => {
      const _message = subject.get(locale, name)

      _message.should.be.equal(message)
    })
  })

  describe('when getting a non-supported locale', () => {
    const nonSupportedLocale = 'my-nonsupported-locale'
    const defaultLocale = 'en'
    const name = 'my-name'
    const message = 'my-message'

    beforeEach(() => {
      td.replace('i18n', i18n)
      td.when(i18n.getLocales()).thenReturn([ defaultLocale ])
      td.when(i18n.__(name)).thenReturn(message)

      subject = require('../src/native-speaker')
    })

    it('should return default locale message', () => {
      const _message = subject.get(nonSupportedLocale, name)

      _message.should.be.equal(message)
    })
  })

  describe('when getting and default locale is not found', () => {
    const locale = 'my-locale'
    const name = 'my-name'

    beforeEach(() => {
      td.replace('i18n', i18n)
      td.when(i18n.getLocales()).thenReturn([])

      subject = require('../src/native-speaker')
    })

    it('should throw default locale not found error', () => {
      should.Throw(() => subject.get(locale, name), Error)
    })
  })
})
