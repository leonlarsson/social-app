import React from 'react'
import {Provider as DrawerOpenProvider} from './drawer-open'
import {Provider as DrawerSwipableProvider} from './drawer-swipe-disabled'
import {Provider as MinimalModeProvider} from './minimal-mode'
import {Provider as ColorModeProvider} from './color-mode'
import {Provider as AltTextRequiredProvider} from './alt-text-required'
import {Provider as OnboardingProvider} from './onboarding'

export {useIsDrawerOpen, useSetDrawerOpen} from './drawer-open'
export {
  useIsDrawerSwipeDisabled,
  useSetDrawerSwipeDisabled,
} from './drawer-swipe-disabled'
export {useMinimalShellMode, useSetMinimalShellMode} from './minimal-mode'
export {useColorMode, useSetColorMode} from './color-mode'
export {
  useRequireAltTextEnabled,
  useSetRequireAltTextEnabled,
} from './alt-text-required'
export {useOnboardingState, useOnboardingDispatch} from './onboarding'

export function Provider({children}: React.PropsWithChildren<{}>) {
  return (
    <DrawerOpenProvider>
      <DrawerSwipableProvider>
        <MinimalModeProvider>
          <ColorModeProvider>
            <OnboardingProvider>
              <AltTextRequiredProvider>{children}</AltTextRequiredProvider>
            </OnboardingProvider>
          </ColorModeProvider>
        </MinimalModeProvider>
      </DrawerSwipableProvider>
    </DrawerOpenProvider>
  )
}
