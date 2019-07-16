# CarlosSierralta.github.io
airport-madness

ProyectoCursoFAU
Proyecto de visualización de datos web de la FAU-Universidad de Chile, dictado por Christian Acuña.

100 aeropuertos más grandes, que es una versión de no completada de un visualizador de datos de aviación comercial, cuyo propósito es mostrar, además del mapa, la información relevante del aeropuerto sobre el que se desarrolla un evento click, y al mismo tiempo, mostrar el aeropuerto dentro de un gráfico panorámico mundial, donde se agrupen (summarize) datos por región, país, ciudad. Este gráfico debería ser un nested treemap o un nested bubble. También, de contar con más datos, se desea añadir time series de cantidad de pasajeros y posición en el ranking. la versión 0.1 beta del trabajo puede verse en: https://CarlosSierralta.github.io/ Ante la imposibilidad de lograr el gráfico deseado desde el evento click, se sustituyó por una leyenda temporal.

Se basa en bootstrap para la compartimentación del html en bloques contenedores, en tanto que la visualización de mapa y gráfica de los 100 aeropuertos más grandes del mundo (lamentablemente con datos para 2011) en base a scripts leaflet y d3.js

Descripción:

En el repositorio los distintos elementos que permiten la visualización del servicio web generado. Para esto se utiliza un geoJson que fue creados a partir de una tabla googlespreadsheet, a su vez, fue creada a partir de datos descargados del sitio del diario The Guardian (https://theguardian.com/news/datablog/2012/may/04/world-top-100-airports#data).

A partir de este geoJson se creó una visualización geográfica (con leaflet) y un gráfico (con D3).

Descripción de los script:

index.js: llama a la función lib.js para consumo de excel. lib.js: configura el consumo de excel y la creación del geoJson con los arreglos determinados por el usuario (slice para filas e items :[] para las propiedades de elementos a crear.

Los scripts de leaflet y D3 fueron ejecutados directamente en mapa.html, en tanto me resultaba confuso trabajar cambiando de archivos.
