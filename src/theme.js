import { createTheme } from '@mui/material'

// 원본 대시보드가 어두운 테마였던 것을 참고해 다크 모드로 구성
export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#0b0b0c', paper: '#161619' },
    primary: { main: '#4dd0a7' },
  },
  typography: {
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
  },
})
