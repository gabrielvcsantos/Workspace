package imc;

import java.util.Scanner;
import java.util.Locale; 

public class CalculoIMC {
	public static void main(String[]args) {
		Scanner sc = new Scanner(System.in);
		sc.useLocale(Locale.ENGLISH);
		
		System.out.println("Digite a sua altura em metros: ");
		double alt = sc.nextDouble();
		
		System.out.println("Digite o seu peso em kg: ");
		double peso = sc.nextDouble();
		
		double imc = peso/(alt*alt);
		System.out.println("Seu IMC e de: "+ imc);
		
		if (imc >= 18.5 && imc <= 25) {
			System.out.println("Seu peso e ideal.");
		}else if (imc > 25){
			System.out.println("Seu peso esta acima do recomendado");
		}else {
			System.out.println("Seu peso esta abaixo do recomendado");
		}
		
		sc.close();
				
	}
}
