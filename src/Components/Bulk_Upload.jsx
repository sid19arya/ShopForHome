
import Papa from 'papaparse'


function Bulk_Upload(){

    const handle_import = event => {
        const File = event.target.files[0];

        Papa.parse(File, {
            // header: true,
            complete: (result) => {
                console.log(result);
                // MAKE 2D ARRAY, OR IF YOU HAVE A HEADER THEN IT MODIFIES A BIT
                // MAKE IT PRETTY EASY TO UPLOAD, JUST UPLOAD ONE AT A TIME FROM HERE
                // BEFORE YOU CAN HOOK THIS UP TO FRONT, 
            }
        })
    }

    return (
      <div>
        Upload your CSV FIle Here!
        <input type="file" name='file' accept=".csv" onChange={handle_import}></input>
      </div>
    );
}

export default Bulk_Upload;