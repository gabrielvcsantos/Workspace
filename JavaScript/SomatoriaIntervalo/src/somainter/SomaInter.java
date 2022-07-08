package somainter;

import java.util.Scanner;

public class SomaInter {
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int somatoria = 0, m, n;
		
		System.out.println("Digite um número");
		int x = sc.nextInt();
		
		System.out.println("Digite outro número");
		int y = sc.nextInt();
		
		if (x>y) {
			m = x;
			n = y;
		}else {
			m = y;
			n = x;
		}
		
		
		for (int i = n; i <= m; i++) {
			 n = n + i + 1;
			 somatoria = n;
		}
		
		System.out.println("A somatoria e: " + somatoria);
		
		sc.close();

	}

}
