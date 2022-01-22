//package com.company.School;
//
//public class SecondYearStudent extends Student{
//    private String name;
//    private int[] grades;
//    private String[] subjects = new String[]{"English", "Dutch", "MathII", "Calculus", "Geography"};
//    private String remark;
//    private String schoolYear = "second year";
//
//    public SecondYearStudent(String name, String schoolYear, String remark) {
//        super(name, schoolYear, remark);
//    }
//
//    public SecondYearStudent(String schoolYear, String[] subjects) {
//        super(schoolYear, subjects);
//    }
//
//    public SecondYearStudent(String name, int[] grades) {
//        super(name, grades);
//    }
//
//    @Override
//    public String passYear() {
//        for (int grade : grades) {
//            if (grade == 4) {
//                return "Unfortunately, you have not passed this year.";
//            }
//        }
//        return "Congratulations, you have passed this year!";
//    }
//
//    @Override
//    public String year() {
//        return this.schoolYear;
//    }
//
//    @Override
//    public String[] subjects() {
//        return new String[0];
//    }
//}
