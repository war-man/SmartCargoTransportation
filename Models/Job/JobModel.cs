using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SmartCargoTransportation.Models
{
    public class JobModel
    {
        public string Id { get; set; }
        public DateTime? CreatedDate { get; set; } //ДАТА СОЗДАНИЯ
        public string Number { get; set; } //Номер
        public string Itinerary { get; set; } //МАРШРУТ СЛЕДОВАНИЯ
        public string CargoName { get; set; }//НАИМЕНОВАНИЕ ГРУЗА
        public string PackageKind { get; set; } //ВИД УПАКОВКИ
        public string Weight { get; set; } //ВЕС (кг)
        public string Volume { get; set; } //ОБЪЕМ (м3) 
        public string QuantityOfPlaces { get; set; } //КОЛ-ВО МЕСТ
        public string LoadingKind { get; set; } //ВИД ПОГРУЗКИ
        public string Vehicle { get; set; } //ТРАНСПОРТНОЕ СРЕДСТВО
        public string Shipper { get; set; } //ГРУЗООТПРАВИТЕЛЬ
        public string LoadingPlaceAddress { get; set; } //МЕСТО ПОГРУЗКИ (адрес) 
        public string ShipperContactPerson { get; set; } //ГРУЗООТПРАВИТЕЛЬ КОНТАКТНОЕ ЛИЦО/ТЕЛЕФОН
        public DateTime? ShipmentDate { get; set; }//ДАТА/ВРЕМЯ ПОГРУЗКИ
        public string CustomsDestinations {get;set; } //ТАМОЖНЯ НАЗНАЧЕНИЯ (название и адрес СВХ)
        public string Consignee { get; set; } //ГРУЗОПОЛУЧАТЕЛЬ (Выгодоприобретатель)
        public string UnloadingPlace { get; set; } //МЕСТО РАЗГРУЗКИ (адрес) 
        public string ConsigneeContactPerson { get; set; } //ГРУЗОПОЛУЧАТЕЛЬ КОНТАКТНОЕ ЛИЦО/ТЕЛЕФОН
        public DateTime? UnloadingDate { get; set; }//ДАТА РАЗГРУЗКИ
    }
}
