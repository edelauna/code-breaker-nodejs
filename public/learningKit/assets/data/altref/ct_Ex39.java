import java.io.BufferedReader;
import java.io.InputStreamReader;

public class ct_Ex39 {

    public static void main(String[] args) {
        // sum of two numbers
        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in))){

            for(int i = 1; i<=100; i++){
                if(prime(i)) {
                    System.out.println(String.format("%s", i));
                }
            }


        } catch(Exception e){
            e.printStackTrace();
        }

    }

    public static boolean prime(int num){
        boolean prime = true;
        int d = 2;

        while(prime==true && d <= num/2){
            if (num%d==0){
                prime = false;
            }
            d += 1;
        }
        return prime;
    }

}
