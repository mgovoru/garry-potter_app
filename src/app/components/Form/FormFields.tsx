import { propsFormFields } from '@/app/types';
import {
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { formTexts } from '@/app/constants/texts';

export default function FormFields(props: propsFormFields) {
  const formatDate = (dateStr: string) => {
    const [day, month, year] = dateStr.split('-');
    return `${year}-${month}-${day}`;
  };

  return (
    <div className='flex flex-col gap-4'>
      <TextField
        id='outlined-basic'
        name='name'
        label={formTexts.name}
        variant='outlined'
        required
        onChange={props.onInputChange}
        onBlur={props.onBlur}
        value={props.formik.values.name}
        error={props.formik.touched.name && Boolean(props.formik.errors.name)}
        helperText={props.formik.touched.name && props.formik.errors.name}
        sx={{ '& .MuiOutlinedInput-root': { color: 'white' } }}
        inputProps={{ 'data-testid': 'name-input' }}
      />
      <TextField
        id='outlined-basic'
        name='image'
        label={formTexts.image}
        variant='outlined'
        value={props.formik.values.image}
        error={props.formik.touched.image && Boolean(props.formik.errors.image)}
        helperText={props.formik.touched.image && props.formik.errors.image}
        required
        onChange={props.onInputChange}
        onBlur={props.onBlur}
        sx={{ '& .MuiOutlinedInput-root': { color: 'white' } }}
        inputProps={{ 'data-testid': 'image-input' }}
      />
      <TextField
        id='outlined-basic'
        name='species'
        label={formTexts.species}
        variant='outlined'
        onChange={props.onInputChange}
        onBlur={props.onBlur}
        value={props.formik.values.species}
        error={
          props.formik.touched.species && Boolean(props.formik.errors.species)
        }
        helperText={props.formik.touched.species && props.formik.errors.species}
        sx={{ '& .MuiOutlinedInput-root': { color: 'white' } }}
        inputProps={{ 'data-testid': 'species-input' }}
      />
      <FormControl>
        <FormLabel sx={{ color: 'white' }}>{formTexts.status}</FormLabel>
        <RadioGroup
          name='status'
          value={props.formik.values.status}
          onChange={props.onInputChange}
          sx={{ color: 'white' }}
          data-testid='status-group'
        >
          <FormControlLabel
            value='alive'
            control={
              <Radio sx={{ color: 'white' }} data-testid='status-alive' />
            }
            label='Жив'
          />
          <FormControlLabel
            value='dead'
            control={
              <Radio sx={{ color: 'white' }} data-testid='status-dead' />
            }
            label='Мертв'
          />
          <FormControlLabel
            value='unknown'
            control={
              <Radio sx={{ color: 'white' }} data-testid='status-unknown' />
            }
            label='Неизвестно'
          />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel sx={{ color: 'white' }}>{formTexts.gender}</FormLabel>
        <RadioGroup
          name='gender'
          value={props.formik.values.gender}
          onChange={props.onInputChange}
          sx={{ color: 'white' }}
          data-testid='gender-group'
        >
          <FormControlLabel
            value='male'
            control={
              <Radio sx={{ color: 'white' }} data-testid='gender-male' />
            }
            label='Мужской'
          />
          <FormControlLabel
            value='female'
            control={
              <Radio sx={{ color: 'white' }} data-testid='gender-female' />
            }
            label='Женский'
          />
          <FormControlLabel
            value='unknown'
            control={
              <Radio sx={{ color: 'white' }} data-testid='gender-unknown' />
            }
            label='Неизвестно'
          />
        </RadioGroup>
      </FormControl>
      <TextField
        id='outlined-basic'
        name='origin'
        label={formTexts.origin}
        variant='outlined'
        onChange={props.onInputChange}
        onBlur={props.onBlur}
        value={props.formik.values.origin}
        error={
          props.formik.touched.origin && Boolean(props.formik.errors.origin)
        }
        helperText={props.formik.touched.origin && props.formik.errors.origin}
        sx={{ '& .MuiOutlinedInput-root': { color: 'white' } }}
        inputProps={{ 'data-testid': 'origin-input' }}
      />
      <TextField
        id='outlined-basic'
        name='location'
        label={formTexts.location}
        variant='outlined'
        onChange={props.onInputChange}
        onBlur={props.onBlur}
        value={props.formik.values.location}
        error={
          props.formik.touched.location && Boolean(props.formik.errors.location)
        }
        helperText={
          props.formik.touched.location && props.formik.errors.location
        }
        sx={{ '& .MuiOutlinedInput-root': { color: 'white' } }}
        inputProps={{ 'data-testid': 'location-input' }}
      />
      <TextField
        id='outlined-basic'
        name='created'
        label={formTexts.created}
        variant='outlined'
        onChange={props.onInputChange}
        onBlur={props.onBlur}
        value={formatDate(props.formik.values.created)}
        error={
          props.formik.touched.created && Boolean(props.formik.errors.created)
        }
        helperText={props.formik.touched.created && props.formik.errors.created}
        sx={{ '& .MuiOutlinedInput-root': { color: 'white' } }}
        inputProps={{ 'data-testid': 'created-input' }}
      />
    </div>
  );
}
