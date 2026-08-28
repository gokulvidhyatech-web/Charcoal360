const clients = [
  "CLIENT ONE",
  "BRAND CO.",
  "NOVA",
  "TECHLAB",
  "VISTA",
  "STARTUP"
];

export default function Clients() {

  return (
    <section className="clients-section">

      <div className="container">

        <div className="section-title">

          <span>TRUSTED BY BUSINESSES</span>

          <h2>
            Some Of The Clients
            <br />
            I've <strong>Worked With.</strong>
          </h2>

        </div>

        <div className="clients-grid">

          {clients.map((client) => (

            <div
              className="client-logo"
              key={client}
            >
              {client}
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}