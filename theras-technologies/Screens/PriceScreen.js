import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { Data } from '../Components/price_graphic/Data';
import PieChart from '../Components/price_graphic/PieChart';
import BarChart from '../Components/price_graphic/BarChart';
import LineChart from '../Components/price_graphic/LineChart';

Chart.register(CategoryScale);

const PriceScreen = () => {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: 'Users Gained ',
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          'rgba(75,192,192,1)',
          'ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
        ],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  });

  return (
    // <View className="App">
    //   <PieChart chartData={chartData} />
    //   <BarChart chartData={chartData} />
    //   <LineChart chartData={chartData} />
    // </View>
    <View>
      <div style={{ maxWidth: '50%', height: '100vh' }}>
        {/* <PieChart chartData={chartData} /> */}
        {/* <BarChart chartData={chartData} /> */}
        <LineChart chartData={chartData} />
      </div>
    </View>
  );
};

export default PriceScreen;
