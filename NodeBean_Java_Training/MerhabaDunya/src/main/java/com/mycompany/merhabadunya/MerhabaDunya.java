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
        
        String cumle = "bugün hava çok güzel";
        int cumleilkbosluk = cumle.indexOf(' ');
        int cumlesonbosluk = cumle.lastIndexOf(' ');
        System.out.println("cumleilkbosluk: " + cumleilkbosluk + "cumlesonbosluk: " +  cumlesonbosluk);
        String ilkkelime = cumle.substring(0 ,cumleilkbosluk );
        String sonkelime = cumle.substring(cumlesonbosluk+1);
        System.out.println("ilkkelime: " + ilkkelime +"sonkelime: " + sonkelime);
        System.out.println("ilkkelime: " + ilkkelime.charAt(0) + " sonkelime: " + sonkelime.charAt(1));
       
        
        
    }
}
