import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [idade, setIdade] = useState(0);

  function fazerAniversario() {
    setIdade(idade + 1);
  }

  return (
    <div className="pagina">
      <button type="button" className="btn btn-primary" onClick={fazerAniversario}>
        Fazer Aniversário
      </button>

      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Sua idade:</label>
        <div className="col-sm-10">
          <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={idade} />
        </div>
      </div>
    </div>
  );
}

export default App;
