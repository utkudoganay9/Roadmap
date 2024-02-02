/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package javaapplication1;

/**
 *
 * @author Asus
 */
public class JavaApplication1 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        // bir mesajı 10 kere üç farklı döngü çeşidi ile yazdır
        // for döngüsü ile yazdır
        for(int i=0; i<10; i++){
        System.out.println("mesaj"+i);
    }
        // while döngüsü ile yazdır
        int i = 0;
        while(i<10){;
        System.out.println("mesaj"+i);
        i++; }
        
        //do-while döngüsü ile yazdır
        i = 0;
        do{
        System.out.println("mesaj"+i);
        i++;
        }while(i<10);
        }
    }
    
}
