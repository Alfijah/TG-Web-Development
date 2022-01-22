//package com.company.School;
//
//public class FourthYearStudent extends Student {
//    private String name;
//    private int[] grades;
//    private String[] subjects = new String[]{"French", "German", "MathIV", "CalculusIII", "ScienceII"};
//    private String remark;
//    private String schoolYear = "fourth year";
//
//    public FourthYearStudent(String name, String schoolYear, String remark) {
//        super(name, schoolYear, remark);
//    }
//
//    public FourthYearStudent(String schoolYear, String[] subjects) {
//        super(schoolYear, subjects);
//    }
//
//    public FourthYearStudent(String name, int[] grades) {
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
//        return null;
//    }
//
//    @Override
//    public String[] subjects() {
//        return new String[0];
//    }
//}
