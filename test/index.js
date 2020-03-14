/*
 * Copyright (c) 2020, Hugo Freire <hugo@exec.sh>.
 *
 * This source code is licensed under the license found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import instance, { NativeSpeaker } from '../src/native-speaker'
import defaultSubject, { NativeSpeaker as namedSubject } from '../src/index'

describe('Module', () => {
  describe('when exporting', () => {
    it('should export native speaker instance as default', () => {
      expect(defaultSubject).toBe(instance)
    })

    it('should export native speaker class', () => {
      expect(namedSubject).toBe(NativeSpeaker)
    })
  })
})
