'use client'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 3,
        pt: 2.5,
        pb: 2.5,
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography
          component="a"
          href="/"
          sx={{
            fontSize: '0.72rem',
            color: 'text.disabled',
            textDecoration: 'none',
            letterSpacing: '0.02em',
            '&:hover': { color: 'text.secondary' },
            transition: 'color 0.2s ease',
          }}
        >
          © {new Date().getFullYear()} algotyrnt
        </Typography>
        <Typography
          sx={{
            fontSize: '0.72rem',
            color: 'text.disabled',
            letterSpacing: '0.02em',
          }}
        >
          personal portfolio
        </Typography>
      </Stack>
    </Box>
  )
}
