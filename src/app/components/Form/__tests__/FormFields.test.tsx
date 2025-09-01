import { render, screen, fireEvent } from '@testing-library/react';
import FormFields from '../FormFields';
import { formTexts } from '@/app/constants/texts';

const mockFormik = {
  handleChange: jest.fn(),
  handleBlur: jest.fn(),
  values: {
    name: '',
    image: '',
    species: '',
    status: '',
    gender: '',
    origin: '',
    location: '',
    created: '',
    house: '',
    hairColour: '',
    patronus: '',
    eyeColour: '',
    dateOfBirth: '',
    wizard: false,
    hogwartsStudent: false,
  },
  errors: {},
  touched: {},
  isSubmitting: false,
  isValidating: false,
  submitCount: 0,
};

const mockProps = {
  formik: mockFormik,
  onInputChange: mockFormik.handleChange,
  onBlur: mockFormik.handleBlur,
};

describe('FormFields Component', () => {
  it('renders all form fields', () => {
    render(<FormFields {...mockProps} />);

    // Проверяем текстовые поля
    expect(screen.getByTestId('name-input')).toBeInTheDocument();
    expect(screen.getByTestId('image-input')).toBeInTheDocument();
    expect(screen.getByTestId('species-input')).toBeInTheDocument();
    expect(screen.getByTestId('origin-input')).toBeInTheDocument();
    expect(screen.getByTestId('location-input')).toBeInTheDocument();
    expect(screen.getByTestId('created-input')).toBeInTheDocument();
  });

  it('calls onChange when input value changes', () => {
    render(<FormFields {...mockProps} />);

    const nameInput = screen.getByTestId('name-input');
    fireEvent.change(nameInput, { target: { value: 'New Name' } });

    expect(mockProps.onInputChange).toHaveBeenCalled();
  });

  it('calls onBlur when input loses focus', () => {
    render(<FormFields {...mockProps} />);

    const nameInput = screen.getByTestId('name-input');
    fireEvent.blur(nameInput);

    expect(mockProps.onBlur).toHaveBeenCalled();
  });

  it('renders radio buttons for status', () => {
    render(<FormFields {...mockProps} />);

    // Проверяем заголовок группы радио-кнопок
    expect(screen.getByText(formTexts.status)).toBeInTheDocument();

    // Проверяем наличие радио-кнопок для статуса
    expect(screen.getByTestId('status-group')).toBeInTheDocument();
    expect(screen.getByTestId('status-alive')).toBeInTheDocument();
    expect(screen.getByTestId('status-dead')).toBeInTheDocument();
    expect(screen.getByTestId('status-unknown')).toBeInTheDocument();
  });

  it('renders radio buttons for gender', () => {
    render(<FormFields {...mockProps} />);

    // Проверяем заголовок группы радио-кнопок
    expect(screen.getByText(formTexts.gender)).toBeInTheDocument();

    // Проверяем наличие радио-кнопок для пола
    expect(screen.getByTestId('gender-group')).toBeInTheDocument();
    expect(screen.getByTestId('gender-male')).toBeInTheDocument();
    expect(screen.getByTestId('gender-female')).toBeInTheDocument();
    expect(screen.getByTestId('gender-unknown')).toBeInTheDocument();
  });
});
