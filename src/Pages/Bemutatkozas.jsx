const Bemutatkozas = () => {
    return (
        <div className="container py-5">
            <h3 className="mb-3">Történet:</h3>
            <p>A Petrik Webehely-gyárat 2011-ben alapították, hogy az egyre növekvő webes igényeket ki tudja elégíteni.</p>
            <p>2022-ben multinacionális céggé nőtte ki magát a kezdetben önkéntesekből álló szervezet.</p><br />
            <h3 className="mb-3">Jelenlegi tagjaink</h3>
            <img className="float-end" src="img/profile.png" alt="Fotó a főnökről" />
            <ul>
                <li>Erdős Ildikó</li>
                <li>Jónás Viola</li>
                <li>Kató Anna</li>
                <li>Pintér Koppány</li>
                <li>Sas Gizi</li>
            </ul>
        </div>
    );
}
export default Bemutatkozas;