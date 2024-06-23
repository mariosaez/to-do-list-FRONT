export const isFieldValid = (field: string): boolean => {
    return field.trim() !== "";
};

export const isFormValid = (fields: string[]): boolean => {
    return fields.every(isFieldValid);
};

export const manageErrorResponse = (status: number): string => {
    if (status === 404) {
        return "User not found";
    } else if (status === 500) {
        return "Login error";
    }
    return "An unexpected error occurred";
};

export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
