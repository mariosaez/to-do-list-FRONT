import React, { useEffect, useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface FormInputProps {
  initialDisabled?: boolean;
  id: string;
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showPassword?: boolean;
  setDisabled?: (updateDisabled: React.Dispatch<React.SetStateAction<boolean>>) => void;
  handleClickShowPassword?: () => void;
  handleMouseDownPassword?: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  initialDisabled = false,
  id,
  name,
  label,
  type = "text",
  value,
  onChange,
  showPassword,
  handleClickShowPassword,
  handleMouseDownPassword,
  setDisabled
}) => {
  const [disabled, updateDisabled] = useState(initialDisabled);

  useEffect(() => {
    if (setDisabled) {
      setDisabled(updateDisabled);
    }
  }, [setDisabled]);

  useEffect(() => {
    updateDisabled(initialDisabled);
  }, [initialDisabled]);

  return (
    <TextField
      margin="normal"
      disabled={disabled}
      fullWidth
      id={id}
      name={name}
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      InputProps={{
        endAdornment:
          name === "password" &&
          handleClickShowPassword &&
          handleMouseDownPassword ? (
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
          ) : null,
      }}
    />
  );
};

export default FormInput;
