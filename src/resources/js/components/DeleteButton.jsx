import { ListItemButton, styled } from '@mui/material';

const StyledButton = styled(ListItemButton)({
  width: '24px',
  height: '24px',
  margin: '0 auto',
  backgroundColor: 'rgba(225, 77, 77, 1)',
  borderRadius: '4px',
  justifyContent: 'center',
  boxShadow: '1px 1px 1px gray',
  padding: '0px',
  color: 'white',
  '&:hover': {
    backgroundColor: 'rgba(225, 77, 77, 1)',
    opacity: '0.8',
  },
});

export const DeleteButton = ({ ...props }) => (
  <StyledButton
    {...props}
  >
    ×
  </StyledButton>
);
