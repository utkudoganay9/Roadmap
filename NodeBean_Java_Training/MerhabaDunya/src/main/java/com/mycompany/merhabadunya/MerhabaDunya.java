/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.mycompany.merhabadunya;

/**
 *
 * @author Asus
 */
public class MerhabaDunya1 {

    public static void main(String[] args) {
        // bu cümlenin ilk ve son kelimelerini yazdır
        // cümle : ben yazılım ögrenmeye calısıyorum
        String cumle = "ben yazılım ögrenmeye calısıyorum";
        int cumleilkbosluk = cumle.indexOf(' ');
        int cumlesonbosluk = cumle.lastIndexOf(' ');
        System.out.println("cumleilkbosluk: " + cumleilkbosluk + "cumlesonbosluk: " +  cumlesonbosluk);
        String ilkkelime = cumle.substring(0 ,cumleilkbosluk );
        String sonkelime = cumle.substring(cumlesonbosluk+1);
        System.out.println("ilkkelime: " + ilkkelime +"sonkelime: " + sonkelime);
        // yukarıda belirtilen cümledeki ilk kelimenin 1. ve son kelimenin 2.harfini yazdır
        System.out.println("ilkkelime: " + ilkkelime.charAt(0) + " sonkelime: " + sonkelime.charAt(1));
       
        
        
    }
}
