using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using SmartCargoTransportation.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SmartCargoTransportation.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }

        public DbSet<Job> Jobs { get; set; }
        public DbSet<Partner> Partners { get; set; }
        public DbSet<Contractor> Contractors { get; set; }

    }
    /*
* First step
==========

EntityFramework\enable-migrations -ContextTypeName MovingContext

Second Step
===========

EntityFramework\add-migration -ConfigurationTypeName Common.DataContext.Migrations.Configuration "Initial"


Third Step
==========

EntityFramework\update-database -ConfigurationTypeName Common.DataContext.Migrations.Configuration -verbose

*/

    public class Job
    {
        [Key]
        public int Id { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string Number { get; set; }
        public string Itinerary { get; set; } //МАРШРУТ СЛЕДОВАНИЯ
        public string CargoName { get; set; }//НАИМЕНОВАНИЕ ГРУЗА
        public string PackageKind { get; set; } //ВИД УПАКОВКИ
        public string Weight { get; set; } //ВЕС (кг)
        public string Volume { get; set; } //ОБЪЕМ (м3) 
        public string NumberOfPlacesOrViewLoading { get; set; } //КОЛ-ВО МЕСТ/ВИД ПОГРУЗКИ
        public string Vehicle { get; set; } //ТРАНСПОРТНОЕ СРЕДСТВО
        public string Shipper { get; set; } //ГРУЗООТПРАВИТЕЛЬ
        public string LoadingPlaceAddress { get; set; } //МЕСТО ПОГРУЗКИ (адрес) 
        public string ShipperContactPerson { get; set; } //ГРУЗООТПРАВИТЕЛЬ КОНТАКТНОЕ ЛИЦО/ТЕЛЕФОН
        public DateTime? ShipmentDate { get; set; }//ДАТА / ВРЕМЯ ПОГРУЗКИ
        public string CustomsDestinations { get; set; } //ТАМОЖНЯ НАЗНАЧЕНИЯ (название и адрес СВХ)
        public string Consignee { get; set; } //ГРУЗОПОЛУЧАТЕЛЬ (Выгодоприобретатель)
        public string UnloadingPlace { get; set; } //МЕСТО РАЗГРУЗКИ (адрес) 
        public string ConsigneeContactPerson { get; set; } //ГРУЗОПОЛУЧАТЕЛЬ КОНТАКТНОЕ ЛИЦО/ТЕЛЕФОН
        public DateTime? UnloadingDate { get; set; }//ДАТА РАЗГРУЗКИ
        public Job()
        {

        }
    }

    public class Partner
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public Partner()
        {
        }
    }

    public class Contractor
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public Contractor()
        {
        }
    }
}
