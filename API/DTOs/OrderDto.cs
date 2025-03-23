using System;
using API.Entities.OrderAggregate;

namespace API.DTOs;

public class OrderDto
{
    // Copy this from Order.cs
    public int Id { get; set; }
    public required string BuyerEmail { get; set; }
    public required ShippingAddress ShippingAddress { get; set; }
    public DateTime OrderDate { get; set; }
    // Make a change here
    public List<OrderItemDto> OrderItems { get; set; } = [];
    public long Subtotal { get; set; }
    public long DeliveryFee { get; set; }
    public long Discount { get; set; }
    public long Total { get; set; }
    public required string OrderStatus { get; set; }
    public required PaymentSummary PaymentSummary { get; set; }
}
