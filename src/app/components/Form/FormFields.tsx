import { propsFormFields } from '@/app/types';
import {
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';

export default function FormFields(props: propsFormFields) {
const formatDate = (dateStr: string)  => {
    const [day, month, year] = dateStr.split('-');
    return `${year}-${month}-${day}`;
  }

  return (
    <>
      <TextField
        id='outlined-basic'
        name='name'
        label='name'
        variant='outlined'
        required
        onChange={props.onInputChange}
        value={props.formik.values.name}
        error={props.formik.touched.name && Boolean(props.formik.errors.name)}
        helperText={props.formik.touched.name && props.formik.errors.name}
      />
      <TextField
        id='outlined-basic'
        name='image'
        label='url image'
        variant='outlined'
        value={props.formik.values.image}
        error={props.formik.touched.image && Boolean(props.formik.errors.image)}
        helperText={props.formik.touched.image && props.formik.errors.image}
        required
        onChange={props.onInputChange}
      />
      <TextField
        id='outlined-basic'
        name='species'
        label='species'
        variant='outlined'
        onChange={props.onInputChange}
        value={props.formik.values.species}
        error={
          props.formik.touched.species && Boolean(props.formik.errors.species)
        }
        helperText={props.formik.touched.species && props.formik.errors.species}
        required
      />
      <TextField
        id='outlined-basic'
        name='house'
        label='house'
        variant='outlined'
        onChange={props.onInputChange}
        value={props.formik.values.house}
        error={props.formik.touched.house && Boolean(props.formik.errors.house)}
        helperText={props.formik.touched.house && props.formik.errors.house}
        required
      />
      <TextField
        id='outlined-basic'
        name='hairColour'
        label='hair colour'
        variant='outlined'
        onChange={props.onInputChange}
        value={props.formik.values.hairColour}
        error={
          props.formik.touched.hairColour &&
          Boolean(props.formik.errors.hairColour)
        }
        helperText={
          props.formik.touched.hairColour && props.formik.errors.hairColour
        }
        required
      />
      <FormControl
        sx={{
          '& > *': {
            textShadow: '1px 1px white',
            fontFamily: 'var(--font-montserrat-sans) !important',
          },
          flexDirection: 'row',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <FormLabel id='demo-controlled-radio-buttons-group'>Student</FormLabel>
        <RadioGroup
          aria-labelledby='demo-controlled-radio-buttons-group'
          name='controlled-radio-buttons-group'
          onChange={props.onInputChange}
          sx={{
            flexDirection: 'row',
          }}
        >
          <FormControlLabel
            value={props.formik.values.hogwartsStudent}
            control={
              <Radio
                sx={{
                  '&.Mui-checked': { color: 'red' },
                }}
                checked={props.formik.values.hogwartsStudent}
              />
            }
            label='yes'
          />
          <FormControlLabel
            value={!props.formik.values.hogwartsStudent}
            control={
              <Radio
                sx={{
                  '&.Mui-checked': { color: 'red' },
                }}
                checked={!props.formik.values.hogwartsStudent}
              />
            }
            label='no'
          />
        </RadioGroup>
      </FormControl>
      <TextField
        id='outlined-basic'
        name='patronus'
        label='patronus'
        variant='outlined'
        onChange={props.onInputChange}
        value={props.formik.values.patronus}
        error={
          props.formik.touched.patronus && Boolean(props.formik.errors.patronus)
        }
        helperText={
          props.formik.touched.patronus && props.formik.errors.patronus
        }
        required
      />
      <TextField
        id='outlined-basic'
        name='eyeColour'
        label='eye colour'
        variant='outlined'
        onChange={props.onInputChange}
        value={props.formik.values.eyeColour}
        error={
          props.formik.touched.eyeColour &&
          Boolean(props.formik.errors.eyeColour)
        }
        helperText={
          props.formik.touched.eyeColour && props.formik.errors.eyeColour
        }
        required
      />
      <FormControl
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: '16px',
          '& > *': {
            textShadow: '1px 1px white',
            fontFamily: 'var(--font-montserrat-sans) !important',
          },
        }}
      >
        <FormLabel
          id='demo-controlled-radio-buttons-group'
          sx={{
            fontWeight: 'bold',
          }}
        >
          Wizard
        </FormLabel>
        <RadioGroup
          aria-labelledby='demo-controlled-radio-buttons-group'
          name='controlled-radio-buttons-group'
          onChange={props.onInputChange}
          sx={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <FormControlLabel
            value={props.formik.values.wizard}
            control={<Radio />}
            label='yes'
            checked={props.formik.values.wizard}
          />
          <FormControlLabel
            value={!props.formik.values.wizard}
            control={<Radio />}
            label='no'
            checked={!props.formik.values.wizard}
          />
        </RadioGroup>
      </FormControl>
      <TextField
        type='date'
        id='outlined-basic'
        name='dateOfBirth'
        label='date of birth'
        variant='outlined'
        onChange={props.onInputChange}
        defaultValue={formatDate(props.formik.values.dateOfBirth)}
      />
    </>
  );
}
