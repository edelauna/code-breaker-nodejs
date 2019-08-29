import java.io.BufferedReader;
import java.io.InputStreamReader;

public class ct_Ex2 {

    public static void main(String[] args) {
        // sum of two numbers
        try {
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            System.out.println("Input a:");
            int a = Integer.parseInt(br.readLine());

            System.out.println("Input b:");
            int b = Integer.parseInt(br.readLine());

            System.out.println("Input c:");
            int c = Integer.parseInt(br.readLine());

            double root1 = (-b + Math.sqrt(b^2 -4*a*c))/(2*a);
            double root2 = (-b - Math.sqrt(b^2 -4*a*c))/(2*a);

            System.out.println(String.format("Root1: %s \nRoot2: %s",root1, root2));


        } catch(Exception e){
            e.printStackTrace();
        }

    }
}
