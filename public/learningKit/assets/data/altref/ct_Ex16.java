import java.io.BufferedReader;
import java.io.InputStreamReader;

public class ct_Ex16 {

    public static void main(String[] args) {
        // sum of two numbers
        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in))){

            System.out.println("Input number:");
            int number = Integer.parseInt(br.readLine());
            boolean prime = true;
            int d = 2;

            while(prime==true && d <= number/2){
                if (number%d==0){
                    prime = false;
                }
                d += 1;
            }

            if(prime) {
                System.out.println(String.format("%s is prime", number));
            } else {
                System.out.println(String.format("%s is not prime", number));
            }

        } catch(Exception e){
            e.printStackTrace();
        }

    }

}
