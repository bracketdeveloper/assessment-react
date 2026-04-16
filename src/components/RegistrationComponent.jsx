import "../assets/css/registration-style.css"
const RegistrationComponent = ()=>{
    return (
        <section className="registration-section" aria-labelledby="regHeading" id="registration">
            <div className="container reg-grid">

                <div className="reg-visual" aria-hidden="true">
                    <span className="dot dot-blue  reg-dot-1"></span>
                    <span className="dot dot-black reg-dot-2"></span>
                    <span className="dot dot-blue  reg-dot-3"></span>
                    <span className="dot dot-blue  reg-dot-4"></span>
                    <span className="dot dot--picton-blue reg-dot-5"></span>
                    <span className="dot dot-cyan reg-dot-6"></span>
                    <span className="dot dot-orange reg-dot-7"></span>
                    <span className="dot dot-orange reg-dot-8"></span>
                </div>

                <div className="reg-card">
                    <h2 id="regHeading">Registration</h2>
                    <p className="reg-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique
                        senectus dui pharetra sit.</p>

                    <form id="registrationForm" noValidate aria-label="Registration form">

                        <div className="form-group">
                            <label htmlFor="fullName">Name <span className="required"
                                                                 aria-label="required">*</span></label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                placeholder="Enter your name"
                                autoComplete="name"
                                aria-required="true"
                                aria-describedby="nameError"
                            />
                            <span className="field-error" id="nameError" role="alert" aria-live="polite"></span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="company">Company</label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                placeholder="Enter your company name"
                                autoComplete="organization"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email address <span className="required"
                                                                       aria-label="required">*</span></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email address"
                                autoComplete="email"
                                aria-required="true"
                                aria-describedby="emailError"
                            />
                            <span className="field-error" id="emailError" role="alert" aria-live="polite"></span>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Register</button>

                    </form>
                </div>

            </div>
        </section>

    )
}
export default RegistrationComponent