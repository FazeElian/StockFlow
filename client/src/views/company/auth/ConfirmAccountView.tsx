// Styles
import "../../../../public/css/components/company/auth/Forms.css";

// Logo
import Logo from "../../../../public/img/Logo.png";

const ConfirmAccountView = () => {
    return (
        <main className="content-page--company">
            <section className="sect-form-users">
                <form action="" className="form-users bg-black-medium font-inter" method="post">
                    <div className="top-form-users bg-transparent">
                        <img
                            src={Logo}
                            className="bg-transparent"
                            alt=""
                            loading="lazy"
                        />
                        <h2 className="color-gray bg-transparent">
                            Confirm your account using the code sent to your email
                        </h2>
                    </div>
                    <div className="inputs-form-users bg-transparent">
                        <div className="group-form-users bg-transparent">
                            <label htmlFor="email" className="bg-transparent color-white">Confirmation Code</label>
                            <input
                                type="text"
                                id="code"
                                minLength={6}
                                maxLength={6}
                                className="color-black bg-white font-inter"
                                placeholder="Enter the code sent to your email"
                            />
                        </div>

                        <button className="btn-submit-form-users bg-black-medium color-gray font-inter" type="submit">
                            Confirm Account
                        </button>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default ConfirmAccountView;