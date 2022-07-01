import { Container } from "@mui/material";
import './About.css'

const About = () => {
    return(
        <Container fixed className="about-cont">
            <div className="about-flex">
                <div className="about-flex">
                    <img className="logo" src="../mimishop-logo.png" alt="mimishop logo"/>
                </div>
                <div className="about-section">
                    <h2>¿Quienes somos?</h2>
                    <p>Somos un grupo de personas bajo el nombre <strong>MimiShop</strong>, nos concentramos en traer al país productos de calidad directos de Japón!</p>
                    <p>La mayoría de items que ves en la tienda los vamos comprando dependiendo de su popularidad, también hacemos encargos - los encargos suelen costar más y tardan mucho más ya que tenemos que esperar que lleguen al país.</p>
                    <p>Hacemos envios a todo el pais a través de <strong>Andreani</strong>.</p>
                </div>
                <div className="about-section">
                    <h3>Canales de consulta</h3>
                    <p>Siempre nos pueden contactar por medio de nuestro email (<em>consultas@mimishop.com</em>) o por medio de whatsapp (<em>+54 9 15 8844 4111</em>)</p>
                </div>
                <div className="about-section">
                    <h3>Compras</h3>
                    <p>Cuando nos mandas el formulario con los datos e items de compra, tardaremos de 1 a 3 días laborales en contactarte (siempre te contactaremos por medio de whatsapp!) acerca de tu pedido y los costos de envio, siempre pedimos el mail para poder mandar la factura de la compra. </p>
                    <p>Todas las compras se manejan en pesos. Recibimos pagos por medio de la plataforma de <strong>MercadoPago</strong>, no aceptamos pagos en efectivo.</p>
                </div>
            </div>
        </Container>
    )
}

export default About