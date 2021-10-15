/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import { UserState } from './context/user/UserState';
import { EmergencyState } from './context/emergency/EmergencyState';
import { StackNav } from './components/navigator/Stack';
import { RemotePushController } from './RemotePushController';


export const App = () => {
  return (
    <UserState>
      <EmergencyState>
        <StackNav/>
        <RemotePushController/>
      </EmergencyState>
    </UserState>
  )
}
