/*
 * Copyright (c) 2017, Hugo Freire <hugo@exec.sh>.
 *
 * This source code is licensed under the license found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import NativeSpeaker from '../src/native-speaker'
import subject from '../src/index'

describe('Module', () => {
  describe('when loading', () => {
    it('should export native speaker as default', () => {
      expect(subject).toBe(NativeSpeaker)
    })
  })
})
