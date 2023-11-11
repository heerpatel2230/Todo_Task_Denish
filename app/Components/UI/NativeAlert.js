import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
} from 'react';
import {
  Alert,
  Box,
  CloseIcon,
  HStack,
  IconButton,
  Text,
  VStack,
} from 'native-base';
import {TOAST_TIMEOUT} from '../../utils/constants';

export const alertRef = React.createRef();

export const useAlert = () => {
  if (alertRef && alertRef.current) {
    return {
      successToast: alertRef.current.successToast,
      errorToast: alertRef.current.errorToast,
      infoToast: alertRef.current.infoToast,
      warningToast: alertRef.current.warningToast,
    };
  }

  return {
    successToast: () => {},
    errorToast: () => {},
    infoToast: () => {},
    warningToast: () => {},
  };
};

export const NativeAlert = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  // const [clickFunc, setClickFun] = useState(() => () => {});

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        handleClose();
      }, TOAST_TIMEOUT);
    }
  }, [open]);

  useImperativeHandle(ref, () => ({
    successToast: (t, msg) => handleOpen('success', t, msg),
    errorToast: (t, msg) => handleOpen('error', t, msg),
    infoToast: (t, msg) => handleOpen('info', t, msg),
    warningToast: (t, msg) => handleOpen('warning', t, msg),
  }));

  const handleOpen = (status, ttl = '', msg = '', onClick = () => {}) => {
    setOpen(status);
    setTitle(String(ttl));
    setMessage(String(msg));
    // setClickFun(() => onClick);
  };

  const handleClose = () => {
    setOpen(false);
    setTitle('');
    setMessage('');
  };

  if (open) {
    return (
      <Box position="absolute" top={5} left={5} right={5}>
        <Alert w="100%" status={open} shadow={4} borderRadius={10}>
          <VStack space={2} flexShrink={1} w="100%">
            <HStack flexShrink={1} space={2} justifyContent="space-between">
              <HStack space={2} flexShrink={1}>
                <Alert.Icon mt="1" />
                <Text fontSize="md" color="coolGray.800">
                  {title}
                </Text>
              </HStack>
              <IconButton
                onPress={handleClose}
                ml={2}
                variant="unstyled"
                _focus={{
                  borderWidth: 0,
                }}
                icon={<CloseIcon size="3" color="coolGray.600" />}
              />
            </HStack>
            {Boolean(message) && (
              <Box
                pl="6"
                _text={{
                  color: 'coolGray.600',
                }}>
                {message}
              </Box>
            )}
          </VStack>
        </Alert>
      </Box>
    );
  }

  return <></>;
});

NativeAlert.displayName = 'NativeAlert';
