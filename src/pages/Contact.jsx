import React from 'react'
import NavBar from '../components/NavBar/NavBar';

const Contact = () => {

    return (
        <>
            <NavBar />

            <h1>Contactez-nous</h1>

            <p>N'hésitez pas à nous contacter si vous avez des questions, des demandes spécifiques
                ou si vous souhaitez en savoir plus sur nos services. <br /> Notre équipe est à votre
                disposition pour vous fournir des informations complémentaires et vous guider dans
                votre recherche immobilière de luxe.
            </p>

            <form className="formContact" >
                <div>
                    <label htmlFor="subject">
                        Sujet :
                    </label>
                    <input
                        name="subject"
                        id="subject"
                        placeholder="quel est le sujet"
                    />

                </div>
                <div>
                    <label htmlFor="email">
                        Email :
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="mail@mail.com"
                    />
                </div>
                <div>
                    <label htmlFor="message">
                        Message
                    </label>
                    <textarea
                        rows={5}
                        name="message"
                        id="message"
                        placeholder="quel est votre message"
                    />
                </div>
                <input
                    type="submit"
                />
            </form>
        </>
    )
}

export default Contact;