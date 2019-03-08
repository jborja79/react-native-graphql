import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import ScreenOne from './screens/ScreenOne';
import ScreenTwo from './screens/ScreenTwo';

const AppStack = createStackNavigator({
  ScreenOne: {
    screen: ScreenOne,
    navigationOptions: () => ({
      title: 'ScreenOne',
    }),
  },
  ScreenTwo: {
    screen: ScreenTwo,
    navigationOptions: () => ({
      title: 'ScreenTwo',
    }),
  },
});

// const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
    },
    {
      initialRouteName: 'App',
    }
  )
);
