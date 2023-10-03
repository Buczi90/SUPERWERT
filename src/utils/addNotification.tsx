import { enqueueSnackbar, closeSnackbar, SnackbarKey } from 'notistack';
import { IconButton } from '@mui/material';
import { NotificationType } from '../config';

export type NotificationContent = string;

const addNotification = (data: { content: NotificationContent; type: NotificationType; options?: any }) => {
  const finalOptions: any = {
    variant: data.type,
    anchorOrigin: { vertical: 'top', horizontal: 'center' },
    autoHideDuration: 1500,
    ...data.options,
    action: (snackbarId: SnackbarKey) => (
      <IconButton key="close" aria-label="close" color="inherit" onClick={() => closeSnackbar(snackbarId)} size="small">
        x
      </IconButton>
    ),
  };

  return enqueueSnackbar(data.content, { ...finalOptions });
};

export default addNotification;
