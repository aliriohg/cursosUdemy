package com.aliDev;

import com.aliDev.creational.factoryMethod.Payment;
import com.aliDev.creational.factoryMethod.PaymentFactory;
import com.aliDev.creational.factoryMethod.TypePayment;

public class Main {

    public static void main(String[] args) {
        probarFactoryMethod();
    }

    private static void probarFactoryMethod(){
        Payment payment = PaymentFactory.buildPayment(TypePayment.CARD);
        payment.doPayment();
    }
}
