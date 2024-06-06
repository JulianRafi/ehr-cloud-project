/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Amplify from 'aws_amplify';
import awsconfig from './aws_exports';
import 'react-native-gesture-handler';

Amplify.configure({
    ...awsconfig,
    Analytics: {
      disabled: true,
    },
  });

AppRegistry.registerComponent(appName, () => App);
