/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package javafibonacci1;

/**
 *
 * @author Asus
 */
public class JavaFibonacci1 {
    

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        int fib[] = new int[10];
        fib[0]=1;
        fib[1]=1;
        for(int i=0;i<10;i++){
            fib[i]=fib[i-1]+fib[i-2];
            }for(int i=0;i<10;i++){
            System.out.println(""+fib[i]);
        }
        // TODO code application logic here
     
}
