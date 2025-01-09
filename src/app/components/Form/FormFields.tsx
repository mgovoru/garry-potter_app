import { propsFormFields } from "@/app/types";
import { TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";


export default function FormFields(props: propsFormFields) {


	
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
      <FormControl sx={{ color: 'white' }}>
        <FormLabel
          id='demo-controlled-radio-buttons-group'
          sx={{
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          Student
        </FormLabel>
        <RadioGroup
          aria-labelledby='demo-controlled-radio-buttons-group'
          name='controlled-radio-buttons-group'
          onChange={props.onInputChange}
        >
          <FormControlLabel
            value={true}
            control={
              <Radio
                sx={{
                  color: 'white',
                }}
              />
            }
            label='yes'
          />
          <FormControlLabel
            value={false}
            control={
              <Radio
                sx={{
                  color: 'white',
                }}
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
      <FormControl sx={{ color: 'white' }}>
        <FormLabel
          id='demo-controlled-radio-buttons-group'
          sx={{
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          Wizard
        </FormLabel>
        <RadioGroup
          aria-labelledby='demo-controlled-radio-buttons-group'
          name='controlled-radio-buttons-group'
          onChange={props.onInputChange}
          sx={{ display: 'flex', gap: '10px' }}
        >
          <FormControlLabel
            value={true}
            control={
              <Radio
                sx={{
                  color: 'white',
                }}
              />
            }
            label='yes'
          />
          <FormControlLabel
            value={false}
            control={
              <Radio
                sx={{
                  color: 'white',
                }}
              />
            }
            label='no'
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
        sx={{
          '& .MuiInputBase-input': { color: 'black' },
        }}
      />
    </>
  );
}
