import { ListItemButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export const PlusButton = ({ clickEvent }) => (
  <ListItemButton
    sx={{
      width: 'fit-content',
      padding: 0,
      background: 'white',
      borderRadius: '100%',
    }}
    onClick={clickEvent}
  >
    <AddCircleIcon
      fontSize="large"
      sx={{ color: 'rgba(47, 222, 222, 1)' }}
    />
  </ListItemButton>

);
