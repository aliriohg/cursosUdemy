package com.aliDev.creational.factoryMethod.impl;

import com.aliDev.creational.factoryMethod.Payment;

public class CardPayment implements Payment {
    @Override
    public void doPayment() {
        System.out.println("Pago por tarjeta");
    }
}
