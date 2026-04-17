import React from "react";
import useForm from "./hooks/useForm.js";

export default function RegistrationForm() {
    const initialValues = {
        name: "",
        company: "",
        email: "",
    };

    const validate = (values) => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!values.name.trim()) {
            errors.name = "Name is required";
        }

        if (!values.email) {
            errors.email = "Email is required";
        } else if (!emailRegex.test(values.email)) {
            errors.email = "Please enter a valid email";
        }

        return errors;
    };

    const {
        formData,
        isSubmitted,
        errors,
        handleChange,
        submitForm,
        setIsSubmitted,
        setFormData
    } = useForm(initialValues, validate);

    const resetForm = () => {
        setIsSubmitted(false);
        setFormData(initialValues);
    };

    if (isSubmitted) {
        return (
            <div className="registration-success">
                <h2 className="submitted-heading">Registration</h2>
                <p className="reg-desc">
                    Hi {formData.name}, thanks for registering. Somebody will contact you soon.
                </p>
                <button onClick={resetForm} className="btn btn-primary">
                    New Registration
                </button>
            </div>
        );
    }

    return (
        <>
            <h2 id="regHeading">Registration</h2>
            <p className="reg-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.
            </p>

            <form onSubmit={submitForm} noValidate aria-labelledby="regHeading">
                <div className="form-group">
                    <label htmlFor="name">
                        Name <span className="required" aria-hidden="true">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        autoComplete="name"
                        required
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "nameError" : undefined}
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && (
                        <span className="field-error" id="nameError" role="alert">
              {errors.name}
            </span>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Enter your company name"
                        autoComplete="organization"
                        value={formData.company}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">
                        Email address <span className="required" aria-hidden="true">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email address"
                        autoComplete="email"
                        required
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "emailError" : undefined}
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && (
                        <span className="field-error" id="emailError" role="alert">
              {errors.email}
            </span>
                    )}
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                    Register
                </button>
            </form>
        </>
    );
}