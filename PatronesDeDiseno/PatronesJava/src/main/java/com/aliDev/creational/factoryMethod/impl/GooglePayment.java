package com.aliDev.creational.factoryMethod.impl;

import com.aliDev.creational.factoryMethod.Payment;

public class GooglePayment implements Payment {
    @Override
    public void doPayment() {
        System.out.println("Pago con Google");
    }
}
