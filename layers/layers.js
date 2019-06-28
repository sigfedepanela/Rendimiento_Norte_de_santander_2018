var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_Limite_Departamental_1 = new ol.format.GeoJSON();
var features_Limite_Departamental_1 = format_Limite_Departamental_1.readFeatures(json_Limite_Departamental_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_Departamental_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Limite_Departamental_1.addFeatures(features_Limite_Departamental_1);var lyr_Limite_Departamental_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limite_Departamental_1, 
                style: style_Limite_Departamental_1,
                title: '<img src="styles/legend/Limite_Departamental_1.png" /> Limite_Departamental'
            });var format_RendimientodePanelaTonHa_2 = new ol.format.GeoJSON();
var features_RendimientodePanelaTonHa_2 = format_RendimientodePanelaTonHa_2.readFeatures(json_RendimientodePanelaTonHa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RendimientodePanelaTonHa_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_RendimientodePanelaTonHa_2.addFeatures(features_RendimientodePanelaTonHa_2);var lyr_RendimientodePanelaTonHa_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RendimientodePanelaTonHa_2, 
                style: style_RendimientodePanelaTonHa_2,
    title: 'Rendimiento de Panela (Ton/Ha)<br />\
    <img src="styles/legend/RendimientodePanelaTonHa_2_0.png" />  3,0 - 3,6 <br />\
    <img src="styles/legend/RendimientodePanelaTonHa_2_1.png" />  3,6 - 4,3 <br />\
    <img src="styles/legend/RendimientodePanelaTonHa_2_2.png" />  4,3 - 5,0 <br />\
    <img src="styles/legend/RendimientodePanelaTonHa_2_3.png" />  5,0 - 6,1 <br />\
    <img src="styles/legend/RendimientodePanelaTonHa_2_4.png" />  6,1 - 7,8 <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Limite_Departamental_1.setVisible(true);lyr_RendimientodePanelaTonHa_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Limite_Departamental_1,lyr_RendimientodePanelaTonHa_2];
lyr_Limite_Departamental_1.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'A.SEM.(Ha)': 'A.SEM.(Ha)', 'A.COS.(Ha)': 'A.COS.(Ha)', 'PROD.(Ton)': 'PROD.(Ton)', 'REND.(Ton/': 'REND.(Ton/', 'AÑO': 'AÑO', 'No': 'No', });
lyr_RendimientodePanelaTonHa_2.set('fieldAliases', {'DEPT': 'DEPT', 'MUNICIPIO': 'MUNICIPIO', 'CULTIVO': 'CULTIVO', 'AÑO': 'AÑO', 'A.SEM.(Ha)': 'A.SEM.(Ha)', 'A.COS.(Ha)': 'A.COS.(Ha)', 'PROD.(Ton)': 'PROD.(Ton)', 'REND.(Ton/': 'REND.(Ton/', });
lyr_Limite_Departamental_1.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'A.SEM.(Ha)': 'TextEdit', 'A.COS.(Ha)': 'TextEdit', 'PROD.(Ton)': 'TextEdit', 'REND.(Ton/': 'TextEdit', 'AÑO': 'Range', 'No': 'Range', });
lyr_RendimientodePanelaTonHa_2.set('fieldImages', {'DEPT': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'CULTIVO': 'TextEdit', 'AÑO': 'TextEdit', 'A.SEM.(Ha)': 'TextEdit', 'A.COS.(Ha)': 'TextEdit', 'PROD.(Ton)': 'TextEdit', 'REND.(Ton/': 'TextEdit', });
lyr_Limite_Departamental_1.set('fieldLabels', {'DEPARTAMEN': 'inline label', 'A.SEM.(Ha)': 'inline label', 'A.COS.(Ha)': 'inline label', 'PROD.(Ton)': 'inline label', 'REND.(Ton/': 'inline label', 'AÑO': 'inline label', 'No': 'inline label', });
lyr_RendimientodePanelaTonHa_2.set('fieldLabels', {'DEPT': 'inline label', 'MUNICIPIO': 'inline label', 'CULTIVO': 'inline label', 'AÑO': 'inline label', 'A.SEM.(Ha)': 'inline label', 'A.COS.(Ha)': 'inline label', 'PROD.(Ton)': 'inline label', 'REND.(Ton/': 'inline label', });
lyr_RendimientodePanelaTonHa_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});