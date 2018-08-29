package com.deepak;

import com.deepak.Person;
import com.deepak.child.Child;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello Java 10");
        Person person = new Person();
        person.name = "Deepak";
        Child child = new Child();
        child.childName = "Deepak Jr";
        System.out.println("Name: "+ child.childName);
    }
}