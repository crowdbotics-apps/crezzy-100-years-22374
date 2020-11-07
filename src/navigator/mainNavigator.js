import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen45169047Navigator from '../features/BlankScreen45169047/navigator';
import Maps169009Navigator from '../features/Maps169009/navigator';
import Additem169008Navigator from '../features/Additem169008/navigator';
import Maps169004Navigator from '../features/Maps169004/navigator';
import UserProfile169000Navigator from '../features/UserProfile169000/navigator';
import BlankScreen0168977Navigator from '../features/BlankScreen0168977/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen45169047: { screen: BlankScreen45169047Navigator },
Maps169009: { screen: Maps169009Navigator },
Additem169008: { screen: Additem169008Navigator },
Maps169004: { screen: Maps169004Navigator },
UserProfile169000: { screen: UserProfile169000Navigator },
BlankScreen0168977: { screen: BlankScreen0168977Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
