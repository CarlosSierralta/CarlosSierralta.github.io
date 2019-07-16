module.exports = { 
    // Se define un método local, para leer contenido excel
    leerExcel: function (ARCHIVO, HOJA, callback) {
      const readXlsxFile = require('read-excel-file/node')
  
      readXlsxFile(ARCHIVO, { sheet: HOJA })
      .then((data) => {
        console.log(data)
        let datos_extraidos = data.slice(1,101).map((item)=>{
          return { 
            "type": "Feature", 
            "properties": { 
              "ranking": item[10],
              "Region": item[1],
              "IATA": item[2],
              "Ciudad": item[3],
              "Pais": item[4],
              "pasajeros2010": item[6],
              "pasajeros2011": item[5],
              "cambioporcentual": item[7]
            }
            , 
            "geometry": { 
              "type": "Point", 
              "coordinates": [item[8], item[9]], 
            } 
          }
        })

        let geojson = {
          "type": "FeatureCollection",
          "features": datos_extraidos
        }
  
        callback(null, geojson)
      })
      .catch((error) => {
        console.log("Se produjo un error al leer el archivo: " + ARCHIVO, error)
        callback(error)
      })
    },
  
    // Se define un método local, para escribir CSV
    escribirJSON: function (data){
      const fs = require('fs');
  
      fs.writeFile('mapa.geojson', JSON.stringify(data), 'utf8', function(){
        console.log('Archivo json creado correctamente.')
      })
    }
  }