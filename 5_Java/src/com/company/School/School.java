package com.company.School;

import java.util.ArrayList;
import java.util.Arrays;

public class School {
    public School() {}

    public void registerStudent(Student student) {
        System.out.println(student.getName() + " has been registered.");
    }

    public void getStudentGrades(Student student) {
        System.out.println(student.getName() + " has the following grades: " +
                Arrays.toString(student.getGrades()) + ".");
    }

    public boolean getStudentRemarks(Student student) {
        System.out.println(student.getName() + ": " + student.getRemarksList());
        return true;
    }

    public void getEachYearsSubjects(Student student) {
        System.out.println("Student from the " + student.getSchoolYear() + " has the following subjects: " +
                Arrays.toString(student.getSubjects())+ ".");
    }

    public String[] updateSubjectsList(Student student) {
         return student.updateSubjects(1, "Spanish");
    }

    public static void main(String[] args) {
        String[] firstYearSubjects = new String[]{"English", "Dutch", "Math", "Biology", "Geography"};
        FirstYearStudent firstYearStudent = new FirstYearStudent("Olivia", firstYearSubjects);
        firstYearStudent.setGrades(8, 7, 9, 5, 6);
        firstYearStudent.setRemarksList("Late for school");
        firstYearStudent.setRemarksList("Did not make homework");

        String[] secondYearSubjects = new String[]{"English", "Dutch", "MathII", "Calculus", "Geography"};
        SecondYearStudent secondYearStudent = new SecondYearStudent("Mateo", secondYearSubjects);
        secondYearStudent.setGrades(6, 7, 8, 7, 7);

        String[] thirdYearSubjects = new String[]{"French", "German", "MathIII", "CalculusII", "Science"};
        ThirdYearStudent thirdYearStudent = new ThirdYearStudent("Ava", thirdYearSubjects);
        thirdYearStudent.setGrades(8, 7, 8, 8, 6);

        String[] fourthYearSubjects = new String[]{"French", "German", "MathIV", "CalculusIII", "ScienceII"};
        FourthYearStudent fourthYearStudent = new FourthYearStudent("Lucas", fourthYearSubjects);
        fourthYearStudent.setGrades(6, 7, 6, 9, 8);

        School school = new School();
        school.registerStudent(firstYearStudent);
        school.registerStudent(secondYearStudent);
        school.registerStudent(thirdYearStudent);
        school.registerStudent(fourthYearStudent);

        school.getEachYearsSubjects(firstYearStudent);
        school.getEachYearsSubjects(secondYearStudent);
        school.getEachYearsSubjects(thirdYearStudent);
        school.getEachYearsSubjects(fourthYearStudent);

        school.getStudentGrades(firstYearStudent);
        school.getStudentGrades(secondYearStudent);
        school.getStudentGrades(thirdYearStudent);
        school.getStudentGrades(fourthYearStudent);

        System.out.println(Arrays.toString(school.updateSubjectsList(firstYearStudent)));
        System.out.println(school.getStudentRemarks(firstYearStudent));
        System.out.println(firstYearStudent.getRemarksList().size());

        FirstYearHonor firstPotentialHonorStudent = new FirstYearHonor();
        firstPotentialHonorStudent.addToProgram("Olivia");
        System.out.println(firstPotentialHonorStudent.getFirstHonorStudent());
        firstPotentialHonorStudent.checkForNotes();

        firstPotentialHonorStudent.removeFromProgram("Olivia");
        System.out.println(firstPotentialHonorStudent.getFirstHonorStudent());
    }
}
