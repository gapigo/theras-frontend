import React, { useState } from 'react';
import FeedScreenExample from './FeedScreenExample';
import AlbumScreenExample from './AlbumScreenExample';
import RecentScreenExample from './RecentScreenExample';
import { BottomNavigation } from 'react-native-paper';

const BottomNavigationExample = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'feeds', title: 'Feeds', icon: 'message', color: '#3F51B5' },
    { key: 'albums', title: 'albums', icon: 'album', color: '#009688' },
    { key: 'recents', title: 'Recents', icon: 'history', color: '#795548' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    feeds: FeedScreenExample,
    albums: AlbumScreenExample,
    recents: RecentScreenExample,
  });
  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomNavigationExample;
