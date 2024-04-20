import { vjezbeLinks } from "../data/vjezbe-types";

const Vjezbe = () => {
  return (
    <>
      <h1>Popis vježbi</h1>
      <div>
        {vjezbeLinks.map((link) => {
          return (
            <a className="link link--header" key={link.href} href={link.href}>
              {link.label}
            </a>
          );
        })}
      </div>
    </>
  );
};
export default Vjezbe;
