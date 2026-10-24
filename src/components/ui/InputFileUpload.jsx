import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { RiImageAddFill } from 'react-icons/ri';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function InputFileUpload({handleImage}) {
  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      sx={{ mt : 2 }}
      tabIndex={-1}
      startIcon={<RiImageAddFill />}
    >
      <VisuallyHiddenInput
        type="file"
        onChange={handleImage}
        multiple
      />
    </Button>
  );
}
