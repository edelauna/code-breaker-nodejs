import java.io.BufferedReader;
import java.io.InputStreamReader;

public class ct_Ex12 {

    public static void main(String[] args) {
        // sum of two numbers
        try {
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            System.out.println("Input number:");
            int originalInt = Integer.parseInt(br.readLine());
            int number = originalInt;
            int remainder = 0;
            int reversedInt = 0;

            do{
                reversedInt = reversedInt*10 + number%10;
                number = number/10;

            } while(number>0);

            if(originalInt==reversedInt){
                System.out.println(String.format("%s = %s", originalInt, reversedInt));
            } else {
                System.out.println(String.format("%s != %s", originalInt, reversedInt));
            }

        } catch(Exception e){
            e.printStackTrace();
        }

    }
}
