using Microsoft.EntityFrameworkCore;
using SmartCargoTransportation.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace SmartCargoTransportation.Repository
{
    public class EFGenericRepository<TEntity> : IGenericRepository<TEntity>, IDisposable where TEntity : class
    {
        DbContext _context;
        DbSet<TEntity> _dbSet;

        public EFGenericRepository(DbContext context)
        {
            if (context != null)
            {
                _context = context;
                _dbSet = context.Set<TEntity>();
            }
        }

        public bool Any(Expression<Func<TEntity, bool>> predicate)
        {
            if (_dbSet == null) return false;
            return _dbSet.Any(predicate);
        }

        public IEnumerable<TEntity> Get()
        {
            if (_dbSet == null) return null;
            return _dbSet.AsNoTracking().ToList();
        }

        public IEnumerable<TEntity> Get(Func<TEntity, bool> predicate)
        {
            if (_dbSet == null) return null;
            return _dbSet.AsNoTracking().Where(predicate).ToList();
        }

        public IEnumerable<TEntity> GetWithTracking()
        {
            if (_dbSet == null) return null;
            return _dbSet.ToList();
        }
        public IEnumerable<TEntity> GetWithTracking(Func<TEntity, bool> predicate)
        {
            if (_dbSet == null) return null;
            return _dbSet.Where(predicate).ToList();
        }
        public TEntity FindById(int id)
        {
            if (_dbSet == null) return null;
            return _dbSet.Find(id);
        }

        public TEntity FindById(string id)
        {
            if (_dbSet == null) return null;
            return _dbSet.Find(id);
        }

        public TEntity FirstOrDefault(Func<TEntity, bool> predicate)
        {
            if (_dbSet == null) return null;
            return _dbSet.FirstOrDefault(predicate);
        }

        public async Task<TEntity> FirstOrDefaultAsync(Expression<Func<TEntity, bool>> predicate)
        {
            if (_dbSet == null) return null;
            return await _dbSet.FirstOrDefaultAsync(predicate);
        }

        public void Create(TEntity item)
        {
            if (_dbSet == null) return;

            _dbSet.Add(item);
            _context.SaveChanges();
        }

        public async Task CreateAsync(TEntity item)
        {
            if (_dbSet == null) return;

            _dbSet.Add(item);
            await _context.SaveChangesAsync();
        }
        public void Update(TEntity item)
        {
            if (_context == null) return;

            _context.Entry(item).State = EntityState.Modified;
            _context.SaveChanges();
        }
        public async Task UpdateAsync(TEntity item)
        {
            if (_context == null) return;

            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
        public void Remove(TEntity item)
        {
            if (_dbSet == null) return;

            _dbSet.Remove(item);
            _context.SaveChanges();
        }

        public IEnumerable<TEntity> GetWithInclude(params Expression<Func<TEntity, object>>[] includeProperties)
        {
            return Include(includeProperties).ToList();
        }

        public IEnumerable<TEntity> GetWithInclude(Func<TEntity, bool> predicate,
            params Expression<Func<TEntity, object>>[] includeProperties)
        {
            var query = Include(includeProperties);
            return query.Where(predicate).ToList();
        }

        private IQueryable<TEntity> Include(params Expression<Func<TEntity, object>>[] includeProperties)
        {
            if (_dbSet == null) return null;

            IQueryable<TEntity> query = _dbSet.AsNoTracking();
            return includeProperties
                .Aggregate(query, (current, includeProperty) => current.Include(includeProperty));
        }

        #region IDisposable Support
        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }


        #endregion
    }
}