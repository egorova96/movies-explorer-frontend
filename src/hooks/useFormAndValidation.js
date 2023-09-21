import {useState, useCallback} from 'react';

export function useFormAndValidation() {
  const [ errors, setErrors ] = useState({});
  const [ values, setValues ] = useState({});
  const [ isValid, setIsValid ] = useState(true);

  const handleChange = (e) => {
    const {name, value} = e.target
    setErrors({...errors, [name]: e.target.validationMessage});
    setValues({...values, [name]: value });
    setIsValid(e.target.closest('form').checkValidity());
  };

  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setErrors(newErrors);
    setValues(newValues);
    setIsValid(newIsValid);
  }, [setErrors, setValues, setIsValid]);

  return { values, handleChange, errors, isValid, resetForm, setValues, setIsValid };
}