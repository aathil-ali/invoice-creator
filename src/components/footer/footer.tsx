import { FC } from 'react';

// Mui components.
import { Box, Typography } from '@mui/material';

// Mui icons.
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', pb: 8, pt: 4 }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="subtitle1"></Typography>
        <Typography variant="subtitle1"></Typography>
      </Box>
      <Typography variant="subtitle1"></Typography>
    </Box>
  );
};

export default Footer;
