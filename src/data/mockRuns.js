// ⚠️ 합성(가짜) 데이터입니다.
// 실제 Pow.Bio 의 발효 데이터나 코드가 아니라, 곡선 모양만 흉내 내도록
// 코드로 생성한 더미 시계열입니다. 회사 데이터는 전혀 포함되어 있지 않습니다.

// 로지스틱 성장 후 완만히 감소하는 바이오매스 곡선을 생성한다.
function biomassCurve({ peak, peakTime, riseRate, decayRate, duration = 150, step = 3 }) {
  const points = []
  const floor = peak * 0.55 // 감소 구간의 수렴값
  for (let t = 0; t <= duration; t += step) {
    let y
    if (t <= peakTime) {
      // 성장 구간: 로지스틱 곡선
      y = peak / (1 + Math.exp(-riseRate * (t - peakTime / 2)))
    } else {
      // 피크 이후: floor 로 수렴하는 지수 감소 (peakTime 에서 연속)
      y = floor + (peak - floor) * Math.exp(-decayRate * (t - peakTime))
    }
    points.push({ x: t, y: Number(y.toFixed(3)) })
  }
  return points
}

// 각 "티켓"은 하나의 시뮬레이션 실행 결과를 나타낸다.
// 이름은 실제와 무관한, 알아보기 쉬운 가짜 라벨이다.
export const MOCK_RUNS = [
  { id: 'run-alpha',  name: 'run-alpha',  variable: 'BiomassG', data: biomassCurve({ peak: 8.0, peakTime: 55, riseRate: 0.16, decayRate: 0.012 }) },
  { id: 'run-bravo',  name: 'run-bravo',  variable: 'BiomassG', data: biomassCurve({ peak: 7.4, peakTime: 50, riseRate: 0.19, decayRate: 0.015 }) },
  { id: 'run-cobalt', name: 'run-cobalt', variable: 'BiomassG', data: biomassCurve({ peak: 9.1, peakTime: 62, riseRate: 0.14, decayRate: 0.010 }) },
  { id: 'run-delta',  name: 'run-delta',  variable: 'BiomassG', data: biomassCurve({ peak: 6.6, peakTime: 48, riseRate: 0.22, decayRate: 0.018 }) },
  { id: 'run-echo',   name: 'run-echo',   variable: 'BiomassG', data: biomassCurve({ peak: 8.5, peakTime: 58, riseRate: 0.15, decayRate: 0.013 }) },
]
