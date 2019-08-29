import java.io.BufferedReader;
import java.io.InputStreamReader;

public class ct_Ex2 {

    public static void main(String[] args) {
        // sum of two numbers
        try {
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            System.out.println("Input height:");
            int a = Integer.parseInt(br.readLine());

            System.out.println("Input length:");
            int b = Integer.parseInt(br.readLine());

            System.out.println("Input hypotenuse:");
            int c = Integer.parseInt(br.readLine());

            int p = (a +b+c)/2;
            double area = Math.sqrt(p*(p-a)*(p-b)*(p-c));

            System.out.println(String.format("Area: %s",area));


        } catch(Exception e){
            e.printStackTrace();
        }

    }
}
