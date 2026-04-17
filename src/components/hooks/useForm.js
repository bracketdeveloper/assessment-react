import { useState } from "react";

export default function useForm(initialValues = {}, validate) {
    const [formData, setFormData] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const submitForm = (e) => {
        e.preventDefault();

        const validationErrors = validate(formData);

        const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
        const emailExists = existingUsers.some((user) => user.email === formData.email);

        if (emailExists) {
            validationErrors.email = "This email is already registered";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        existingUsers.push(formData);
        localStorage.setItem("users", JSON.stringify(existingUsers));

        setIsSubmitted(true);
    };

    return {
        formData,
        errors,
        isSubmitted,
        handleChange,
        submitForm,
        setFormData,
        setIsSubmitted,
    };
}