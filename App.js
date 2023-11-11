import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNav from './app/navigation/MainNav';
import {AuthProvider} from './app/lib/AuthContext';
import {persistor, store} from './app/redux/store/configureStore';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {ActivityIndicator} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {NativeBaseProvider} from 'native-base';
import BaseTheme from './app/utils/theme';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider theme={BaseTheme}>
        <NavigationContainer>
          <Provider store={store}>
            <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
              <AuthProvider>
                <MainNav />
              </AuthProvider>
            </PersistGate>
          </Provider>
        </NavigationContainer>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
};

export default App;
