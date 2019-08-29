import java.io.BufferedReader;
import java.io.InputStreamReader;

public class ct_Ex8 {

    public static void main(String[] args) {
        // sum of two numbers
        try {
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            int index6 = 0;

            int value;

            do{
                System.out.println("Input number:");
                value = Integer.parseInt(br.readLine());

                if(value >0 && value%2==0){
                    if(value%3==0){
                        index6 +=1;
                        System.out.println("Input was divisible by 6.");
                    }else {
                        System.out.println("Input was not divisible by 6.");
                    }
                } else {
                    System.out.println("Input was not divisible by 6.");
                }

            } while(value!=0);

            System.out.println(String.format("Input was zero, there were : %s numbers divisible by 6",index6));

        } catch(Exception e){
            e.printStackTrace();
        }

    }
}
