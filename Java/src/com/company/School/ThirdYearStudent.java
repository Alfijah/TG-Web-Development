package com.company.School;

public class ThirdYearStudent extends Student{
    private String[] subjects = new String[]{"French", "German", "MathIII", "CalculusII", "Science"};
    private int[] grades;
    private String schoolYear = "third year";

    public ThirdYearStudent() {}

    public ThirdYearStudent(String name) {
        super(name);
    }

    @Override
    public String passYear() {
        for (int grade : grades) {
            if (grade == 4) {
                return "Unfortunately, you have not passed this year.";
            }
        }
        return "Congratulations, you have passed this year!";
    }

    @Override
    public String[] getSubjects() {
        return subjects;
    }

    @Override
    public int[] getGrades() {
        return grades;
    }

    @Override
    public String getSchoolYear() {
        return schoolYear;
    }

    @Override
    public void setSubjects(String... subjects) {
        this.subjects = subjects;
    }

    @Override
    public void setGrades(int... grades) {
        this.grades = grades;
    }
}
