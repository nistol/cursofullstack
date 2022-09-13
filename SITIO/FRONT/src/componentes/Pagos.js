const Pagos = (props) => {
    return (
        <div class="container-fluid pagos">
        <div class="pago">
          <h2>Medios de pago</h2>
          <div class="imgpagos">
            <img src="https://www.rimaya.com.ar/img/cms/pagos.png" alt="" />
          </div>
          <div class="cajacont">
            <div class="caja1">
              <h4>Pago en efectivo</h4>
              <p>pago directo en efectivo en persona</p>
            </div>
            <div class="caja2">
              <h4>Mercado Pago</h4>
              <p>Tarjeta o transferencia mercado pago</p>
            </div>
            <div class="caja2">
              <h4>Transferencia bancaria</h4>
              <p>Pago por transferencia bancaria con CBU</p>
            </div>
          </div>
        </div>
      </div>
            );
            }

export default Pagos;