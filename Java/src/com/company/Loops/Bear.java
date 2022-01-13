package com.company.Loops;

public class Bear extends Animal {
    static String type;

    public Bear(String name, int age, String typeBear) {
        super(name, age);
        type = typeBear;
        System.out.println("The bear's name is " + name + ", he is " + age + " years old and he's of type " + typeBear + ".");
    }

    static void showType() {
        System.out.println("Type from Bear class: " + type);
        System.out.println("Type from Animal class: " + Animal.type);
    }

    public static void main(String[] args) {
        Bear brownBear = new Bear("Grizzle", 10, "Brown Bear");
        Bear polarBear = new Bear("Polestar", 7, "Polar Bear");
        Animal elephant = new Animal("Indie", 9);

        showType();

        String[] allBears = new String[2];
    }
}