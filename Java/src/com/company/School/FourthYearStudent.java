package com.company.School;

public class FourthYear extends Student {
    private String name;
    private int[] grades
    private String[] subjects = new String[]{"French", "German", "MathIV", "CalculusIII", "ScienceII"};
    private String remark;
    private String schoolYear = "fourth year";

    public FourthYear() {}
    public String passYear() {

        return "We will pass fourth year!";
    }

    @Override
    public String studentWithRemarks(String name, String schoolYear, String remark) {
        return super.studentWithRemarks(name, "fourth year", remark);
    }
}
