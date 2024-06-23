import React from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface FormInputProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showPassword?: boolean;
  handleClickShowPassword?: () => void;
  handleMouseDownPassword?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const FormInput: React.FC<FormInputProps> = 
({  id, 
    name, 
    label, 
    type = "text", 
    value, 
    onChange, 
    showPassword, handleClickShowPassword, handleMouseDownPassword 
}) => {
        return (
          <TextField
            margin="normal"
            required
            fullWidth
            id={id}
            name={name}
            label={label}
            type={type}
            value={value}
            onChange={onChange}
            InputProps={{
              endAdornment: (
                name === 'password' && handleClickShowPassword && handleMouseDownPassword ? (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ) : null
              ),
            }}
          />
        );
      };

export default FormInput;
