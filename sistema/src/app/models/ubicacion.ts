export class Ubicacion {

    _id?: number;
    departamento: string;
    distrito: string;
    c_lat:number;
    c_long:number;
    lat1:number;
    long1:number;
    lat2:number;
    long2:number;
    lat3:number;
    long3:number;

    

    constructor(departamento:string, distrito:string, c_lat:number, c_long:number, lat1:number, long1:number, lat2:number, long2:number, lat3:number, long3:number, ){
        this.departamento = departamento;
        this.distrito = distrito;
        this.c_lat = c_lat;
        this.c_long = c_long;
        this.lat1 = lat1;
        this.long1 = long1;
        this.lat2 = lat2;
        this.long2 = long2;
        this.lat3 = lat3;
        this.long3 = long3;

    }

}