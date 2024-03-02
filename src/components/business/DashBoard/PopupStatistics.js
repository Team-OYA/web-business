import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';

/**
 * PopupCurrent 컴포넌트 생성
 *
 * @since 2024.03.01
 * @author 이승민
 */

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']; //x축 기준

export const data = {
  labels,
  datasets: [
    {
      label: '분류 1',
      data: [5, 15, 20, 15, 10, 15, 20],
      borderColor: '#43A47A',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};

export const options = {
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
                    max: data.datasets[0].data.reduce((a, b) => Math.max(a, b)) + Math.min(...data.datasets[0].data),
            },
    },
};
  


function PopupStatistics() {

    return (
        <div className="popup-current flex justify-between px-3 py-4">
            <Line options={options} data={data} />
        </div>
    );
}

export default PopupStatistics;
