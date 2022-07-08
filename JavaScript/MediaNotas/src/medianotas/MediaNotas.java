package medianotas;

import java.util.Scanner;

public class MediaNotas {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		double[] notas = new double[10];
		for (int i = 0; i < notas.length; i++) {
		  System.out.println("Digite a nota do aluno");
		  notas[i] = sc.nextFloat();
		}
		
		// Calculara média dos alunos
		double totalNotas = 0;
		for (int i = 0; i < notas.length; i++) {
		  totalNotas = totalNotas + notas[i];
		}
		
		double mediaNotas = totalNotas/notas.length;
		System.out.println("A média dos alunos é " + mediaNotas);
		
		for (double nota : notas) {
			System.out.println(nota);
		}
		
		sc.close();
		}
}

