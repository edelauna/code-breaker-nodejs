import java.io.BufferedReader;
import java.io.InputStreamReader;

public class ct_Ex4 {

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

            int d = (b^2 - 4*a*c);

            if(d >= 0){
                double root1 = (-b + Math.sqrt(b^2 -4*a*c))/(2*a);
                if(d>0){
                    double root2 = (-b - Math.sqrt(b^2 -4*a*c))/(2*a);
                    System.out.println(String.format("There are two real solutions, x = %s and %s",root1, root2));
                } else {
                    System.out.println(String.format("There is just one real solution x = %s",root1));
                }
            } else {
                System.out.println(String.format("There are no real solutions to x."));
            }

        } catch(Exception e){
            e.printStackTrace();
        }

    }
}
