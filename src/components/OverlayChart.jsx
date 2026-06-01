import 'chart.js/auto'
import { Line } from 'react-chartjs-2'

// 티켓별로 색과 선 스타일을 다르게 부여해 한 차트에 겹쳐 그린다.
const COLORS = ['#4dd0a7', '#e05c6e', '#e0a24d', '#5c8ae0', '#b072e0']
const DASHES = [[], [6, 4], [2, 3], [10, 4], [4, 2, 2, 2]]

export default function OverlayChart({ runs }) {
  const datasets = runs.map((run, i) => ({
    // 범례 라벨에 변수명과 티켓명을 함께 표기: "BiomassG (run-alpha)"
    label: `${run.variable} (${run.name})`,
    data: run.data,
    borderColor: COLORS[i % COLORS.length],
    backgroundColor: COLORS[i % COLORS.length],
    borderDash: DASHES[i % DASHES.length],
    borderWidth: 2,
    pointRadius: 0,
    tension: 0.3,
  }))

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: 'nearest', intersect: false },
    scales: {
      x: {
        type: 'linear',
        title: { display: true, text: 'Time (hours)' },
        ticks: { color: '#cfcfd4' },
        grid: { color: 'rgba(255,255,255,0.06)' },
      },
      y: {
        title: { display: true, text: 'Biomass (g/L)' },
        ticks: { color: '#cfcfd4' },
        grid: { color: 'rgba(255,255,255,0.06)' },
      },
    },
    plugins: {
      legend: { position: 'top', labels: { color: '#e6e6ea' } },
    },
  }

  return (
    <div style={{ height: 460 }}>
      <Line data={{ datasets }} options={options} />
    </div>
  )
}
