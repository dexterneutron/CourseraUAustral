var Bicicleta= require('../../../models/bicicleta');
var request= require('request');
var server=require('../../../bin/www');
describe('Bicicleta API',()=>{
    describe('GET BICICLETAS /',()=>{

            it('Status 200',()=>{
                expect(Bicicleta.allBicis.length).toBe(0);
                var a=new Bicicleta(1,'rojo','urbana',[9.739334,  -63.201816]);
                Bicicleta.add(a);
                request.get('http://localhost:5000/api/bicicletas', function(error, response,body) {
                expect(response.statusCode).toBe(200); 
                });
        });
    });
});

describe('Bicicleta API',()=>{
    describe('POST BICICLETAS /CREATE',()=>{

            it('Status 200',()=>{
                var headers={'content-type':'aplication/json'};
                var aBici='{"id":10,"color":"rojo","modelo":"urbana","lat":9.739334,"lng":-63.201816]}';
                request.post({
                    headers:headers,
                    url:'http://localhost:5000/api/bicicletas/create',
                    body:aBici
                },function(error, response,body) {
                expect(response.statusCode).toBe(200); 
                expect(Bicicleta.findById(10).color).toBe("rojo"); 
                done();
                });
        });
    });
});