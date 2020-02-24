using SmartCargoTransportation.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace SmartCargoTransportation.Repository
{
    public interface IGenericRepository<TEntity> where TEntity : class
    {
        bool Any(Expression<Func<TEntity, bool>> predicate);
        void Create(TEntity item);
        Task CreateAsync(TEntity item);
        TEntity FindById(int id);
        TEntity FindById(string id);
        TEntity FirstOrDefault(Func<TEntity, bool> predicate);
        IEnumerable<TEntity> Get();
        IEnumerable<TEntity> Get(Func<TEntity, bool> predicate);
        void Remove(TEntity item);
        void Update(TEntity item);
        Task UpdateAsync(TEntity item);
        IEnumerable<TEntity> GetWithInclude(params Expression<Func<TEntity, object>>[] includeProperties);
        IEnumerable<TEntity> GetWithInclude(Func<TEntity, bool> predicate, params Expression<Func<TEntity, object>>[] includeProperties);
    }
}
