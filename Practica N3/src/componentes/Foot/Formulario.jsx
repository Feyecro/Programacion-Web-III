import '../../CSS/Formulario.css';
const Formulario =()=>{
    return(
        <div>
            <section id="contact" className="contac section-padding">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-header text-center pb-5">
                    <h2>contactos</h2>
                    <p>Contactonos tambien de forma on line <br/>Disfruta de las deliciosas comidas que te ofrece mi restaurante</p>
                  </div>
                </div>
              </div>
              <div className="row m-0">
                <div className="col-md-12 p-0 pt-4 pb-4">
                    <form method="post" action="/send/">
                    Nombre:
                    <input type="text" name="Nombre" placeholder="Nombre" minlength="3" maxlength="20"/><br/><br/>
                    Email:
                    <input type="email" placeholder="Email" minlength="7" maxlength="20"/><br/><br/>
                    Cuantos:
                    <input type="number" name="age" placeholder="cuantos" min="15" max="50"/><br/><br/>
                    <label for="start">Fecha de su pedido</label>
                    <input type="date" id="start" name="fecha" value="" min="" max="" /><br/><br/>
                    Especifique el pedido en que formal:
                    <input type="text"  name="" placeholder="Especificacion..." min="7"/><br/><br/>
                    <input type="submit" value="Enviar el Formulario"/>
                    </form>
                </div>
              </div>
            </div>
            </section>
        </div>
    );
};
export default Formulario;