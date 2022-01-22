package com.company.School;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;

public class School {

    ArrayList<String> remarks = new ArrayList<String>();

    public static ArrayList<String> arrayList() {
//        FirstYearStudent firstYearStudent = new FirstYearStudent();
        ArrayList<String> students = new ArrayList<String>();
        ArrayList<String> schoolYears = new ArrayList<String>();
        ArrayList<String> school = new ArrayList<String>();
        students.add("henk");
        schoolYears.add("groep1");
        school.addAll(students);
        school.addAll(schoolYears);
        return school;
    }

    public static void main(String[] args) {
        arrayList();
//        FirstYear firstYearStudents = new FirstYear();
//        System.out.println(firstYearStudents.passYear());
//        System.out.println(Arrays.toString(firstYearStudents.subjects));
//        System.out.println(Arrays.toString(firstYearStudents.averageGrades));
//        System.out.println(Arrays.toString(firstYearStudents.averageGrades));
//
//        System.out.println(Arrays.toString(new String[]{firstYearStudents.studentWithRemarks
//                ("Brian", firstYearStudents.schoolYear, "late for school")}));
//
//        System.out.println(Arrays.toString(firstYearStudents.getName()));
    }
    //    int[] averageGrades = {8, 7, 9, 5, 6};
    //    int[] averageGrades = {6, 7, 8, 7, 7};
//    int[] averageGrades = {8, 7, 8, 8, 6};
//    int[] averageGrades = {6, 7, 6, 9, 8};
    //Olivia, Ava, Asher, Mateo


}
