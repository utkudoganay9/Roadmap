/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package javaıf.else1;

import java.util.Scanner;

/**
 *
 * @author Asus
 */
public class JavaIfElse1 {

    /**
     * @param args the command line arguments
     */// 90+ ise AA 85-90 İSE BA 80-85 İSE BB 75-80 İSE CB 70-75 İSE CC 70- İSE FF
    public static void main(String[] args) {
    
        System.out.println("Lütfen Sınav Notunuzu Giriniz");
        java.util.Scanner notlar = new Scanner(System.in);
    int not = notlar.nextInt();
    
    if(not>=90){
    System.out.println("AA");
    }
    
    else if(not>=85){
    System.out.println("BA");
    }
    else if (not>=80){
    System.out.println("BB");
    }
    else if (not>=75){
    System.out.println("CB");
    }
    else if (not>=70){
    System.out.println("CC");
    }
    else{
    System.out.println("F");
    }
    }
  
    
    
}
