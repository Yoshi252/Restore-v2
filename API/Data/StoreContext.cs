using System;
using API.Entities;
using API.Entities.OrderAggregate;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class StoreContext(DbContextOptions options) : IdentityDbContext<User>(options)
{
    public required DbSet<Product> Products {get; set;} 
    public required DbSet<Basket> Baskets { get; set; }
    public DbSet<Order> Orders { get; set; }

    // Just write override on, to get the short cut
    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<IdentityRole>()
            .HasData(
                // Get the Id from uuid generator
                new IdentityRole {Id = "82ede05d-7613-46c1-abd7-e7ade14eb25a", Name = "Member", NormalizedName = "MEMBER"},
                new IdentityRole {Id = "692bead6-fe8c-4d0f-a0ce-43c403d05ef5" , Name = "Admin", NormalizedName = "ADMIN"}
            );
    }
}
