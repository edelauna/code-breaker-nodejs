import java.io.BufferedReader;
import java.io.InputStreamReader;

public class ct_Ex7 {

    public static void main(String[] args) {
        // sum of two numbers
        try {
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            int indexPos = 0;
            int indexNeg = 0;
            int value;
            do{
                System.out.println("Input number:");
                value = Integer.parseInt(br.readLine());

                if(value >0){
                    System.out.println("Input was positive.");
                    indexPos += 1;
                } else if(value<0){
                    System.out.println("Input was negative.");
                    indexNeg += 1;
                }

            } while(value!=0);

            System.out.println(String.format("Input was zero, there were : %s positive numbers, and %s negative numbers",indexPos, indexNeg));

        } catch(Exception e){
            e.printStackTrace();
        }

    }
}
