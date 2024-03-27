import { dataTypesLinks } from "../data/data-types";

const DataTypes = () => {
  return (
    <>
      <h1>Datatypes</h1>
      <div>
        {dataTypesLinks.map((link) => {
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
export default DataTypes;
