using Microsoft.EntityFrameworkCore;
using SmartCargoTransportation.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SmartCargoTransportation.Repository
{
    public class JobRepository : EFGenericRepository<Job>, IJobRepository
    {
        public JobRepository(DbContext dbContext)
            : base(dbContext)
        {

        }
    }
}
