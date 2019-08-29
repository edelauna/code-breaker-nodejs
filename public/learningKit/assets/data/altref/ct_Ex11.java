import java.io.BufferedReader;
import java.io.InputStreamReader;

public class ct_Ex11 {

    public static void main(String[] args) {
        // sum of two numbers
        try {
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            System.out.println("Input number:");
            int number = Integer.parseInt(br.readLine());

            int sumDigits = 0;

            do{
                sumDigits = number%10 + sumDigits;
                number = number/10;

            } while(number>0);

            System.out.println(String.format("Sum of digits were equal to %s", sumDigits));

        } catch(Exception e){
            e.printStackTrace();
        }

    }
}
