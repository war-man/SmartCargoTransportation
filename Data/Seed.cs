using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SmartCargoTransportation.Models;
using System;
using System.Threading.Tasks;

namespace SmartCargoTransportation.Data
{
    public static class Seed
    {
        public static async Task CreateRoles(IServiceProvider serviceProvider, IConfiguration Configuration)
        {

            var scopeFactory = serviceProvider.GetRequiredService<IServiceScopeFactory>();
            var scope = scopeFactory.CreateScope();

            //adding customs roles
            var RoleManager = scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();
            string[] roleNames = { "superadmin", "admin", "operation", "accountant", "seller", "foreman" };
            IdentityResult roleResult;

            foreach (var roleName in roleNames)
            {
                // creating the roles and seeding them to the database
                var roleExist = await RoleManager.RoleExistsAsync(roleName);
                if (!roleExist)
                {
                    roleResult = await RoleManager.CreateAsync(new IdentityRole(roleName));
                }
            }

            // creating a super user who could maintain the web app
            var poweruser = new ApplicationUser
            {
                UserName = "admin",
                Email = "admin@xdevs.io"
            };

            var UserManager = scope.ServiceProvider.GetRequiredService<UserManager<ApplicationUser>>();
            string userPassword = "!@#4QWEasd";
            var user = await UserManager.FindByEmailAsync("admin@xdevs.io");

            if (user == null)
            {
                var createPowerUser = await UserManager.CreateAsync(poweruser, userPassword);
                if (createPowerUser.Succeeded)
                {
                    // here we assign the new user to the "Admin" role
                    await UserManager.AddToRoleAsync(poweruser, "admin");
                }
            }
        }
    }
}
