import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import UserStatisticsApi from '../../../api/business/dashBoard/userStatisticsApi';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PopupStatistics = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: '통계',
        data: [],
        borderColor: '#43A47A',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        offset: true,
      },
      y: {
        min: 0,
        max: Math.max(...chartData.datasets[0].data) + Math.min(...chartData.datasets[0].data),
      },
    },
  };

useEffect(() => {
    const fetchStatistics = async () => {
        let labels = [];
        let counts = [];
        try {
            const response = await UserStatisticsApi.categoryStatistics();
            const statisticsDetails = response.data.data.statisticsDetails;
            if (statisticsDetails[0].categoryName === "전체 조회") {
            statisticsDetails.shift();
            }
            labels = statisticsDetails.map((item) => item.categoryName);
            counts = statisticsDetails.map((item) => item.count);
            setChartData({
                labels,
                datasets: [
                    {
                    label: '통계',
                    data: counts,
                    borderColor: '#43A47A',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    }
                ],
            });
        } catch (error) {
            setChartData({
                labels : ['통계 오류'],
                datasets: [
                    {
                    label: '통계',
                    data: counts,
                    borderColor: '#43A47A',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    }
                ],
            });
            console.error('통계 오류:', error);
        }
        };

        fetchStatistics();
    }, []);

    return (
        <div className="popup-current flex justify-between px-3 py-4">
        <Line options={options} data={chartData} />
        </div>
    );
};

export default PopupStatistics;
