using AutoMapper;
using SmartCargoTransportation.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SmartCargoTransportation.Data
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Job, JobModel>();
            CreateMap<JobModel, Job>();
        }
    }
}
