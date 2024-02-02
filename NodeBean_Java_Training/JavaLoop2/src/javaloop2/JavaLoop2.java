/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package javaloop2;

/**
 *
 * @author Asus
 */
public class JavaLoop2 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // 100den 0 a rakamları sıralayan kod yaz
        for(int i = 100;i>=0;i--){
            System.out.println("" + i);
            
        }
        for(int i =0;i<=100;i++){
            if(i%3==0 && i%7==0){
         System.out.println("" + i++);
         // 0 dan 100 e kadar hem 3 e hem 7 e bolunebılen sayılar       
            }
        }
        for(int i=1;i<=100;i*=2){
            System.out.println("" + i*2);
            // 0 dan 100 e kadar 2nin üstelleri
        }
        for(int i = 0;i<=5;i++){
            if(i%5==0 && i!=0){
                System.out.println("" + i );
            }
        }
    }
    
}
