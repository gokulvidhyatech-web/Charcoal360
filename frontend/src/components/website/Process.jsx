import {
  Search,
  ClipboardList,
  Code2,
  CheckCircle2,
  Rocket
} from "lucide-react";

const process = [
  ["01", "Discover", "Understand your goals and requirements.", Search],
  ["02", "Plan", "Create the right strategy and roadmap.", ClipboardList],
  ["03", "Design & Develop", "Build a clean and scalable solution.", Code2],
  ["04", "Test & Optimize", "Test performance, SEO and experience.", CheckCircle2],
  ["05", "Launch & Support", "Launch confidently with ongoing support.", Rocket]
];

export default function Process() {

  return (
    <section className="process-section">

      <div className="container">

        <div className="section-title">

          <span>MY PROCESS</span>

          <h2>
            A Simple Process.
            <br />
            <strong>Powerful Results.</strong>
          </h2>

          <p>
            Clear communication, clean execution and a process
            designed to keep every project moving forward.
          </p>

        </div>

        <div className="process-grid">

          {process.map(([number, title, description, Icon]) => (

            <div
              className="process-card"
              key={number}
            >

              <div className="process-icon">
                <Icon size={20} />
              </div>

              <small>{number}</small>

              <h3>{title}</h3>

              <p>{description}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}