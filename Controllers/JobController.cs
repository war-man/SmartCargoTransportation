using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SmartCargoTransportation.Data;
using SmartCargoTransportation.Models;
using SmartCargoTransportation.Models.Job;
using SmartCargoTransportation.Repository;

namespace SmartCargoTransportation.Controllers
{
    public class JobController : Controller
    {
        private readonly IJobRepository _repository;
        private readonly IMapper _mapper;
        public JobController(IJobRepository repository, IMapper mapper)
        {
            _repository = repository;
            if (mapper != null)
                _mapper = mapper;
        }

        [HttpGet("{id}")]
        public JobModel Get(int id)
        {
            JobModel job = _mapper.Map<JobModel>(_repository.FirstOrDefault(x => x.Id == id));
            return job;
        }
        [Route("api/jobs")]
        [HttpGet]
        public IEnumerable<JobModel> GetAll()
        {
            JobModel[] jobs = _repository.Get().Select(j => _mapper.Map<JobModel>(j)).ToArray();
            return jobs;
        }
        [Route("api/jobs/calendar")]
        [HttpGet]
        public IEnumerable<EventViewModel> GetAllCalendar()
        {
            EventViewModel[] events = _repository.Get().Select(job => new EventViewModel()
            {
                id = job.Id,
                title = job.Number,
                start = job.UnloadingDate != null? job.UnloadingDate.Value.ToString("yyyy-MM-dd", System.Globalization.CultureInfo.InvariantCulture): null,
                end = job.UnloadingDate != null? job.UnloadingDate.Value.ToString("yyyy-MM-dd", System.Globalization.CultureInfo.InvariantCulture): null,
                allDay = true
            }).ToArray();
            return events;
        }
        [HttpPost]
        [Route("api/jobs/createJob")]
        public async Task<bool> CreateJob([FromBody] JobModel job)
        {
            if (job == null) return false;
            job.CreatedDate = DateTime.Now;
            
            await _repository.CreateAsync(_mapper.Map<Job>(job));
            return true;
        }
    }
}