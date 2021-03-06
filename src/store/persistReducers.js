import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'matheducation',
      storage,
      whitelist: ['auth', 'user', 'student', 'class'],
    },
    reducers
  );

  return persistedReducer;
};
