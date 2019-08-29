import java.io.BufferedReader;
import java.io.InputStreamReader;

public class ct_Ex6 {

    public static void main(String[] args) {
        // sum of two numbers
        try {
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            int value;
            do{
                System.out.println("Input number:");
                value = Integer.parseInt(br.readLine());

                if(value >0){
                    System.out.println("Input was positive.");
                } else{
                    System.out.println("Input was negative.");
                }

            } while(value!=0);

        } catch(Exception e){
            e.printStackTrace();
        }

    }
}
