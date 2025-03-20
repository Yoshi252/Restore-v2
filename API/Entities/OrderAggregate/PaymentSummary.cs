using System;
using Microsoft.EntityFrameworkCore;

namespace API.Entities.OrderAggregate;

[Owned]
public class PaymentSummary
{
    public int Last4 { get; set; }
    public required int Brand { get; set; }
    public int ExpMonth { get; set; }
    public int ExpYear { get; set; }
}
