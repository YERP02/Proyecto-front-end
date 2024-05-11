export type DataProps = {
  email: string;
  password: string;
  showData: boolean;
};

function Data({ email, password, showData }: DataProps) {
  return (
    <section className="dataContainer">
      {showData && (
        <>
          <p>Iniciando Sesion...</p>
        </>
      )}
    </section>
  );
}

export default Data;
