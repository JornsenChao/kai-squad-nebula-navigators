import { Alert, Snackbar } from '@mui/material';

import ALERT_COLORS from '@/constants/notification';

/**
 * Renders a Snackbar component with alert messages.
 *
 * @return {ReactElement} The rendered Snackbar component.
 */
const SnackBar = (props) => {
  const { open, handleClose, message, severity, loginNotificationStyle = false } = props;

  return (
    <Snackbar
      open={open}
      autoHideDuration={loginNotificationStyle? 4000: 6000}
      onClose={handleClose}
      color={ALERT_COLORS[severity]}
      anchorOrigin={{ vertical: 'top', horizontal: loginNotificationStyle ? 'center' : 'right' }}
    >
      {loginNotificationStyle ? (
        <Alert 
          severity={severity} 
          onClose={handleClose} 
          variant="outlined"     
          sx={{ width: '30%', color: "warning", background:'#300000', borderRadius: '8px'}}
        >
          {message}
        </Alert> ): (
        <Alert severity={severity} onClose={handleClose}>
          {message}
        </Alert>
      )}
    </Snackbar>
  );
};

export default SnackBar;