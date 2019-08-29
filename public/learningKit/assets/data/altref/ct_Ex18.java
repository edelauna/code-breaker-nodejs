import java.io.BufferedReader;
import java.io.InputStreamReader;

public class ct_Ex18 {

    public static void main(String[] args) {
        // sum of two numbers
        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in))){

            int number;

            int p = 0;
            int n = 0;

            do{
                System.out.println("Input number:");
                number = Integer.parseInt(br.readLine());
                if(number>0){
                    p +=1;
                } else if(number<0){
                    n +=1;
                }
            } while (number!=0 && p <= (2*n));


        } catch(Exception e){
            e.printStackTrace();
        }

    }

}
