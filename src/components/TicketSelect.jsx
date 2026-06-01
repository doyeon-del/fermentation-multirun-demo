import { Autocomplete, TextField, Chip } from '@mui/material'

// 여러 티켓(실행 결과)을 동시에 선택하는 입력.
// 선택된 항목은 Chip 태그로 표시된다. (원본 기능의 핵심 UI를 재현)
export default function TicketSelect({ runs, value, onChange }) {
  const labelOf = (id) => runs.find((r) => r.id === id)?.name ?? id

  return (
    <Autocomplete
      multiple
      options={runs.map((r) => r.id)}
      getOptionLabel={labelOf}
      value={value}
      onChange={(event, newValue) => onChange(newValue)}
      isOptionEqualToValue={(option, val) => option === val}
      renderTags={(selected, getTagProps) =>
        selected.map((id, index) => {
          const { key, ...tagProps } = getTagProps({ index })
          return <Chip key={id} label={labelOf(id)} color="primary" {...tagProps} />
        })
      }
      renderInput={(params) => <TextField {...params} label="Select ticket(s)" />}
      sx={{ maxWidth: 680 }}
    />
  )
}
