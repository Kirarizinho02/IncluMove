import { UseAppContext } from "../../hooks";

const ButtonEdit = () => {
  const { mudarFoto } = UseAppContext();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const fotoURL = reader.result;
        mudarFoto(fotoURL);  
      };
      reader.readAsDataURL(file);  
    }
  };

  return (
    <label className="btn btn-secondary p-2">Editar foto
      <input type="file" className="form-control required d-none" onChange={handleFileChange} /> 
    </label>
  )
}
export { ButtonEdit };