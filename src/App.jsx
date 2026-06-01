import { useState } from 'react'
import { Container, Typography, Stack, Box, Alert } from '@mui/material'
import { MOCK_RUNS } from './data/mockRuns'
import TicketSelect from './components/TicketSelect'
import OverlayChart from './components/OverlayChart'

export default function App() {
  const [selected, setSelected] = useState(['run-alpha', 'run-bravo', 'run-cobalt'])
  const selectedRuns = MOCK_RUNS.filter((r) => selected.includes(r.id))

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h5" fontWeight={700} gutterBottom>
        Fermentation — Multi-Run Comparison (Demo)
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, maxWidth: 760, lineHeight: 1.6 }}>
        여러 시뮬레이션 결과(티켓)를 동시에 선택해 한 차트에 겹쳐 비교하는 기능의 재구현 데모입니다.
        티켓을 추가/제거하면 차트가 즉시 갱신되며, 티켓마다 색과 선 스타일을 달리해 구분합니다.
      </Typography>

      <Alert severity="info" variant="outlined" sx={{ mb: 4, maxWidth: 760 }}>
        모든 데이터는 코드로 생성한 <strong>합성(가짜) 데이터</strong>입니다.
        실제 Pow.Bio 의 코드·데이터는 포함하지 않습니다.
      </Alert>

      <Stack spacing={3}>
        <TicketSelect runs={MOCK_RUNS} value={selected} onChange={setSelected} />
        {selectedRuns.length > 0 ? (
          <OverlayChart runs={selectedRuns} />
        ) : (
          <Box sx={{ py: 8, textAlign: 'center', color: 'text.secondary' }}>
            티켓을 하나 이상 선택하세요.
          </Box>
        )}
      </Stack>
    </Container>
  )
}
